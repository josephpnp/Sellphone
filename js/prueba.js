let btn = document.getElementById("btn")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")

let div = document.getElementById("contenedor")

btn.addEventListener("click",() =>{
    div.style.transition= "1s"
    div.style.left = "300px"
    div.style.left = "0px"

})

btn2.addEventListener("click",() =>{
    div.style.transition= "1s"
    div.style.left = "0px"
    div.style.right = "300px"

})

btn3.addEventListener("click",() =>{
    div.style.transition= "1s"
    div.style.buttom = "0px"
    div.style.top = "300px"

})

btn4.addEventListener("click",() =>{
    div.style.transition= "1s"
    div.style.top = "0px"
    div.style.buttom = "300px"

})

btn5.addEventListener("click",() =>{
    div.style.transition= "1s"
    div.style.left = "0px"
    div.style.right = "0px"
    div.style.top = "0px"
    div.style.buttom = "0px"
})
