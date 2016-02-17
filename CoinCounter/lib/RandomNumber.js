
CoinCounter.RandomNumber = function(min, max){
    var currentNumber = 0;
    
    this.randomize = function(){
        currentNumber = Math.round(Math.random() * (max - min) + min);
        return currentNumber;
    }
    
    this.getCurrentNumber = function(){
        return currentNumber;
    }
}

