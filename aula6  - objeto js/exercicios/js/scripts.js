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
    constructor(marca,modelo,ano,cor,velocidadeMaxima,velocidadeAtual){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = velocidadeAtual;
        this.acelerar = function(velocidade){
            if(this.velocidadeMaxima >= velocidade){
                this.velocidadeMaxima -= velocidade;
                return  ` velocidade igual há ${velocidade} velocidade máxima ${this.velocidadeMaxima}`;
            }
            else{
                return "Velocidade acima da velocidade máxima!"
            }
            

        }


    }
        

}

var carro1 = new Carro("VW","GOL", "1990", "Branco", 160, 100);


