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


describe("testing object literals", function() {
    var a;
    
    beforeAll(function() {
        a = {
            name: "name 1",
            age: 12,
            emails: {
                email1: "em1",
                email2: "em2"
            }
        }
    });
    
    
    it("does this value exist in an object literal", function() {
        expect(a.emails.email1).toEqual("em1");
    });
    
});


describe("testing array literals", function() {
    var a;
    var b;
    
    beforeAll(function() {
        a = ["test", "test 2", 4];
        
        b = [
                {
                name: "name 1",
                age: 12,
                emails: {
                    email1: "em1",
                    email2: "em2"
                    }
                },
                
                {
                name: "name 2",
                age: 13,
                emails: {
                    email1: "em1A",
                    email2: "em2A"
                    }
                }
            ]
    });
    
    
    it("does the string and number type array work", function() {
        expect(a).toContain(4);
    });
    
    
    it("does the object collection array work", function() {
        expect(b[1].emails.email1).toEqual("em1A");
    });
    
});



describe("testing if js can overload - the result should be that it cannot", function() {
    var a;
    var b;
    
    beforeAll(function() {
       
    });
    
    
    it("will it call the first function. nope. cannot overload in js", function() {
        
       function test(one){
           return "a";
       }
       
       function test(one, two){
           return "b";
       }
        
        expect(test("")).toEqual("b");
    });
});


describe("arguments function - metadata on function parameters", function() {

    beforeAll(function() {
       
    });
    
    
    it("does the function have the right number of arguments", function() {
        
       function test(){
            return arguments.length;
       }

        expect(test("")).toEqual(1);
    });
});


describe("Functions are also objects – have properties and member functions", function() {

    var eugene;

    beforeAll(function() {
        
       eugene =  function test(){
                return "value";
            }
       
    });
    
    
    it("does the function have the right number of arguments", function() {
        expect(typeof eugene).toEqual("function");
    });
    
    
    it("since the function is also an object lets see some of its properties", function() {
        expect(eugene.name).toEqual("test");
    });
   
});


describe("this keyword", function() {

    var eugene;
    var f;

    beforeAll(function() {
        
       eugene =  function test(){
                return this;
            };
            
            (
               f = function(){
                    return this;
                }
            );
       
    });
    
    it("what does this return in a function if the function is in global scope", function() {
        expect(eugene().toString()).toEqual("[object Window]");
    });
    
    
    it("what if the function is not in global scope - still might be because the variable that called it is in global scope", function() {
        expect(f().toString()).toEqual("[object Window]");
    });
});








