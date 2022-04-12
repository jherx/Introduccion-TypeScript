
export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto ={
    desc: 'XIAOMI A11 PRO',
    precio: 1500
}
const tables: Producto ={
    desc: 'SAMSUNG GALAXI',
    precio: 500
}


export function calculaISV( productos:Producto[]):[ number, number] //regresamos un arr con 2 números
{
    
    let total = 0;

    // Se ejecutara por cada producto que este dentro del producto
    productos.forEach(({precio})=>{ // podemos des estructurar la propiedad desde el callback  agregano llaves 

        // vamos ir incrementando y acumulando el valor * el precio
        total+= precio
    })

    return [total,total * 0.15]
    // incluso podemos retornan un arreglo cargando el valor dwl total y el isv
}

// requerimos un arreglo de artículos 
const articulos =[ telefono, tables];

const [total, isv] = calculaISV(articulos); // agregamos llaves cuadradas para indicar que es una desestructuracion 

console.log('Total',total);
console.log('ISV',isv);
