var Leonardo = window.document.getElementById("card-leonardo")
var Samantha = window.document.getElementById("card-samantha")
var Bruna = window.document.getElementById("card-bruna")

var lArrow = window.document.getElementById("arrow-left")
var rArrow = window.document.getElementById("arrow-right")

function scrollR(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"

    rArrow.style = "display: none"
    lArrow.style = "display: flex"
}

function scrollL(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"

    rArrow.style = "display: flex"
    lArrow.style = "display: none"
}