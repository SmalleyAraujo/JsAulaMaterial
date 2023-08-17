//  var cliente1nome = "Robertinho";
//  var cliente1dataNascimento = "11/02/1998";
//  var cliente1cpf = 9999999;
//  var cliente1conta = 1;
//  var cliente1agencia = 101;

// console.log("cliente1nome+" , "cliente1dataNascimento +" , " , ");

// var cliente1 = [ "Nome = Robertinho", "Data de nascimento = 11/02/1998"];
// console.log(cliente1[1]);

// CRIANDO OBJETOS
//this  A palavra reservada this faz referência ao próprio objeto que está chamando o método. Essa palavra é muito usada dentro dos métodos definidos nas classes, pois cada instância de objeto é independente, e portanto, o this nos permite fazer essa referência individual, a cada chamada do método. Vou te dar um exemplo.



class Cliente {
    nome;
    dataNascimento;
    cpf;
    conta;
    agencia;  
    saldo;  
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo = this.saldo - valor;
            // this.saldo -= valor;  Exemplo de otimização de código.
            return valor;
        }else{
            return;
        }
    }
    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
            return "Valor depositado!";
        }else{
            return "Depósito não autorizado! Mais uma tentativa você será taxado :( ) ";
        }
    }
}

var cliente1 = new Cliente();
cliente1.nome = "Robertinho";
cliente1.dataNascimento = "11/02/1998";
cliente1.cpf = "99999999999";
cliente1.conta = "1";
cliente1.agencia = "101";
cliente1.saldo = "0";

console.log(cliente1);

var cliente2 = new Cliente();
cliente2.nome = "Marcos";
cliente2.dataNascimento = "14/08/2001";
cliente2.cpf = "8888888888";
cliente2.conta = "2";
cliente2.agencia = "103";
cliente2.saldo = "0";

console.log(cliente2);

// CONTROLANDO OBJETO
cliente1.saldo = 3000;
// saque efetuado
cliente1.sacar(20);
console.log(cliente1.saldo);
// saque não efetuado
cliente1.sacar(1000000);
console.log(cliente1.saldo);
// deposito efetuado
cliente1.depositar(2000);
console.log(cliente1.saldo);
// deposito não efetuado
cliente1.depositar(-1000);
console.log(cliente1.saldo);
