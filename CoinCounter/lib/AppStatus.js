CoinCounter.AppStatus = {};

CoinCounter.AppStatus.changeStatus = function(currentTime, startTime) {
    var completeDiv = document.getElementById('Complete');
    var mainDiv = document.getElementById('Main');
    completeDiv.style.display = "none";
    
    if (currentTime == startTime) {
        mainDiv.style.display = "block";
    }
    else if (currentTime == 0) {
        completeDiv.style.display = "block";
        mainDiv.style.display = "none";
    }
}

CoinCounter.AppStatus.displayTime = function(currentTime) {
    var timerDiv = document.getElementById('Timer');
    timerDiv.innerHTML = currentTime;
}

CoinCounter.AppStatus.updateScore = function(scoreDiv, score) {
    scoreDiv.innerHTML = score;
}

CoinCounter.AppStatus.displayCoinTypeAmount = function(div, action) {
    if (action == "add") {
        div.innerHTML = Number(div.innerHTML) + 1;
    }
    else if (action == "subtract" && Number(div.innerHTML) > 0) {
        div.innerHTML = Number(div.innerHTML) - 1;
    }
}

CoinCounter.AppStatus.updateRandomNumber = function(randomDiv, randomNumber) {
    randomDiv.innerHTML = randomNumber.randomize();
}


CoinCounter.AppStatus.startGame = function() {
   var randomNumber = new CoinCounter.RandomNumber(1, 100);
   var counter = new CoinCounter.Counter();
   
   var timer = new CoinCounter.Timer(20, 1000);
   timer.startSession();
   
   CoinCounter.AppStatus.updateRandomNumber(document.getElementById('RandomNumber2'), randomNumber);
   
    console.log(randomNumber.getCurrentNumber());
    
   
   CoinCounter.CointType.outputCoinTypes(counter);
   
   CoinCounter.AppStatus.updateScore(document.getElementById('score'), 0);
   
   var btnGo = document.getElementById("btnGo");
   
   var clonedGo = document.getElementById("btnGo").cloneNode();
   clonedGo.textContent = btnGo.textContent;
   
   btnGo.parentNode.replaceChild(clonedGo, btnGo);
   
   document.getElementById("btnGo").addEventListener("click", function(){  
       counter.checkUserAccuracy(randomNumber.getCurrentNumber());
       CoinCounter.AppStatus.updateScore(document.getElementById('score'), counter.getTotalScore());
       CoinCounter.CointType.outputCoinTypes(document.getElementById('CoinTypes'), counter);
       CoinCounter.AppStatus.updateRandomNumber(document.getElementById('RandomNumber2'), randomNumber);
       CoinCounter.AppStatus.addCoinTypeButtonEvents(counter);
   });
   
   CoinCounter.AppStatus.addCoinTypeButtonEvents(counter);
}

CoinCounter.AppStatus.addCoinTypeButtonEvents = function(counter) {
    for (var i = 0; i < CoinCounter.CointType.coinTypes.length; i++) {    
       (function () {
            var name =   CoinCounter.CointType.coinTypes[i].name;
            var amount = CoinCounter.CointType.coinTypes[i].amount;
            var buttonAdd = document.getElementById("btnAdd" + name);
            var buttonSubtract = document.getElementById("btnSubtract" + name);
            
            var div = document.getElementById("coinTypeAmount" + name);
            
            buttonAdd.addEventListener("click", function(){  
                counter.add(amount);
                CoinCounter.AppStatus.displayCoinTypeAmount(div, "add");
            });
            buttonSubtract.addEventListener("click", function(){  
                counter.add(amount);
                CoinCounter.AppStatus.displayCoinTypeAmount(div, "subtract");
            });
        }())
   }
}






        
        
        