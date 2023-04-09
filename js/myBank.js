let sum = document.getElementById("sum")
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let inp = document.getElementById("inp");
let transaction = document.getElementById("btn2");
let transfer_funds = document.getElementById("btn3");
let block_transaction = document.getElementById("block_card_transaction")
let cross = document.getElementById("transaction_cross");
let answer = document.getElementById("answer")
let transfer_answer = document.getElementById("answer_transfer");
let answer_card = document.getElementById("answer_card");
let card = document.getElementById("block_card");
let transfer_sum = document.getElementById("sum_card");
let banNumber = /[0-9)]/g;
let veriable = 500;
sum.innerHTML = veriable;

btn.onclick = function() {
      

    if(veriable == 0){

        answer.innerHTML = "Поповніть баланс картки"

    }

    else if(inp.value > veriable){

        answer.innerHTML = "На Вашій карці не достаньо коштів"



    }
    else if(inp.value <= veriable){
        
        veriable = veriable - inp.value;
        sum.innerHTML = Math.floor(veriable)
        

    }
    

}
btn1.onclick = function() {

    let tax = Number(inp.value) / 100 * 15;

    if(isNaN(inp.value)){

        answer.innerHTML = "Введіть суму на яку хочете поповнити Ваш рахунок";

    }
    else{
        
        veriable = (veriable + Number(inp.value)) - tax;
        sum.innerHTML =  Math.floor(veriable)
        
        answer.innerHTML = "Податок 15% із суми поповнення балансу";



    }

}

transaction.onclick = function(){

        block_transaction.style.display = "block"

}


card.onclick = function(){

window.location.href = './myCard.html';


    

}

cross.onclick = function(){

    block_transaction.style.display = "none"

}
transfer_funds.onclick = function(){

    let info_card = document.getElementById("info_card").value;

    
    if(info_card.length < 16 || info_card.length > 16 || banNumber.test(info_card) == false){

        answer_card.innerHTML = "Введіть номер картки. 16 цифр"

    }


    else if(transfer_sum.value == ""){

        transfer_answer.innerHTML = "Введіть суму поповнення"

    }
    else{

        let tax = Number(transfer_sum.value) / 100 * 20;
    veriable = (veriable + Number(transfer_sum.value)) - tax;
    sum.innerHTML =  Math.floor(veriable)
    transfer_answer.innerHTML = "Податок 20% із суми поповнення балансу"


    }

}