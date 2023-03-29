/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convBtn = document.getElementById("convert")
const meters = document.getElementById("mts")
const litres = document.getElementById("lts")
const kilos = document.getElementById("kgs")

convBtn.addEventListener("click", function() {
   converta()
   convertb()
   convertc()
    
})

function converta(){
     let userInput = (document.getElementById("inputv")).value
    let metersc = (userInput * 3.281).toFixed(3)
    meters.innerHTML = `${userInput} meters = ${metersc} feet | ${metersc} feet = ${userInput} meters`
}
function convertb(){
     let userInput = (document.getElementById("inputv")).value
    let litresc = (userInput * 0.264).toFixed(3)
    litres.innerHTML = `${userInput} litres = ${litresc} gallons | ${litresc} gallons = ${userInput} litres`
}
function convertc(){
     let userInput = (document.getElementById("inputv")).value
    let litresc = (userInput * 2.204).toFixed(3)
    kilos.innerHTML = `${userInput} kilos = ${litresc} pounds | ${litresc} pounds = ${userInput} kilos`
}












