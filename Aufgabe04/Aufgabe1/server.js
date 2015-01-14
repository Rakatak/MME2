var express = require('express')
var bodyParser = require('body-parser')
var ObjectId = require('mongodb').ObjectID;
var mongojs = require('mongojs')
var app = express()
var db = mongojs('test', ['test'])

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.use(allowCrossDomain);


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
        if (req.params._id.length != 24 ){
            res.status(404)
            res.send(error404);
        } else {
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
        }
    } else {
        var temp = req.query
        if (temp.name == undefined){
            db.test.find(function (err, docs) {
                res.status(200)
                console.log(docs);
                res.send(docs);
            });

        } else {
            console.log("QUERY!!!!!!    " + JSON.stringify(temp))
            if (req.query.state != undefined) {
                temp = {state: parseInt(req.query.state)}
            }

            var yeah = '^/' + temp.name + '$/i'
            console.log(yeah)
            var exp = new RegExp(temp.name, 'i')
            db.test.find({'name' : exp }, function (err, docs) {
                res.status(200)
                console.log(docs);
                res.send(docs);
            });
        }
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
            var _desc = req.body.description || ""
            db.test.save({
                name: req.body.name,
                description: _desc,
                url: req.body.url,
                state: _state
            }, function (err, docs) {
                res.status(201)
                console.log("LOOOL  " + docs);
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
            console.log("Deleted");
            res.send(docs);
        });
    }
})

app.put('/apiV1/streams/:_id', function (req, res) {
    console.log('PUT Request at http://%s:%s/%s', host, port, "apiV1/streams/" + req.params._id)
    if (req.params._id != undefined) {
        var lol = new ObjectId(req.params._id)
        db.test.findOne({'_id': lol}, function(err, stream) {
            var _name = req.body.name || stream.name
            var _desc = req.body.description || stream.description
            var _url = req.body.url || stream.url
            var _state = parseInt(req.body.state)
            if (_state == undefined || isNaN(_state)) {
                _state = parseInt(stream.state)
            }
            db.test.save({
                _id : lol,
                name: _name,
                description: _desc,
                url: _url,
                state: parseInt(_state)
            }, function (err, docs) {
                res.status(200)
                console.log(docs);
                res.send(docs);
            });
        });



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

