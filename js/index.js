let come = document.getElementById("come");
let infoPass = document.getElementById("infoPass");
let infoUser = document.getElementById("infoUser");
let banNumber = /[0-9)]/g;
let banSymbol = /[\-\(\)\.\^\+\%\*\'\=\&\?\@\#\$\!]/g;



come.onclick = function() {


    let password = document.getElementById("pass").value;
    let userid = document.getElementById("userid").value;

    if(userid.length < 12){

        infoUser.innerHTML =  "Введіть Ім'я Прізвище та По-батькові"

    }

    else if(banNumber.test(userid) == true){

        infoUser.innerHTML =  "Ви ввели число! Введіть Ім'я Прізвище та По-батькові"

    }
    else if(banSymbol.test(userid) == true){

        infoUser.innerHTML =  "Ви ввели символ! Введіть Ім'я Прізвище та По-батькові"

    }

    
    else if(password.length < 4){

        infoPass.innerHTML = "Не вірний пароль! Пароль повинен бути не менше 4 символів."

    }
    else {

        window.location.href = './myBank.html';
        localStorage.setItem("userid", userid)

    }
    
    

}