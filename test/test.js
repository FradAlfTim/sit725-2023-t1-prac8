let expect = require('chai').expect;
let request = require('request');
let url = 'http://localhost:3000/api/ducks';
let duck = {
    title:'test',
    link:'test',
    path:'test',
    description:'test'
}

describe('test get all ducks', function(){
    it('return status code of 200', function(done){
        request(url, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('return successful message', function(done){
        request(url, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Success');
            done();
        });
    });

    it('return an array', function(done){
        request(url, function(error, response, body){
            body = JSON.parse(body);
            expect(body.data).to.be.a('array');
            done();
        });
    });
});

describe('test post a duck', function(){
    it('insert a duck to database', function(done){
        request.post({url:url, form:duck}, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Added');
            done();
        });
    });
});

describe('test delete a duck', function(){
    it('delete a duck from database', function(done){
        request.delete({url:url, form:duck}, function(error, response, body){
            body = JSON.parse(body);
            expect(body.message).to.contain('Deleted');
            done();
        });
    });
});