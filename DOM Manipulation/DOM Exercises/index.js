/*Exercise 1*/


let password = "mypassword";


if (password.length >= 8) {
    console.log("Your account has been made");
} else {
    console.log("Password must be 8 characters or more");
}


if (password.length > 8 && !password.endsWith('e')) {
    console.log("Your account has been made (Bonus check)");
} else {
    console.log("Password must be more than 8 characters and should not end with 'e'");
}


if (password.length > 8 && !password.toLowerCase().endsWith('e')) {
    console.log("Your account has been made (Bonus 2 check)");
} else {
    console.log("Password must be more than 8 characters and should not end with 'e' or 'E'");
}


/*Exercise 2*/

let studentNames = ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul"];

function joinNames(names) {
    let result = "";

    for (let i = 0; i < names.length; i++) {
        if (names[i] === "Kathrin") {
            result += "Kathrin Zirbes";
        } else {
            result += names[i];
        }

        if (i < names.length - 1) {
            result += " ";
        }
    }
    return result;
}

console.log(joinNames(studentNames)); 



/*Exercise 3 */

let numbersArr = [700, 17, 85, 78, 15, 37, 37, 14, 83, 34];

function indexOfBiggestNumber(arr) {
    let maxIndex = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i; 
        }
    }
    return maxIndex;
}

console.log(indexOfBiggestNumber(numbersArr)); 


/*Exercise 4 */

let actor2 = {
    name: "Brad Pitt",
    age: 58,
    movies: ["Fight Club", "Troy", "Inglourious Basterds"]
};


if (actor2.hasOwnProperty('movies')) {
    console.log("Actor has been in some movies");
} else {
    console.log("No movies found for this actor");
}


/*Exercise 5*/



let studentsList = document.querySelectorAll('.students');


studentsList.forEach(function (student) {
    student.innerHTML += " is in Java course";
});



