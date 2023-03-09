function calculateTip(event) {
event.preventDeFault();
let bill = document.getElementById("bill").Value;
let serviceQual = document.getElementById("serviceQual").Value;
let numOfPeople = document.getElementById("people").Value;


}

document.getElementById("totalTip"). style.display = "none"
document.getElementById("each"). style.display = "none"

document.getElementById("tipsForm"). addEventListener("submi", calculateTip);