// function suma(a:number,b:number):number{
//     return a +b ;
// }
// const resultado = suma(10,5);


// const sumaFlecha = (a:number,b:number):number =>{
//     return a +b 
// }

// console.log(resultado);


interface PersonajeLOL{
    nombre:string;
    pv:number;
    mostrarHp: () => void; // es una manera corta de indicar que es una función y el tipo de dato
}

const curar = (personaje:PersonajeLOL , curarX:number):void =>{
    personaje.pv += curarX;
    console.log(personaje);
    
}
// a los objetos también se le indica el tipo de dato mediante interface o solo el tipo 

const nuevoPersonaje:PersonajeLOL = {
    nombre: 'Tlaloc',
    pv: 50,
    mostrarHp(){
        console.log('Mostrar los puntos de vida',this.pv);
        
    }
}

curar(nuevoPersonaje,50);
nuevoPersonaje.mostrarHp();
