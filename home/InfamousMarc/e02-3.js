class Array {
    constructor() {
        this.array = [];
        this.addRange(
            [700, 17, 85, 78, 15, 37, 37, 14, 83, 34]
        );
        this.buttonCheck = document.querySelector("#check");
        this.elementResult = document.querySelector("#result");
        this.buttonCheck.addEventListener("click", this.render.bind(this));
    }

    addRange(items) {
        this.array.push(...items);
    }

    render() {
        this.elementResult.textContent = Math.max(...this.array);
        this.elementResult.style.display = 'block';
    }
}

new Array();