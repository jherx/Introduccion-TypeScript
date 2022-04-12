//  DECORADORES //
// Definición: LOs decoradores sirven para agregar o expandir funcionalidades que  ayudan a identificar  a angular


function classDecoration<T extends {new (...args: any[]):{}}>(
    constructor: T
){
return class extends constructor{
    newProperty = "new property";
    hello = "override"
}; 
}

@classDecoration // agregando una @ de reconoce que es un decorador y que dentro de el llevan clases  

class MIsuperClase{
    public miPropiedad:string = 'ABC123';

    imprimir(){
        console.log('Hola Mundo');
        
    }
}

console.log(MIsuperClase);

const miClase = new MIsuperClase();
// const miClass = new MIsuperClase();

console.log(miClase.imprimir());
console.log(miClase.miPropiedad);
