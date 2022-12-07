'use strict'
var operacion = "";

// reiniciar 
var btn_reiniciar = document.getElementById('btn_reiniciar');
btn_reiniciar.addEventListener('click', reiniciar, false);

function reiniciar() {
    document.getElementById('val_1').value = "";
    document.getElementById('val_2').value = "";
    document.getElementById('res').value = "";
}

// suma 
var btn_suma = document.getElementById('btn_suma');
btn_suma.addEventListener("click", ()=>{
    operacion = "+";
    console.log(operacion);
});

// resta 
var btn_resta = document.getElementById('btn_resta');
btn_resta.addEventListener("click", ()=>{
    operacion = "-";
    console.log(operacion);
});

// Multiplicacion 
var btn_multiplicaicon = document.getElementById('btn_multiplicacion');
btn_multiplicaicon.addEventListener("click", ()=>{
    operacion = "*";
    console.log(operacion);
});

// division
var btn_division = document.getElementById('btn_division');
btn_division.addEventListener("click", ()=>{
    operacion = "/";
    console.log(operacion);
});

// operacion 
const ejecucion = (a,b)=>{
    console.log(a, b);
    if( operacion == "+"){
        let res = parseInt(a) + parseInt(b); 
        return res ;
    }

    if( operacion == "-"){
        let res = parseInt(a) - parseInt(b); 
        return res ;
    }

    if( operacion == "*"){
        let res = a * b; 
        return res ;
    }

    if( operacion == "/"){
        let res = a / b; 
        return res ;
    }

}


// igual
var btn_igual = document.getElementById('btn_igual');
btn_igual.addEventListener("click", ()=>{
    
    let val_1 = document.getElementById('val_1');
    let val_2 = document.getElementById('val_2');

    if(!val_1.value){
        val_1.value = 0;
    }

    if(!val_2.value){
        val_2.value = 0;
    }

    console.log(ejecucion(val_1.value,val_2.value));
    document.getElementById("res").value = ejecucion(val_1.value,val_2.value);
});