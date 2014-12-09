var request = require('request')

describe("/streams/get/1", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams/get/1'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/get", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams/get'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/get/99", function() {
    it("GET", function(done) {
        request.get({
            url: 'http://localhost:3000/apiV1/streams/get/99'
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
});

describe("/streams/post", function() {
    it("POST", function(done) {
        request.post({
            url: 'http://localhost:3000/apiV1/streams/post'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/post/1", function() {
    it("POST", function(done) {
        request.post({
            url: 'http://localhost:3000/apiV1/streams/post/1'
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
});

describe("/streams/delete/1", function() {
    it("POST", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams/delete/1'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/delete", function() {
    it("POST", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams/delete'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/delete/99", function() {
    it("POST", function(done) {
        request.del({
            url: 'http://localhost:3000/apiV1/streams/delete/99'
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
});

describe("/streams/put/99", function() {
    it("POST", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams/put/99'
        }, function(err, res){
            expect(res.statusCode).toEqual(404);
            done();
        });
    });
});

describe("/streams/put", function() {
    it("POST", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams/put'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});

describe("/streams/put/1", function() {
    it("POST", function(done) {
        request.put({
            url: 'http://localhost:3000/apiV1/streams/put/1'
        }, function(err, res){
            expect(res.statusCode).toEqual(200);
            done();
        });
    });
});