/*
* preface
* clean code that works is the goal of test driven development
* test driven development is a way of managing fear during programming ("this is a hard problem to solve" fear)
* */


var assert = require('chai').assert


describe('testing whether foo is a string', function () {
    it('should return a string', function () {
        assert.typeOf(foo, 'string');
    });
});









