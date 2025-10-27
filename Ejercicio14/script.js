let totalParcial = 0;
let continuar = true;
let presupuesto = parseFloat(prompt('Ingrese su presupuesto'));

do{
    let entrada = prompt('Ingrese el precio del producto (o deje vacio para terminar):');
    
    if(entrada==null || entrada.trim()==''){
        continuar=false;
    }else{
        let precio=parseFloat(entrada.trim());

        if (!isNaN(precio) && precio >= 0){
            let nuevoTotal = totalParcial + precio;

            if(nuevoTotal<=presupuesto){
                totalParcial += nuevoTotal;
                alert(`Producto agregado. Total parcial actual: ${totalParcial.toFixed(2)}`);
            }else{
                alert(`Se paso del presupuesto (${presupuesto.toFixed(2)}). Producto no agregado`);
            }
        }else{
            alert('Precio inválido');
        }
    }

}while(continuar);

if (totalParcial>0){
    let mensajeDescuento='';
    let totalFinal=totalParcial;
    let porcentajeDescuento=0;

    if(totalParcial>100){
        mensajeDescuento = 'Tiene un descuento del 10%';
        porcentajeDescuento = 0.10;
    }else if(totalParcial>=50 && totalParcial<=100){
        mensajeDescuento = 'Gana un cupón de 5%';
        porcentajeDescuento = 0.05;
    }else{
        mensajeDescuento = 'No aplica descuento';
        porcentajeDescuento = 0;
    }

    totalFinal = totalParcial*(1-porcentajeDescuento);

    alert(`Total parcial a pagar: ${totalParcial.toFixed(2)}\n` +
          `${mensajeDescuento}\nTotal final a pagar: ${totalFinal.toFixed(2)}`);
}else{
    alert('No se agregaron productos al carrito');
}