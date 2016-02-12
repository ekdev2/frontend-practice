
CoinCounter.RandomNumber = function(min, max){
    
    this.randomize = function(){
        return Math.round(Math.random() * (max - min) + min);
    }
}

