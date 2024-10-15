class SavePassword {
    constructor() {
        this.buttonSend = document.querySelector('#password-send');
        this.errorsElement = document.querySelector('#errors');
        this.buttonSend.addEventListener('click', this.sendPassword.bind(this));
    }

    sendPassword() {
        this.password = document.querySelector('#password').value;
        this.errorsElement.textContent = '';
        this.errorsElement.style.display = 'none';
        this.checkLength();
        this.checkLastLetter();
    }

    checkLength() {
        if (this.password.length < 8) {
            this.errorsElement.textContent = 'Password must have at least 8 characters';
            this.errorsElement.style.display = 'block';
        }
    }

    checkLastLetter() {
        if (this.password[this.password.length - 1].toLowerCase() === 'e') {
            this.errorsElement.textContent = 'Password cannot end with the letter "e" or "E"';
            this.errorsElement.style.display = 'block';

            return false;
        }

        return true;
    }
}

new SavePassword();