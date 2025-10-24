let numPares=0,numImpares=0;
let numero;

for(let i=1;i<=10;i++){
    numero=parseInt(prompt('Ingresa el numero N° '+i));
    if(numero%2==0){
        numPares++;
    }else{
        numImpares++;
    }
}

alert('Numeros Pares: '+numPares+
    '\nNumeros Impares: '+numImpares);
