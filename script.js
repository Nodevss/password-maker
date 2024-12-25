    document.getElementById('generateBtn').addEventListener('click', generatePassword);

    function generatePassword() {
        const length = document.getElementById('length').value;
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;

        const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const numberChars = '0123456789';
        const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

        let characterSet = lowercaseChars;
        if (includeUppercase) characterSet += uppercaseChars;
        if (includeNumbers) characterSet += numberChars;
        if (includeSymbols) characterSet += symbolChars;

        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characterSet.length);
            password += characterSet[randomIndex];
        }

        typePassword(password);
    }

    function typePassword(password) {
        const passwordDisplay = document.getElementById('passwordDisplay');
        passwordDisplay.childNodes[0]. textContent = ''; 
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < password.length) {
                passwordDisplay.childNodes[0].textContent += password.charAt(index);
                index++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here (in milliseconds)
    }

    document.getElementById('copyBtn').addEventListener('click', () => {
        const password = document.getElementById('passwordDisplay').childNodes[0].textContent;
        navigator.clipboard.writeText(password).then(() => {
            alert('password is in your clipboard now');
        }).catch(err => {
            console.error('something happened: ', err);
        });
    });
