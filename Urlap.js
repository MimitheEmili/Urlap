/*Adatok elmentése*/

function Regisztracioonclick() {
    // Adatok begyűjtése
    const name = document.querySelector('input[name="Nev"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const password = document.getElementById('jelszo').value;
    const profession = document.querySelector('input[name="foglalkozas"]').value;
    const agazat = document.querySelector('select[name="agazat"]').value;
    const age = document.querySelector('select[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? 
                   document.querySelector('input[name="gender"]:checked').value : '';

    // Ellenőrzés, hogy minden mező ki van-e töltve
    if (!name || !email || !password || !profession || !agazat || !age || !gender) {
        alert('Kérem töltse ki az összes mezőt!');
        return;
    }

    // Adatok objektumba eltárolás
    const userData = {
        name: name,
        email: email,
        password: password,
        profession: profession,
        agazat: agazat,
        age: age,
        gender: gender
    };

    // JSON formátumban elmentve, alert: sikeres
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('A regisztrációs adatok sikeresen elmentve!');
}

/*Jelszó generálás*/ 

function Passwordonclick() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'; // A karakter lista
    let password = '';
    const passwordLength = 12; // Hosszúság

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex); // Itt generálja le
    }

    document.getElementById('jelszo').value = password; // Elmenti a jelszót
}

// Korábban elmentett adatok betöltése és ellenőrzés
const storedData = localStorage.getItem('userData');
if (storedData) {
    const userData = JSON.parse(storedData);
    console.log(userData); // console.logozza
}
