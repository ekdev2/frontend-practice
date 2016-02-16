CoinCounter.Counter = function(){
    var t = 0;
    
    this.add = function(amount, id){
        console.log(id);
        t += amount;
    }
    
    
    this.subtract = function(amount){
        t -= amount;
    }
    
    
    this.getTotal = function() {
        return t;
    };
}