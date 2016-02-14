
describe("testing the timer", function() {
    
    var timerCallback;
   
    beforeAll(function() {
        timerCallback = jasmine.createSpy("timerCallback");
        jasmine.clock().install();
    });

    afterAll(function() {
        jasmine.clock().uninstall();
    });
  
    it("the timer should run down to 0", function() {
        var mainDiv = document.createElement('div');
        var timerDiv = document.createElement('div');
        var completeDiv = document.createElement('div');
        
        var timer = new CoinCounter.Timer(20, 1000, mainDiv, timerDiv, completeDiv);
        timer.startSession();
        
        jasmine.clock().tick(20000);

        expect(timer.startSession()).toEqual(0);
    });
    
    
    
});


describe("testing the random number object", function() {
    
    it("the random number object returns random number 1 to 100", function() {
        var random = new CoinCounter.RandomNumber(1,100)
        var rNumber = random.randomize(); 
        expect(rNumber).toBeGreaterThan(0);
        expect(rNumber).toBeLessThan(101);
        
        expect(Number.isInteger(rNumber)).toBeTruthy();
    });
    
});


describe("testing the counter", function() {
    
    var counter;
    
    beforeAll(function() {
        counter = new CoinCounter.Counter();
    });
    
    it("the coinType to have correct coin types and their values", function() {
        expect(counter.coinTypes[0].name.toLowerCase()).toBe("penny");
        expect(counter.coinTypes[0].amount).toBe(1);
        
        expect(counter.coinTypes[1].name.toLowerCase()).toBe("nickel");
        expect(counter.coinTypes[1].amount).toBe(5);
        
        expect(counter.coinTypes[2].name.toLowerCase()).toBe("dime");
        expect(counter.coinTypes[2].amount).toBe(10);
        
        expect(counter.coinTypes[3].name.toLowerCase()).toBe("quarter");
        expect(counter.coinTypes[3].amount).toBe(25);
    });
    
    it("the counter total is a number", function() {
        expect(Number.isInteger(counter.total)).toBeTruthy();
    });
});








