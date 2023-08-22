// CRIANDO UMA PROMISE 
const primeiraPromise = new Promise((resolve, reject) => {
    const nomeP = "Victor";
    if(nomeP === "Victor"){
        resolve("O usuário é victor");
    }else{
        reject("O usuário não é permitido");
    } 
});

// Obs.: resolve, reject são propriedades do JavaScript

primeiraPromise.then((p) =>{
    console.log(p);
});

//await é usado dentro de uma async function para dar prioridade
function sujeitoDemorado(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Carregou o sujeito")
            resolve()
        },2000)
    });
}

async function carregando(){
    console.log("Iniciei")
    await sujeitoDemorado()
    console.log("Fechei")
}

carregando()