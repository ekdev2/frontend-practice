/*global CoinCounter */

var CoinCounter = {};

CoinCounter.Timer = function(startTime,  timerDelay){
    var currentTime = startTime + 1;
    
    this.timerCallback = function(){
        currentTime -= 1; 
        
        CoinCounter.AppStatus.displayTime(currentTime);
        CoinCounter.AppStatus.changeStatus(currentTime, startTime);
    }
    
    this.timeout = function(i){
        window.setTimeout(this.timerCallback, i *  timerDelay);
    }

    this.startSession = function(){
        for (var i = 0; i < startTime + 1; i++) {
            this.timeout(i);
        };
        
        return currentTime;
    }
}

