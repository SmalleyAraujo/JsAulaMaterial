window.alert("Bem vindo a calculadora!");
const numero1 = Number(window.prompt("Digite o seu prmeiro número:"));
const operador = window.prompt("Digite a operação desejada: (obs: Apenas +, -, /, *) ");
const numero2 = Number(window.prompt("Digite o seu segundo número:"));



var resultado = undefined;

// var resultado = undefined;  / resultado = valor não definido;

switch(operador){
    case "+":
        resultado = numero1 + numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    case "-":
        resultado = numero1 - numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break 
    
    case "*":
        resultado = numero1 * numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    
    case "/":
        resultado = numero1 / numero2;
        window.alert(`O resultado do calculo é de: ${resultado}`);
        location.reload();
        break
    default:
        window.alert("Operador inválido! Tente novamente!");
        location.reload();
        break   
}