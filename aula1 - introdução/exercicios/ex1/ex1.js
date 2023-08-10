window.alert(" Bem vindo(a) calcula conta");
const valCont = Number(window.prompt("informe o valor da conta:"));
const quantP = Number(window.prompt("Informe a quantidade de pessoas:"));
const adicionais = Number (window.prompt("Quanto de adicional:"));


const totUnit = (valCont + adicionais)/quantP.toFixed(2);

window.alert(`O valor da conta por cliente é: ${totUnit}`);