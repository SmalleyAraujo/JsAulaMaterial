class Celular{
    modelo;
    tela;
    camera;
    processador;
    memoria;
    software;
    dono;
    adicionais;
}

class Dono{
    constructor(nome,email,idade,backup,numero){
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.backup = backup;
        this.numero = numero;
    }
    
}

var dono1 = new Dono("Victor","victorsantos@gmail.com", "20", false, 99999999);
var dono2 = new Dono("Artur","artursantos@gmail.com", "16", true, 88888888);


var xiaomi = new Celular();
xiaomi.modelo = "Poco 5";
xiaomi.tela = "OLED";
xiaomi.camera = "112MP";
xiaomi.processador = "SnapDragon855";
xiaomi.memoria = "8G ram";
xiaomi.software = "Android";
xiaomi.dono = [dono1,dono2];
xiaomi.adicionais = ["Fone", "CartãoSD", "Capinha"];
xiaomi.valor = 50;



