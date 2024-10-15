class Actor {
    constructor() {
        this.name = "Omar";
        this.age = 27;
        this.movies = ["The Wire", "The Night Of", "Sound of Metal"];
        this.elementCheck = document.querySelector("#check");
        this.elementResult = document.querySelector("#result");
        this.elementCheck.addEventListener("click", this.render.bind(this));
    }

    tookPartInMovies() {
        if (this.movies && this.movies.length > 0) {
            return true;
        }

        return false;
    }

    render() {
        if (this.tookPartInMovies() === true) {
            this.elementResult.textContent = `Yes! ${this.name} is a movie star and ${this.age} years young!
                ${this.name} took part in the following movies: ${this.movies.join(", ")}`;
            this.elementResult.style.display = 'block';
        }
    }
}

new Actor();