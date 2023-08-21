// Atividade 7 - Atividades de Objetos
// Victor Santos Rohod
// •

// 2)
// faça uma página de cadastramento de filmes onde o usuario possa salvar
// um filme e suas informações como nome, descrição,data, diretor e
// categoria e liste ela de alguma forma em algum elemento HTML!


// entrada de dados
const nome = document.querySelector("#nome");
const descricao = document.querySelector("#descricao");
const dataDeLancamento = document.querySelector("#data");
const diretor = document.querySelector("#diretor");
const categoria = document.querySelector("#categoria");
const cadastrarBtn = document.querySelector("#cadastrar");
const resultado = document.querySelector("#resultado");

cadastrarBtn.addEventListener("click", cadastrar);

function cadastrar(){
  // prototipo
  class Filme{
    constructor(nome,descricao,dataDeLancamento,diretor,categoria){
      this.nome = nome;
      this.descricao = descricao;
      this.dataDeLancamento = dataDeLancamento;
      this.diretor = diretor;
      this.categoria = categoria;
    }
  } 
  // pega os valores
  let nomeInput = nome.value; 
  let descricaoInput = descricao.value; 
  let dataDeLancamentoInput = dataDeLancamento.value; 
  let diretorInput = diretor.value; 
  let categoriaInput = categoria.value; 

  var filme = new Filme(nomeInput,descricaoInput,dataDeLancamentoInput,diretorInput,categoriaInput);
  resultado.style.display ="block";
  resultado.innerHTML = `Nome: ${filme.nome} <br> Descrição: ${filme.descricao} <br>Data: ${filme.dataDeLancamento} <br>Diretor: ${filme.diretor} <br>Categoria: ${filme.categoria}`;
  

}








