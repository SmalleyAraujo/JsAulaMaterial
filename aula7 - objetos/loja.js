// Atividade 7 - Atividades de Objetos
// Victor Santos Rohod
// •
// 15:13
// 1) crie um sistema loja onde tem como atributos:
// nome;
// localidade;
// marca;
// dono;
// produtos;
// cadastrarProdutos();
// removerProdutos();

// *sendo que a função possa manipular a lista de produtos

// 2)
// faça uma página de cadastramento de filmes onde o usuario possa salvar
// um filme e suas informações como nome, descrição,data, diretor e
// categoria e liste ela de alguma forma em algum elemento HTML!



// Sistema de loja

class Loja{
    nome;
    localidade;
    marca;
    dono;
    produtos;
    cadastrarProdutos(altera){
        
        switch (altera) {
          case 'Oranges':
            console.log('Oranges are $0.59 a pound.');
            break;
          case 'Mangoes':
          case 'Papayas':
            console.log('Mangoes and papayas are $2.79 a pound.');
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
          default:
            console.log(`Sorry, we are out of ${expr}.`);
        }
        
    }
    removerProdutos(altera)
}






