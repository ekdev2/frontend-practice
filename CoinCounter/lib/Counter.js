CoinCounter.Counter = function(){
    var t = 0;
    var totalScore = 0;
    
    
    this.add = function(amount){
        t += amount;
    }
    
    
    this.subtract = function(amount, cointTypeStatus){
        cointTypeStatus = Number(cointTypeStatus);
        if (cointTypeStatus < 1) {
            return false;
        }
        t -= amount;
    }
    
    
    this.getTotal = function() {
        return t;
    };
    
    
    this.getTotalScore = function() {
        return totalScore;
    };
    
    this.checkUserAccuracy = function(randomNumber) {
        console.log("current random number: " + randomNumber);
        console.log("current total" + t);
        if(randomNumber == t){
            totalScore += 10;
            alert("Correct! + 10 points");
        }
        else{
            totalScore -= 5;
            alert("incorrect - 5 points");
        }
        t=0;
    }
}