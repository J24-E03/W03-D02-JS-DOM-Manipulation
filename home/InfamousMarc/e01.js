class Counter {
    constructor() {
        this.count = 0;
        this.counter = document.querySelector("#counter");
        this.buttonIncrement = document.querySelector("#increment");
        this.buttonDecrement = document.querySelector("#decrement");
        this.buttonReset = document.querySelector("#reset");
        this.buttonIncrement.addEventListener("click", this.increment.bind(this));
        this.buttonDecrement.addEventListener("click", this.decrement.bind(this));
        this.buttonReset.addEventListener("click", this.reset.bind(this));
    }

    increment() {
        this.count++;
        this.counter.textContent = this.count;
    }

    decrement() {
        if (this.count === 0) {
            return;
        }

        this.count--;
        this.counter.textContent = this.count;
    }

    reset() {
        this.count = 0;
        this.counter.textContent = this.count;
    }
}

const counter = new Counter();