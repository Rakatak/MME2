

describe("/streams/apiV1/get/1", function() {
  var request = require('request')
  it("GET", function(done) {
    request.get({
      url: 'http://localhost:3000/apiV1/streams/get1'
    }, function(err, res){
      expect(res.statusCode).toEqual(200);
      done();
    });
  });
});