/*Adatok elmentése*/

function Regisztracioonclick() {
    const name = document.querySelector('input[name="Nev"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const password = document.getElementById('jelszo').value;
    const age = document.querySelector('select[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? 
                   document.querySelector('input[name="gender"]:checked').value : '';

    const userData = {
        name: name,
        email: email,
        password: password,
        age: age,
        gender: gender
    };

    localStorage.setItem('userData', JSON.stringify(userData));
    alert('A regisztrációs adatok sikeresen elmentve!');
}


function Passwordonclick() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    const passwordLength = 12; // Állítsd be a kívánt jelszó hosszát

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex);
    }

    document.getElementById('jelszo').value = password; // A generált jelszó beírása a mezőbe
}

const storedData = localStorage.getItem('userData');
if (storedData) {
    const userData = JSON.parse(storedData);
    console.log(userData); // Az eltárolt adatok kiírása a konzolra
}