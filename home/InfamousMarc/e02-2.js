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

    addRange(names) {
        this.array.push(...names);
    }

    replace(name, newName) {
        const index = this.array.indexOf(name);
        if (index === -1) {
            throw new Error('Name not found');
        }

        this.array[index] = newName;
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