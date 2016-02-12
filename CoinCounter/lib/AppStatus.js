
CoinCounter.AppStatus = {
    mainDiv: document.getElementById('Main'),
    timerDiv: document.getElementById('Timer'),
    completeDiv: document.getElementById('Complete')
};


CoinCounter.AppStatus.changeStatus = function(currentTime, startTime) {
    CoinCounter.AppStatus.completeDiv.style.display = "none";
    
    if (currentTime == startTime) {
        CoinCounter.AppStatus.mainDiv.style.display = "block";
    }
    else if (currentTime == 0) {
        CoinCounter.AppStatus.completeDiv.style.display = "block";
        CoinCounter.AppStatus.mainDiv.style.display = "none";
    }
}

CoinCounter.AppStatus.displayTime = function(currentTime) {
    CoinCounter.AppStatus.timerDiv.innerHTML = currentTime;
}


        
        
        