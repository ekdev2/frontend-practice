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

CoinCounter.CointType.coinTypeStatusId = "coinTypeAmount";

CoinCounter.CointType.btnAddId = "btnAdd";

CoinCounter.CointType.btnSubtractId = "btnSubtract";

CoinCounter.CointType.outputCoinTypes = function() {  
    var div = document.getElementById("CoinTypes");
    div.innerHTML = "";
    for (var i = 0; i < this.coinTypes.length; i++) {
        div.innerHTML += "<div style='width:200px;clear:left;float:left;margin-right:100px;'>" + this.coinTypes[i].name + "</div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;'><input type='button' id='"+ this.btnAddId + this.coinTypes[i].name +"' value='+' /></div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;'><input type='button' id='"+ this.btnSubtractId + this.coinTypes[i].name +"' value='-' /></div>";
        div.innerHTML += "<div style='float:left;margin-right:10px;margin-top:10px;' id='"+ this.coinTypeStatusId + this.coinTypes[i].name +"'>0</div>";
    }
}