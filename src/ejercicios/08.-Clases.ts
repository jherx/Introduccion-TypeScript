
class PersonaNormal{
    constructor(
        public nombre: string,
        public direccion:string

    ){}
}

class Heroe extends PersonaNormal {
    constructor(
    public alterEgo: string,
    public edad: number,
    public nombreREal:string){
        super(nombreREal , 'New York');
    }
}

const ironman = new Heroe('IRONMAN',45,'TONY');
 console.log(ironman);

