//----------- CLASES -----------

class musica{
    constructor(generos, cantantes, albunes){
        this.generos = generos;
        this.cantantes = cantantes;
        this.albunes = albunes;
    }
}

class rap extends musica{
    constructor(genero, cantantes, albunes, raperos ){
        super(genero, cantantes, albunes);{   
            this.raperos = raperos;      
            console.log();
        }
    }
}

const musicaa = new musica("regueton", "maluma", "papi juancho");
console.log(musicaa);

const rapp = new rap("rap", "canserbero", "canzoo" , "apache");
console.log(rapp);

// ------------------ OBJETOS ------------------
const torneo ={
    horario: "martes y jueves",
    organizador: "dimelo jara y blessd",
    torneoacargo:{
        torneo1:"champions",
        torneo2:"europa league",
        torneo3:"coference"

    }
}

console.log(torneo.torneoacargo.torneo1);

console.log(torneo["torneoacargo"]["torneo2"]);

console.log(torneo.torneoacargo.torneo1 + `, ` + torneo.torneoacargo.torneo2 + `, ` + torneo.torneoacargo.torneo3);

console.log('Los dias que se va a jugar el torneo son:', torneo.horario + '. los responsables del torneo son: '+ torneo.organizador);