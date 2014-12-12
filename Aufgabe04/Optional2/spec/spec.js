var request = require('request')

var streams = [
    {id: 0, msg: "I hate apples"},
    {id: 1, msg: "Mary and Steve just turning twenty and free"},
    {id: 2, msg: "Charming as ever"}
];

var error =
{
    type: "error",
    statusCode: 404,
    msg: "Requested resource not found"
}

describe("/streams/get/1", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams/1'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual(streams[1]);
            done();
        });
    });
});

describe("/streams/get", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual(streams);
            done();
        });
    });
});

describe("/streams/get/99", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams/99'
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            expect(JSON.parse(res.body)).toEqual(error);
            done();
        });
    });
});

describe("/streams/post", function() {
    it("POST", function(done) {
        request.post({
            url: 'http://localhost:3000/apiV1/streams',
            form: {id: 9999 , msg: "newPost"}
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual({ id: 9999 , msg: "newPost" });
            done();
        });
    });
});

describe("/streams/post/1", function() {
    it("POST", function(done) {
        request.post({
            url: 'http://localhost:3000/apiV1/streams/1',
            form: {id: 9999 , msg: "newPost"}
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            expect(JSON.parse(res.body)).toEqual(error);
            done();
        });
    });
});

describe("/streams/delete/1", function() {
    it("DELETE", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams/1',
            form: {id: 1 }
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual({id: 1 , msg: "deleted"});
            done();
        });
    });
});

describe("/streams/delete", function() {
    it("DELETE", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams',
            form: {msg: "delete all streams"}
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual(streams);

            done();
        });
    });
});

describe("/streams/delete/99", function() {
    it("DELETE", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams/99',
            form: {id:99 , msg: "deleted"}
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            expect(JSON.parse(res.body)).toEqual(error);
            done();
        });
    });
});

describe("/streams/put/99", function() {
    it("PUT", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams/99',
            form: {id: 99 , msg: "updated"}
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            expect(JSON.parse(res.body)).toEqual(error);
            done();
        });
    });
});

describe("/streams/put", function() {
    it("PUT", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams',
            form: {msg: "updated all streams"}
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual({msg: "updated all streams"});
            done();
        });
    });
});

describe("/streams/put/1", function() {
    it("POST", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams/1',
            form: {id: 1 , msg: "updated"}
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            expect(JSON.parse(res.body)).toEqual({id : 1 , msg: "updated"});
            done();
        });
    });
});

