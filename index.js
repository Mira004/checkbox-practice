const checkBox=document.getElementById('checkBox');
const paypall=document.getElementById('paypall');
const creditCard=document.getElementById('creditCard');
const fastPay =document.getElementById('fastPay');
const result=document.getElementById('result');
const button=document.getElementById('button');
const info=document.getElementById('info');
button.onclick=function(){
    if(checkBox.checked){
result.textContent='You are Subscribed!';
}
else{
    result.textContent='You are NOT Subscribed!';
}
if(paypall.checked){
    info.textContent='You\'re paying with paypall ';
}
else if(creditCard.checked){
    info.textContent='You\'re paying with credit Card ';
}
else if(fastPay.checked){
    info.textContent='You\'re paying with Fast Pay ';
}
else{
    info.textContent='please choose a way for paying  ';
}
}
