// Atividade 6 - Objeto Js
// Victor Santos Rohod
// •
// 16:58
// Agora que entendemos como criar e acessar objetos em Javascript, vamos fazer um exercício para testar nossas habilidades.

// Crie um objeto chamado "carro" que tenha as seguintes propriedades:

// marca: string
// modelo: string
// ano: número
// cor: string
// velocidadeMaxima: número
// velocidadeAtual: número (inicialmente 0)
// Em
// seguida, crie um método chamado "acelerar" que receba um número como
// argumento e aumente a velocidade atual do carro por esse número.
// Certifique-se de que a velocidade atual não ultrapasse a velocidade
// máxima do carro.


class Carro{
    constructor(marca,modelo,ano,cor,velocidadeMaxima){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
        // Acelerar
        this.acelerar = function(km){
            if(km + this.velocidadeAtual <= this.velocidadeMaxima){
                this.velocidadeAtual += km;
                return `Você acelerou ${km} Km/h!`;

            } else{
                return `Velocidade não permitida! a velocidade máxima é de ${this.velocidadeMaxima}Km/h`;
            } 
                
               
        }
        // desacelerar
        this.desacelerar = function(km){
            if(km <= this.velocidadeAtual){
                this.velocidadeAtual -= km;
                return `Você desacelerou ${km} Km/h!`;

            } else{
                return `Velocidade não permitida! a velocidade atual é de ${this.velocidadeAtual}Km/h`;
            } 
                
               
        }
        //parar
        this.parar = function(){
            this.velocidadeAtual = 0;
            return "Você parou!";
        }


           
    }
}

var fusca = new Carro("porshe","p11k",2023, "Amarelo",380);
var brasilia = new Carro("ferrari","ULTRA",2020,"Vermelho",250);