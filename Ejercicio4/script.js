let edad=parseInt(prompt('Ingrese su edad'));

if(edad<0){
    alert('Edad no valida');
}else{
    if(edad<12)
        alert('Niño');
    if(edad>=12&&edad<17)
        alert('Adolescente');
    if(edad>=18&&edad<59)
        alert('Adulto');
    if(edad>=60)
        alert('Adulto mayor'); 
}
