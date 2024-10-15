
const counterElement = document.getElementById('counter');


function increaseCount() {
    
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
}


function decreaseCount() {
  
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount - 1;
}


function resetCount() {
    counterElement.textContent = 0;
}
