//Exercise 1
let passwordInput = document.getElementById("user_password")
let submitButton = document.getElementById("submit_button")
let hintMessage = document.getElementById("hint")

submitButton.addEventListener("click", function(){
    let password = passwordInput.value

    if (password.length < 8) {
        console.log("Password must be 8 characters or more");
        hintMessage.innerHTML = "Password must be 8 characters or more";
        submitButton.style.color = "red"
        submitButton.innerHTML = "Try Another Password"
        passwordInput.value = ""
    } 
    else if (password.length > 8 && (password.endsWith("e") || password.endsWith("E"))) {
        console.log("When your password has more than 8 characters, it cannot end with the letter e/E");
        hintMessage.innerHTML = "When your password has more than 8 characters, it cannot end with the letter e/E";
        submitButton.style.color = "red"
        submitButton.innerHTML = "Try Another Password"
        passwordInput.value = ""
    } 
    else {
        console.log("Your sign up is completed.");
        hintMessage.innerHTML = "Your sign up is completed.";
        submitButton.style.color = "#19733f"
         submitButton.innerHTML = "Done!"
    }
})

    //Exercise 2
    let arrayStudenNames = ["Aron", "Martine", "Kathrin", "Kai", "Maryam", "Sumayya", "Marcel", "Paul"]
    function convertArrayToString(arrayName)
    {
        let studenNamesString = ""
        for (let i = 0; i < arrayName.length; i++) {
            if (arrayName[i] === "Kathrin")
            {
                studenNamesString += "Kathrin Zirbes";
            }
            else {
                studenNamesString += arrayName[i]
            }
            if (i != arrayName.length -1) {
                studenNamesString += " "
            }
        }

        return studenNamesString
    }
    console.log(convertArrayToString(arrayStudenNames))

    let stuNames = document.getElementById("student_names")
    stuNames.innerHTML = convertArrayToString(arrayStudenNames)


    //Exercise 3
    let numbersArr = [700, 17, 85, 78, 15, 37, 37, 14, 83, 34]

    function returnBiggestNumIndex (arrayOfNumbers)
    {
        if (arrayOfNumbers.length === 0) {
            return -1
        }
        let biggestNumIndex = 0
        for (let i = 1; i < arrayOfNumbers.length; i++) {
            if (arrayOfNumbers[i] > arrayOfNumbers[biggestNumIndex]) {
                biggestNumIndex = i; 
            }
        }
        return biggestNumIndex
    }

    let bigNumIndex = returnBiggestNumIndex(numbersArr)
    if (bigNumIndex != -1)
    {
        console.log(`The Index of the biggest number in this array is: ${bigNumIndex}`)
    }
    else {
        console.log("Empty array of numbers")
    }
