
let resNumerador = "";
let resDenominador = "";

function Fraccion(){

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let num3 = parseInt(document.getElementById("num3").value);
    let num4 = parseInt(document.getElementById("num4").value);

    let operador = document.getElementById("operadores"). value;

switch (operador) {

    case "+":
        if(num2 === num4){
            resNumerador = num1 + num3;
            resDenominador = num4;
        }
        else{
            resNumerador = (num1 * num4) + (num2 * num3);
            resDenominador = num2 * num4;
        }

    break;
        
    case "-":
        if(num2 === num4){
            resNumerador = num1 - num3;
            resDenominador = num4;
        }
        else{
            resNumerador = (num1 * num4) - (num2 * num3);
            resDenominador = num2 * num4;
        }

    break;

    case "*":
        resNumerador = num1 * num3;
        resDenominador = num2 * num4;

    break;

    case "/":
        resNumerador = num1 * num4;
        resDenominador = num2 * num3;

    break;
            
    }
    
    document.getElementById("res-Num").innerHTML = resNumerador;
    document.getElementById("res-Deno").innerHTML = resDenominador;
}



