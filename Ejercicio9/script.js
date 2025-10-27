let numero=parseInt(prompt('Ingrese el numero'));
let suma=0;

for(let i=1;i<=numero;i++){
    if(i%5!=0){
        suma+=i;
    }
}
alert('La suma total es '+suma);
