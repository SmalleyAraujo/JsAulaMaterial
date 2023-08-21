// 1) crie um sistema loja onde tem como atributos:
// nome;
// localidade;
// marca;
// dono;
// produtos;
// cadastrarProdutos();
// removerProdutos();

// *sendo que a função possa manipular a lista de produtos



class Loja{
  constructor(nome,localidade,marca,dono){
    this.nome = nome;
    this.localidade = localidade;
    this.marca = marca;
    this.dono - dono;
    this.produtos = [];
    this.cadastrarProdutos = function(nome,valor,tamanho,marca){
      this.produtos.push(new Produto(nome,valor,tamanho,marca));
      return `O produto ${nome} foi adicionado com sucesso!`;   

    }
    this.listarProdutos = function(){
      console.log(this.produtos);
      return `Aqui está uma lista de produtos`;
    }
    this.removerProdutos = function(indice){
      this.produtos.splice(indice, 1);
      return `O produto de indice ${indice} foi removido com sucesso!`;
    } 

  }
}
  //  push é para empurrar
  //splice ( indice, quantos indices ele vai sobrescrever o dados posteriores )
  // Exemplo acima  this.produtos.push(new Produto(nome,valor,tamanho,marca)); está cadastrando o objeto dentro da loja
class Produto{
  constructor(nome,valor,tamanho,marca){
    this.nome = nome;
    this.valor = valor;
    this.tamanho = tamanho;
    this.marca = marca;
  }
}

// comandos
const americanas = new Loja("Lojas Americanas", "W3SUL", "Americas Express");
var KitKat = new Produto("Chocolate", 1, "Grande","KitKat");   
// var KitKat = new Produto("Chocolate", 1, "Grande","KitKat"); exemplo  cadastrando o produto sem vinculo com nenhuma loja






