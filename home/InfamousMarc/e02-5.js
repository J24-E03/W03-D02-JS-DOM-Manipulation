class Students {
    constructor() {
        this.students = document.querySelectorAll(".students");
        this.button = document.querySelector("#check");
        this.button.addEventListener("click", this.appendStudentsLine.bind(this), { once: true });
    }

    appendStudentsLine() {
        this.students.forEach((item) => {
            item.appendChild(document.createTextNode(" is in Java course."));
        });
    }
}

new Students();