let myH2Element = document.getElementById("result")
let plusButton = document.getElementById("plus_button")
let minusButton = document.getElementById("minus_button")
let resetButton = document.getElementById("reset_button")
let hintElement = document.getElementById("hint")

//plus function
plusButton.addEventListener("click", function() {
   myH2Element.innerHTML = Number(myH2Element.innerHTML) + 1
   hintElement.textContent = ""
})

//minus function
minusButton.addEventListener("click", function() {
    if (Number(myH2Element.innerHTML) > 0) {
        myH2Element.innerHTML = Number(myH2Element.innerHTML) - 1
        hintElement.textContent = ""
    } else {
        hintElement.textContent = "Count cannot go below zero!"
    }
 })

 //reset function
 resetButton.addEventListener("click", function() {
    myH2Element.innerHTML = 0
    hintElement.textContent = ""
 })