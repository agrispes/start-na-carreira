function calculateTip(event) {
event.preventDeFault();
let bill = document.getElementById("bill").Value;
let serviceQual = document.getElementById("serviceQual").Value;
let numOfPeople = document.getElementById("people").Value;
if (bill == '' 〡 serviceQual == 0){
   alert("por favor, preencha os valores") return;
}
if(numOfPeople == "" 〡 numOfPeople <= 1) {
numOfPeople = 1;
document.getElementById('each').style.display = "none"

} else {

    document.getElementById('each').style.display = "block"
}

let total= (bill * serviceQual) / numOfPeople;
total = total.toFixed(2);
document.getElementById('tip'). innerHTML = total;
document.getElementById("totalTip"). style.display = "block"



}

document.getElementById("totalTip"). style.display = "none"
document.getElementById("each"). style.display = "none"

document.getElementById("tipsForm"). addEventListener("submi", calculateTip);