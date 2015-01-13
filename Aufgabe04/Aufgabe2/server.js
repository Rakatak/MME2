var express = require('express')
var bodyParser = require('body-parser')
var ObjectId = require('mongodb').ObjectID;
var mongojs = require('mongojs')
var app = express()
var db = mongojs('test', ['test'])

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
app.use("/", express.static(__dirname + '/public'));

var error404 =
{
    type: "error",
    statusCode: 404,
    msg: "Requested resource not found"
}

var error400 =
{
    type: "error",
    statusCode: 400,
    msg: "Missing Parameters in call"
}


app.get('/', function (req, res) {
    res.sendfile("./public/index.htm");
})

app.get('/apiV1/streams/:_id?', function (req, res) {
    console.log('GET Request at http://%s:%s/%s', host, port, "apiV1/streams/" + req.params._id)
    if (req.params._id != undefined) {
        db.test.find({'_id': new ObjectId(req.params._id)}, function (err, docs) {
            if (docs == undefined) {
                res.status(404)
                res.send(error404);
            } else {
                res.status(200)
                console.log(docs[0]);
                res.send(docs[0]);
            }
        });
    } else {
        db.test.find(function (err, docs) {
            res.status(200)
            console.log(docs);
            res.send(docs);
        });
    }
})


var post = app.post('/apiV1/streams/:_id?', function (req, res) {
    console.log('POST Request at http://%s:%s/%s', host, port, "apiV1/streams/")
    console.log(req.body)
    if (req.params._id == undefined) {
        if (req.body.name == undefined || req.body.url == undefined) {
            res.status(400)
            res.send(error400)
        } else {
            var _state = parseInt(req.body.state) || 0
            db.test.save({
                name: req.body.name,
                description: req.body.description,
                url: req.body.url,
                state: _state
            }, function (err, docs) {
                res.status(201)
                console.log(docs);
                res.send(docs);
            });
        }
    } else {
        res.status(404)
        res.send(error404);
    }
});

app.delete('/apiV1/streams/:_id?', function (req, res) {
    console.log('DELETE Request at http://%s:%s/%s', host, port, "apiV1/streams/" + req.params._id)
    if (req.params._id != undefined) {
        res.status(204)
        db.test.remove({'_id': new ObjectId(req.params._id)}, function (err, docs) {
            console.log(docs[0]);
            res.send(docs[0]);
        });
    } else {
        res.status(204)
        db.test.remove(function (err, docs) {
            console.log(docs);
            res.send(docs);
        });
    }
})

app.put('/apiV1/streams/:_id?', function (req, res) {
    console.log('PUT Request at http://%s:%s/%s', host, port, "apiV1/streams/" + req.params._id)
    if (req.params._id != undefined) {
        if (req.body.name == undefined || req.body.url == undefined) {
            res.status(400)
            res.send(error400)
        } else {
            var _state = parseInt(req.body.state) || 0
            db.test.update({'_id': new ObjectId(req.params._id)}, {
                name: req.body.name,
                description: req.body.description,
                url: req.body.url,
                state: _state
            }, function (err, docs) {
                console.log(docs[0]);
                res.send(docs[0]);
                res.status(200);
            });
        }

    } else {
        res.status(404)
        res.send(error404)
    }
})

var host;
var port;
var server = app.listen(3000, function () {

    host = server.address().address
    port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})

