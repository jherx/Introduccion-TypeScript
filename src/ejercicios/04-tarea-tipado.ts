interface superHeroes{
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion:() => string
}

interface Direccion{
    calle: string,
    pais:  string,
    ciudad:string
}

const superHeroe:superHeroes = {
    nombre: 'Batman',
    edad: 34,
    direccion:{
        calle: 'Main St',
        pais: 'USA',
        ciudad:'Gotham City'
    },
    mostrarDireccion(){
        let personaje = this.nombre + ', ' + this.direccion.ciudad + ', '+this.direccion.pais;
        return personaje;
    }
}
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);

