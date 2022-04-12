// se inicia con las interfaces para facilitar el autocomplete

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}
interface Detalles{
    autor: string;
    year: number;
    albumn:string;
    }
// se estructura el objeto con el tipo de dato usando (interface)
    const Reproductor:Reproductor ={
        volumen : 95,
        segundo:25,
        cancion: 'El cantante',
        detalles:{
            autor:'Sipo One',
            year: 2021,
            albumn:'El mas duro'
        },
    }
    //? Des estructuración de Objetos

    // La des estructuración , consiste en hacer lo menos complejo la lectura del código
    const {volumen,segundo,cancion,detalles } = Reproductor;
    const { autor, year , albumn} = detalles
    //consiste en crear una constante  abrir llaves y agregar las propiedades de la interfaz  
    
    // console.log('El volumen actual es:',volumen);
    // console.log('El segundo actual es:',segundo);
    // console.log('El cancion actual es:',cancion);
    // console.log('El autor es:',autor);
    // console.log('El año es:',year);
    // console.log('El albumn es:',albumn);
    

    //? Des estructuración de Arreglos

    // Las des estructuración en un arreglo se basa en las posiciones y en como se manden a llamar

    const dbz:string[] = ['GOKU','VEGETA','KRILLIN'];
    const [g, v , k] = dbz;
    //No importan el nombre de las constantes aquí lo que importa es la posición 
    // en caso de necesitar un solo una posición no se ponen y se deja una como " , , p3"

    console.log('Personaje 1',g);
    console.log('Personaje 2',v);
    console.log('Personaje 3',k);
    
