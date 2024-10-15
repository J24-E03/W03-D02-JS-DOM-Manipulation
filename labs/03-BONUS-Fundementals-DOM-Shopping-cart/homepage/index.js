/* 
TITLE: Shopping cart Lab

1. Add an onclick event to each item in the store that will add the item to the shopping cart

2. When the button is pressed the shopping cart should show the item that was clicked

3. BONUS: Show the total cost in the shopping cart

*/
let shoppingCart = document.getElementById("shopping-cart")
let totalCost = 0
function seeListing (productName, productPrice, productImageSource)
{
    console.log("I'm here")
    let newDiv = document.createElement("div")
    newDiv.style.display = "flex"
    newDiv.style.justifyContent = "center"
    shoppingCart.appendChild(newDiv)
    let proImage = document.createElement("img")
    proImage.src = productImageSource
    proImage.style.width = "50px"
    proImage.style.height = "50px"
    newDiv.appendChild(proImage)
    let proName = document.createElement("h3")
    proName.textContent = productName
    newDiv.appendChild(proName)
    let proPrice = document.createElement("p")
    proPrice.innerHTML = `$${productPrice}`
    newDiv.appendChild(proPrice)

    totalCost += parseFloat(productPrice)
    updateTotalCost()
}

function updateTotalCost() {
    let totalCostElement = document.getElementById("total-cost")
    if (!totalCostElement) {
        totalCostElement = document.createElement("div")
        totalCostElement.id = "total-cost"
        shoppingCart.appendChild(totalCostElement)
    }
    totalCostElement.textContent = `Total Cost: $${totalCost.toFixed(2)}`
}