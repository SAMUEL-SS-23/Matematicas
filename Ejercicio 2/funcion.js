let resultadoEcuation = 0;

window.onload = () =>{
    StarTime();
}

const GenerarEcuation = () => {

    let numberEcuation = Math.floor(Math.random() * 3);
    let ecuation = "";

   
    switch(numberEcuation){

        case 0:{
            let a = nR(), b = nR(), c = nR();
            ecuation = `${a}X + ${b} = ${c}`;
            resultadoEcuation = (c - b) / a;
            document.getElementById("ecuacion").innerHTML = ecuation;
            break;
        }

        case 1: {
            let a = nR(), b = nR(), c = nR(), d = nR();
            if(b === d) b++;
            ecuation = `${a} + ${b}X = ${c} + ${d}X`;
            resultadoEcuation = (c - a) / (b - d);
            document.getElementById("ecuacion").innerHTML = ecuation;
            break;
        }

        case 2: {
        let a = nR(), b = nR(), c = nR(), d = nR();
        if(b === 1) b++;
        ecuation = `${a} - ${b}X + ${c} = ${d} - X`;
        resultadoEcuation = (a + c - d) / (b - 1);
        document.getElementById("ecuacion").innerHTML = ecuation;
        break;
        }
    }

    Posicion_Correcta();
     
}

let orden = 0;
function Posicion_Correcta(){
    let opctionCorrecta = Math.floor(Math.random() * 3);
    let opErronea = (Math.random() * 201) - 100;
    let opErronea2 = (Math.random() * 201) - 100;

    if(opctionCorrecta == 1){

        document.getElementById("option-1").innerHTML = resultadoEcuation.toFixed(2);
        document.getElementById("option-2").innerHTML = opErronea.toFixed(2);
        document.getElementById("option-3").innerHTML = opErronea2.toFixed(2);

         orden = 1;
    }
    else if(opctionCorrecta == 2){

        document.getElementById("option-1").innerHTML = opErronea.toFixed(2);
        document.getElementById("option-2").innerHTML = resultadoEcuation.toFixed(2);
        document.getElementById("option-3").innerHTML = opErronea2.toFixed(2);

         orden = 2;
    }
    else{

        document.getElementById("option-1").innerHTML = opErronea2.toFixed(2);
        document.getElementById("option-2").innerHTML = opErronea.toFixed(2);
        document.getElementById("option-3").innerHTML = resultadoEcuation.toFixed(2);

        orden = 3;
    }
}

  function Val_Respuesta(opcion){

    if(opcion == orden){

        alert("!CORRECTO¡");
        GenerarEcuation();
    }
    else{
        alert("INCORRETO")
    }

}

const nR = () => {

   let numR = Math.floor(Math.random() * 100);
   return numR; 
}

const StarTime =  () =>{

    let seg = 0;
    let min = 0;

    setInterval(() => {
        seg++;
        if(seg == 59){
            min++;
            seg = 0;
        }
        document.getElementById("timer").innerHTML = `Timer <br> ${min}:${seg}`;
    }, 1000);
}

