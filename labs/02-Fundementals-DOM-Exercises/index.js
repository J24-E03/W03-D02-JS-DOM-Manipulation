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