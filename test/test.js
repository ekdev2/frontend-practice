var assert = require('chai').assert
    , foo = "test"
    , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };


describe('testing whether foo is a string', function () {
    it('should return a string', function () {
        assert.typeOf(foo, 'string');
    });
});









