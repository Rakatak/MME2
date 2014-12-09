var express = require('express')
var app = express()
app.use("/", express.static(__dirname + '/public'));

var streams = [
    {id: 0, msg:"I hate apples"},
    {id: 1, msg:"Mary and Steve just turning twenty and free"},
    {id: 2, msg: "Charming as ever"}
];

var error =
    {
        type: "error",
        statusCode : 404,
        msg: "Requested resource not found"
    }

app.get('/', function (req, res) {
    res.sendfile("./public/index.htm");
})

app.get('/apiV1/streams/get/:id?', function (req, res) {
    console.log('GET Request at http://%s:%s/%s', host, port, "/apiV1/streams/get/" + req.params.id)
    if (req.params.id < 0 || req.params.id > 2) {
        res.status(404);
        res.send(error);
    } else if (req.params.id != undefined) {
        res.status(200)
        res.send(streams[req.params.id])
    } else {
        res.status(200)
        res.send(streams);
    }
})

app.post('/apiV1/streams/post/:id?', function (req, res) {
    console.log('POST Request at http://%s:%s/%s', host, port, "/apiV1/streams/post/" + req.params.id)
    if (req.params.id == undefined) {
        res.status(200)
        res.send({statusCode: 200, msg: "stream created"})
    } else {
        res.status(404)
        res.send(error);
    }
})

app.delete('/apiV1/streams/delete/:id?', function (req, res) {
    console.log('DELETE Request at http://%s:%s/%s', host, port, "/apiV1/streams/delete/" + req.params.id)

    if (req.params.id < 0 || req.params.id > 2) {
        res.status(404);
        res.send(error);

    } else if (req.params.id != undefined) {
        res.status(200)
        res.send(streams[req.params.id])

    } else {
        res.status(200)
        res.send(streams);
    }
})

app.put('/apiV1/streams/put/:id?', function (req, res) {
    console.log('PUT Request at http://%s:%s/%s', host, port, "/apiV1/streams/put/" + req.params.id)
    if (req.params.id < 0 || req.params.id > 2) {
        res.status(404);
        res.send(error);
    } else if (req.params.id != undefined) {
        res.status(200)
        res.send(streams[req.params.id])

    } else {
        res.status(200)
        res.send(streams);
    }
})

var host;
var port;
var server = app.listen(3000, function () {

    host = server.address().address
    port = server.address().port

    console.log('Example app listening at http://%s:%s', host, port)

})
