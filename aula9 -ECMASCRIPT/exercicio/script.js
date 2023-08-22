// 1) Fazer um array de filmes e listar cada elemento com a formatação = "Filme 1 : {elemento}"
// 2) Fazer um site de escrever textos onde possa implementar as funções de replace e replace all
// 3) Fazer um Promise verificando se o usuário é o ADM utilizando: Nome = ADM e Senha = ADM

const filmes = {
    vingadores : 25,
    Avatar : 50,
    Gladiador : 60,
    Contatos3º : 90,
}

const filmesEntries = Object.entries(filmes);
document.querySelector("#objectEntries").innerHTML = filmesEntries;