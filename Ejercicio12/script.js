let opcion;

do{
    opcion=prompt('1: Estadísticas \n'+
                    '2: Pares/Impares en Rango\n'+
                    '3: Tabla de Multiplicar\n'+
                    '4: Salir');

    switch(opcion){
        case '1':
            let notas = [];
            let entrada;

            while (true){
                entrada=prompt(`Nota ${notas.length + 1} ('-1' para calcular):`);
                if(entrada==null || entrada.toLowerCase()=='-1') break;

                let nota = parseFloat(entrada.trim());

                if(!isNaN(nota)){
                    notas.push(nota);
                }else{
                    alert("Inválida");
                }
            }

            let suma=0;
            let max=notas[0];
            let min=notas[0];
            let n=notas.length;

            for(let i=0;i<n;i++){
                let nota=notas[i];
                suma+=nota; 

                if (nota>max) max=nota;
                if (nota<min) min=nota;
            }

            let promedio=(suma/n).toFixed(2);
            
            alert(`Estadisticas:\nPromedio: ${promedio}\nMáximo: ${max}\nMínimo: ${min}`);
            break;

        case '2':
            
            let inicio = parseInt(prompt('Inicio del rango:'));
            let fin = parseInt(prompt('Fin del rango:'));
            
            let pares=0;
            for (let i=inicio;i<=fin;i++) {
                if (i%2==0) {
                    pares++;
                }
            }

            alert(`\nPares: ${pares}\nImpares: ${fin-inicio+1-pares}`);
            break;

        case '3':
            let numTabla=parseInt(prompt('Número para la tabla'));
            let tabla ='';

            for (let i=1;i<=10;i++){ 
                tabla+=`${numTabla} x ${i} = ${numTabla * i}\n`;
            }
            alert(tabla);
            break;

        case '4':
            alert('Saliendo del sistema');
            break;
        default:
            if (opcion!=null) {
                alert('Opcion no válida');
            }
            break;
    }
}while(opcion!=='4' && opcion!==null);

