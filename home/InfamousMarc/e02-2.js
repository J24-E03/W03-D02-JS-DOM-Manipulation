class Array {
    constructor() {
        this.array = [];
        this.addRange(
            ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul"]
        );
        this.replace("Kathrin", "Kathrin Zirbes");
        this.buttonTransform = document.querySelector("#transform");
        this.elementResult = document.querySelector("#result");
        this.buttonTransform.addEventListener("click", this.render.bind(this));
    }

    addRange(items) {
        this.array.push(...items);
    }

    replace(value, newValue) {
        const index = this.array.indexOf(value);
        if (index === -1) {
            throw new Error('Value not found');
        }

        this.array[index] = newValue;
    }

    toString() {
        return this.array.join(' ');
    }

    render() {
        this.elementResult.textContent = this.toString();
        this.elementResult.style.display = 'block';
    }
}

new Array();