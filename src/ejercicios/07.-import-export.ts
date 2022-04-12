import { calculaISV, Producto } from "./06.-Desestructuracion-funcion";


const carritoCompras: Producto[] = [
	{
		desc: 'Telefono 1',
		precio: 11000,
	},
	{
		desc: 'Telefono 2',
		precio: 15000,
	},
];

const [total , isv] = calculaISV(carritoCompras);

console.log('Total',total);
console.log('ISV',isv);
