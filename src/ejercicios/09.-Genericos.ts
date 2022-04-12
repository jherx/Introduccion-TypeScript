// Genericos

function queTipoSoy<T>(argumento: T){
    return argumento;
}

//?  <T> : es un estándar para indicar que es un genérico y puede ser de cualquier tipo según se vaya requiriendo 

let soySting = queTipoSoy('hola mundo');
let soyNumero = queTipoSoy(100);
let soyArr = queTipoSoy([1,2,3,4,5]);

let soyExplicito = queTipoSoy<Boolean>(true);