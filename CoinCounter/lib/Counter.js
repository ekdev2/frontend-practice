CoinCounter.Counter = function(){
    var t = 0;
    
    
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
}