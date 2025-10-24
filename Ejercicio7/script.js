let retiro=parseInt(prompt('Ingrese el monto de retiro'));

let billetes100=Math.floor(retiro/100);
let billetes50=Math.floor((retiro%100)/50);
let billetes20=Math.floor(((retiro%100)%50)/20);
let billetes10=Math.floor((((retiro%100)%50)%20)/10);

alert('Billetes de 100: '+billetes100+
    '\nBilletes de 50: '+billetes50+
    '\nBilletes de 20: '+billetes20+
    '\nBilletes de 10: '+billetes10);
