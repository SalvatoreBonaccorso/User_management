var assert = require('assert');
var index = require('../index')
describe("Test user management", function () {
    describe("Test reset user", function () {
        it("successful case",function(){
            index.reset();
            assert.equal(index.getUsers(), 0);
        })
    });
    describe('Test add User ', function () {
        it("successful case",function(){
        index.addUser('salvatore', 'bonaccorso');
        assert.equal(index.getUsers(), 1);
        assert.equal(index.getId(), 1);
    })
    });
    describe("Test delete user", function () {
        it("successful case",function(){
        index.reset();
        index.addUser('salvatore', 'bonaccorso');
        index.deleteUser(0);
        assert.equal(index.getUsers(), 0);
    })
    })
    describe("Test find user by name", function () {
        it("successful case",function(){
        index.reset();
        index.addUser('salvatore', 'bonaccorso');
        index.findByName("salvatore");
        assert.equal(index.findByName.length, 1);
    })
    })

});
