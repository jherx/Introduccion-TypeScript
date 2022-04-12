// encadenado opcional 
// ? este símbolo en alguna clase o interfaz indica que es una propriedad opcional

interface Passajero {
    nombre: string;
    hijos?:string[]
}

const pasajero1 : Passajero ={
    nombre: 'Pablo'
}
const pasajero2 : Passajero ={
    nombre: 'Alondra',
    hijos:['NENE','NENA']
}

function imprimirHijos(pasajero: Passajero):void{
 const hijos = pasajero.hijos?.length || 0;
// estamos indicando que en la propiedad hijos?: si cuenta con hijos cuenta cuantos son     or(o si ) es null muéstrame el siguiente valor  0 
 console.log(hijos);
 
}

imprimirHijos(pasajero1 )

// cualquier propiedad o método que intentemos encadenar a undefined marcar un error ya que javascript  no lo soporta 