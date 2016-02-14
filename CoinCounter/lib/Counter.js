CoinCounter.Counter = function(){
    var t = 0;
    
    this.coinTypes = [
        {
            name: "Penny",
            amount: 1
        },
        {
            name: "Nickel",
            amount: 5
        },
        {
            name: "Dime",
            amount: 10
        },
        {
            name: "Quarter",
            amount: 25
        }
    ]
    
    this.outputCoinTypes = function(div) {
        
        for (var i = 0; i < this.coinTypes.length; i++) {
                        
            div.innerHTML += "<div style='width:200px;clear:left;float:left;margin-right:100px;'>" + this.coinTypes[i].name + "</div>";
            div.innerHTML += "<div style='float:left;'>" + this.coinTypes[i].amount + "</div>";
            
        }
    }
    
    
    
    this.total = t;
}