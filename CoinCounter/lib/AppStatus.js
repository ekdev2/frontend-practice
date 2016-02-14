CoinCounter.AppStatus = {};

CoinCounter.AppStatus.changeStatus = function(currentTime, startTime, mainDiv, completeDiv) {
    completeDiv.style.display = "none";
    
    if (currentTime == startTime) {
        mainDiv.style.display = "block";
    }
    else if (currentTime == 0) {
        completeDiv.style.display = "block";
        mainDiv.style.display = "none";
    }
}

CoinCounter.AppStatus.displayTime = function(currentTime, timerDiv) {
    timerDiv.innerHTML = currentTime;
}


        
        
        