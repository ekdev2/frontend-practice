
var CoinCounter = {};

CoinCounter.Timer = function(startTime,  timerDelay, mainDiv, timerDiv, completeDiv){
    var currentTime = startTime + 1;
    
    this.timerCallback = function(){
        currentTime -= 1; 
        
        CoinCounter.AppStatus.displayTime(currentTime, timerDiv);
        CoinCounter.AppStatus.changeStatus(currentTime, startTime, mainDiv, completeDiv);
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

