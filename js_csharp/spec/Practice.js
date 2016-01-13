/// <reference path="../lib/jasmine-2.4.1/jasmine.js"/>

describe("javascript typing", function() {

    it("works if you indicate a type", function() {
        var a = 12;
        expect(typeof a).toEqual("number");
    });
});