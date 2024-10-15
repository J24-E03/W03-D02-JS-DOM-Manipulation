class ShoppingCart {
    constructor() {
        this.items = [];
        this.products = document.querySelectorAll("#products-container button.btn");
        this.shoppingCart = document.querySelector("#cart-items");
        console.log(this.shoppingCart);
        this.products.forEach(product => {
            console.log(product);
            product.addEventListener("click", this.addItem.bind(this, product));
        });
    }

    addItem(item) {
        this.items.push(item);
        this.render();
    }

    render() {
        this.shoppingCart.innerHTML = '';
        const ul = document.createElement('ul');
        this.items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.parentElement.querySelector('h3').textContent;
            ul.appendChild(li);
        });
        this.shoppingCart.appendChild(ul);
    }
}

new ShoppingCart();