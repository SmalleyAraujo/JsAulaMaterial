// 3) Fazer um Promise verificando se o usuário é o ADM utilizando: Nome = ADM e Senha = ADM
// window.alert("oi");

const primeiraPromise = new Promise((resolve,reject) =>{
    const nome = "ADM";    
    if(nome === "ADM"){
        resolve("User correto");
    }else{
        reject("User incorreto! tente novamente!");
    }
})

primeiraPromise.then((p) =>{
    console.log(p);
});

primeiraPromise.catch((p) =>{
    console.log(p);
});

// the é para dar um alert quando da certo
// catch é para dar um alerta quando da errado


const segundaPromise = new Promise((resolve,reject) =>{   
    const senha = "ADM";
    if(senha === "ADM"){
        resolve("Sejam benvidos ao futuro!");
    }else{
        reject("Senha incorreta! tente novamente!");
    }
})

segundaPromise.then((p) =>{
    console.log(p);
});

