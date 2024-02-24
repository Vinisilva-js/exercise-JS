let nome="Marcos Vinicius";
let idade=20;
let peso=85;
let altura=1.83;
const imc=peso/altura**2;

console.log("Nome do usuário é:"+nome);
console.log("Sua idade:"+idade+" anos");
console.log("Seu peso:"+peso+" kg");
console.log("seu imc é:" +imc);

if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
}
else if (imc >= 18.5) { // Mudei o if para um else if para evitar redundância
    console.log("Você tem o peso normal.");
} 
else if (imc >= 25 ) {
    console.log("Você tem sobrepeso.");
} 
else if (imc >=30 ){
    console.log("Você está obeso.");
}

