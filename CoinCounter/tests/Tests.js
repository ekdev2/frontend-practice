

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
        var timer = new CoinCounter.Timer(new Object(), 21, 1000);
        timer.showTime();
        
        jasmine.clock().tick(21000);

        expect(timer.showTime()).toEqual(0);
    });
    
});


describe("testing the random number object", function() {
    
    it("the random number object returns random number 1 to 100", function() {
        var rNumber = CoinCounter.RandomNumber.randomize(1,100); 
        expect(rNumber).toBeGreaterThan(0);
        expect(rNumber).toBeLessThan(101);
        expect(Number.isInteger(rNumber)).toBeTruthy();
    });
    
});








