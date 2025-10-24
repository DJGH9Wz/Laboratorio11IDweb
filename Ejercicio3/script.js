let nota,notas=0,promedio;

for(let i=1;i<=5;i++){
    nota=parseFloat(prompt('Ingresa la nota '+i+' (1-20)'));
    if(nota<=20&&nota>=0){
        notas+=nota;
    }else{
        alert('Nota no valida, ingresela de nuevo');
        i--;
    }
}

promedio=notas/5;
console.log('El promedio es '+promedio);
