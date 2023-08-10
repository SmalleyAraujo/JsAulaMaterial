window.alert(" Bem vindo(a) calcula conta");
let valCont = parseFloat(window.prompt("informe o valor da conta:"));
let quantP = parseInt(window.prompt("Informe a quantidade de pessoas:"));


const totUnit = valCont / quantP;

window.alert(`O valor da conta por cliente é: ${totUnit}`);