

var CoinCounter = {};

CoinCounter.Timer = function(el, startTime, delay){
    var el = el;
    var startTime = startTime;
    var currentTime = startTime;
    
    
    this.timerCallback = function(){
        currentTime -= 1; 
        el.innerHTML = currentTime;
    }
    
    this.timeout = function(i){
        window.setTimeout(this.timerCallback, i * delay);
    }

    this.showTime = function(){
        for (var i = 1; i < startTime + 1; i++) {
            this.timeout(i);
        };
        
        return currentTime;
    }
}

