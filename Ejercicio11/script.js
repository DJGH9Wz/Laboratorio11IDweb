let numero=parseInt(prompt('Ingrese el numero'));
const numeroString=numero.toString();
let suma=0;

let potencia=numeroString.length;
for(let i=0;i<potencia;i++){
    let digito=Number(numeroString[i]);
    suma+=digito**potencia;
}

if(suma==numero){
    alert('Es un numero Armstrong');
}else{
    alert('No es un numero Armstrong');
}
