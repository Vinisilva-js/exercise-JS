let compra=100
console.log("Você comprou "+compra);
const d1=(compra*12)/100//compra maior do que 100
const d2=(compra*10)/100//compra maior do que 50
const d3=(compra*5)/100//compra maior do que 20

if(compra>=100){
    console.log("Seu desconto é de: "+d1);
    const valorPago1=compra-d1;
    console.log("valor a ser pago é de: "+valorPago1);
}
if(compra>=50 && compra<=99){
    console.log("Seu desconto é de: "+d2);
    const valorPago2=compra-d2;
    console.log("valor a ser pago é de: "+valorPago2);
}
if(compra>=20 && compra<=49){
    console.log("Seu desconto é de: "+d3);
    const valorPago3=compra-d3;
    console.log("valor a ser pago é de: "+valorPago3);
}
if(compra<20){
    console.log("Você não tem desconto");
}

