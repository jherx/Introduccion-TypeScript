
// arreglos

let habilidades: string[]  = ['bash','conter','poder'];
// Es importante poner los tipos de datos durante la inicializacion 
// de la variable ayuda a evitar errores de datos 

// objeto convenconal en javascript
// const personaje ={
// nombre:'Gerson',
// hp: 100,
// habilidades:['bash','Linux','wine']
// }

// Una interfaces es una serie de  llaves que restringen los datos que se esperan optener

interface Personaje {
    nombre:string;
    hp:number;
    habilidades:string[];
    puebloNatal?:string; 
}

const personaje: Personaje = {
    nombre:'JHXN',
    hp: 100,
    habilidades: ['telcado','mouse','ncis']
}

personaje.puebloNatal = 'Pueblo labanda';

console.table(personaje);
