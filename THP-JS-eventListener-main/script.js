let myFooter = document.getElementById("myFooter")
let clickNumber = 0
myFooter.addEventListener("click", function(){
    console.log(`click numéro : ${clickNumber}`)
    clickNumber += 1
})

let togglerIcon = document.getElementsByClassName("navbar-toggler")[0]
let menuNav = document.getElementById("navbarHeader")
togglerIcon.addEventListener("click", function(){
    menuNav.classList.toggle("collapse")
})

let firstEditBtn = document.getElementsByClassName("btn-outline-secondary")[0]
let firstCardText = document.getElementsByClassName("card-text")[0]
firstEditBtn.addEventListener("click", function(){
    firstCardText.style.color = "red"
})

let secondEditBtn = document.getElementsByClassName("btn-outline-secondary")[1]
let secondCardText = document.getElementsByClassName("card-text")[1]
secondEditBtn.addEventListener("click", function(){
    if (secondCardText.style.color === "green") {
        secondCardText.style.color = ""
    } else if (secondCardText.style.color !== "green") {
        secondCardText.style.color = "green"
    } 
})

let navBar = document.getElementsByClassName("navbar")[0]
navBar.addEventListener("dblclick", function(){
    document.styleSheets[0].disabled = !document.styleSheets[0].disabled
})

let viewButton = document.getElementsByClassName("btn-success")
let textZone = document.getElementsByClassName("card-text")
let cardImg = document.getElementsByClassName("card-img-top")
for (let index = 0; index < viewButton.length; index++) {
    viewButton[index].addEventListener("mouseover", function(){
        textZone[index].classList.toggle("collapse")
        if (cardImg[index].style.width === "20%") {
            cardImg[index].style.width = "100%"
        } else {
            cardImg[index].style.width = "20%"
        }
})}

let flecheDroiteButton = document.getElementsByClassName("my-2")[1]
flecheDroiteButton.addEventListener("click", function(e){
    e.preventDefault()
    document.getElementsByClassName("row")[1].insertBefore(document.getElementsByClassName("col-md-4")[5], document.getElementsByClassName("col-md-4")[0])
})

let flecheGaucheButton = document.getElementsByClassName("my-2")[0]
flecheGaucheButton.addEventListener("click", function(e){
    e.preventDefault()
    document.getElementsByClassName("row")[1].insertBefore(document.getElementsByClassName("col-md-4")[0], document.getElementsByClassName("col-md-4")[5])
})

let logo = document.getElementsByTagName("a")[3]
let body = document.getElementsByTagName("body")[0]
logo.addEventListener("keypress", function(e){
    console.log(e)
    if (e.key === "a"){
        body.className = "col-4"
        body.style.marginLeft = ""
    } else if (e.key === "y") {
        body.className = "col-4"
        body.style.marginLeft = "35vw"
    } else if (e.key === "p") {
        body.className = "col-4"
        body.style.marginLeft = "65vw"
    } else if (e.key === "b") {
        body.className = ""
        body.style.marginLeft = ""
    }
})