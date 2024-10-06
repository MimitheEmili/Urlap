/*Adatok elmentése*/

function Regisztracioonclick() {
    //adatok begyűjtése
    const name = document.querySelector('input[name="Nev"]').value;
    const email = document.querySelector('input[name="Email"]').value;
    const password = document.getElementById('jelszo').value;
    const profession = document.querySelector('input[name="foglalkozas"]').value;
    const agazat = document.querySelector('select[name="agazat"]').value;
    const age = document.querySelector('select[name="age"]').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? 
                   document.querySelector('input[name="gender"]:checked').value : '';

                   //adatok objektumba eltárolás
    const userData = {
        name: name,
        email: email,
        password: password,
        profession: profession,
        agazat: agazat,
        age: age,
        gender: gender
    };
    //json formátumban elmentve, alert: sikeres
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('A regisztrációs adatok sikeresen elmentve!');
}



function Passwordonclick() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+'; //a karakter lista
    let password = '';
    const passwordLength = 12; // hosszúság

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.charAt(randomIndex); //itt generálja le
    }

    document.getElementById('jelszo').value = password; //elmenti
}

const storedData = localStorage.getItem('userData');
if (storedData) {
    const userData = JSON.parse(storedData);
    console.log(userData); // console.logozza
}
