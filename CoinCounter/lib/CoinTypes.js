CoinCounter.CointType = {};

CoinCounter.CointType.coinTypes = [
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

CoinCounter.CointType.outputCoinTypes = function(div, counter) {  
    var coinTypeStatusId;
    for (var i = 0; i < this.coinTypes.length; i++) {
        coinTypeStatusId = "coinTypeAmount" + this.coinTypes[i].name;
        div.innerHTML += "<div style='width:200px;clear:left;float:left;margin-right:100px;'>" + this.coinTypes[i].name + "</div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;'><input type='button' value='+' onclick='counter.add("+ this.coinTypes[i].amount +", document.getElementById(\""+ coinTypeStatusId +"\"))' /></div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;'><input type='button' value='-' onclick='counter.subtract("+ this.coinTypes[i].amount +")' /></div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;margin-top:10px;' id='"+ coinTypeStatusId +"'>0</div>";
    }
}