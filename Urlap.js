/*Adatok elmentése*/




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