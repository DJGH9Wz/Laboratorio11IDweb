let num=parseInt(prompt('Ingrese el numero'));
let resultado='';

for (let i=2;i<=num;i++){
    let esPrimo=true;
    for (let l=2;l<=Math.sqrt(i);l++){
        if (i%l == 0){
            esPrimo=false;
            break;
        }
    }
    
    if (esPrimo){
        if(resultado == ''){
            resultado+=i; 
        }else{
            resultado+=', '+i;
        }
    }
}

alert(resultado);

