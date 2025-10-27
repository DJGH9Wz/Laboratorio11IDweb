let opcion=parseInt(prompt('Ingrese un numero '+
    '\n1: Calcular area del circulo'+
    '\n2: Calcular area del rectangulo'+
    '\n3: Salir'));
const PI=3.1416;
while(opcion!=3){
    switch(opcion){
        case 1:
            let radio=parseFloat(prompt('Ingrese el radio'));
            alert('El area del circulo es '+(radio**2*PI));
            break;
        case 2:
            let altura=parseFloat(prompt('Ingrese la altura'));
            let base=parseFloat(prompt('Ingrese la base'));
            alert('El area del rectangulo es '+(base*altura));
            break;
        case 3:
            break;
        default:
            alert('Opcion no valida');
            break;  
    }
    if(opcion==3){
        break;
    }
    opcion=parseInt(prompt('Ingrese un numero '+
                    '\n1: Calcular area del circulo'+
                    '\n2: Calcular area del rectangulo'+
                    '\n3: Salir'));
}

