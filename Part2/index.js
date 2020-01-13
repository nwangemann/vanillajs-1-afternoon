let idGrabVal = document.getElementById("idGrab")
let styleInput = document.getElementById("style")


function setCard(){
    let card = document.getElementById(idGrabVal.value)
    console.log(card)
    card.style.color = styleInput.value
}