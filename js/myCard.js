let back = document.getElementById("return");
let cvv = document.getElementById("block_cvv");
let numberCvv = document.getElementById("number_cvv")
let owner = document.getElementById("ownerCard")

back.onclick = function(){

    window.location.href = './myBank.html';

}

cvv.onclick = function(){

    numberCvv.style.display = "block";
    cvv.style.display = "none";

}
numberCvv.onclick = function(){

    cvv.style.display = "block";
    numberCvv.style.display = "none";

}
owner.innerHTML = localStorage.getItem("userid")