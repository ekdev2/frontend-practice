/// <reference path="../lib/jasmine-2.4.1/jasmine.js"/>

describe("typing", function() {
    var a;
    
    beforeAll(function() {
        a = 12;
    });
    
    it("the variable is a number type", function() {
        expect(typeof a).toEqual("number");
    });
    
    
    it("the variable equals to 12", function() {
        expect(a).toEqual(12);
    });
});


describe("loosely typed objects", function() {
    var a;
    var b;
    
    beforeAll(function() {
        a = {
            name: "Shawn"
        };
        a.feed = function(){
        }

    });
    
    it("the variable is an object", function() {
        expect(typeof a).toEqual("object");
    });
    
    it("this object has this property", function() {
        expect(a.name).not.toBeUndefined();
    });
    
    
    it("this object has this method", function() {
        expect(a.feed).not.toBeUndefined();
    });
});


describe("lets test some basic closures", function() {
    var a;
    var f;
    
    beforeAll(function() {
        a = 1;
        
        f = function someFunction(){
                var b = a;
                return b;
            }
            a = 2;

    });

    it("the variable is equal to correct result in the closure (function defined in the closure 'remembers' the environment in which it was created)", function() {
        expect(f()).toEqual(2);
    });
});


describe("lets test some type coalescing", function() {
    
    it("test me", function() {
        expect("test " + "me").toEqual("test me");
    });
    
    it("test 1", function() {
        expect("test " + 1).toEqual("test 1");
    });
    
    it("test true", function() {
        expect("test " + true).toEqual("test true");
    });

    
    it("test true 2", function() {
        expect("test " + (1 == 1)).toEqual("test true");
    });
    
    it("100 + 25 as a number + string", function() {
        expect(100 + "25").toEqual("10025");
    });
});


describe("Most operators same as c# except equals/not equals because determines equality with coalescing if necessary", function() {
    
    it("number 1 is still equals to string 1", function() {
        expect("1" == 1).toBeTruthy();
    });
});


describe("use different operators if you want comparison without coalescing", function() {
    
    it("number 1 is not equals to string 1 with the === comparison", function() {
        expect("1" === 1).toBeFalsy();
    });
});


describe("testing null and undefined", function() {
    var a;
    var b;
    
    beforeAll(function() {
        a = null;
        
        b = {};
        b.test = function(){
            
        }
    });
    
    
    it("is a null", function() {
        expect(a).toBeNull();
    });
    
    
    it("is b.test undefined", function() {
        expect(b.test).not.toBeUndefined();
    });
    
});


describe("NaN and isNan", function() {
    it("NaN comparison doesnt work", function() {
        expect(NaN == NaN).toEqual(false);
    });
    
    it("have to use isNaN function to indicate if its a number", function() {
        expect(NaN == NaN).toEqual(false);
    });
});


describe("Testing some strings", function() {
    it("One plus Two - strings are immutable", function() {
        expect("One" + "Two").toEqual("OneTwo");
    });
});








