class Usuario{

    //Constructor
    constructor(nombre,apellido,libros,mascotas){

        this.nombre     = nombre;
        this.apellido   = apellido;
        this.libros     = libros;
        this.mascotas   = mascotas;
    };

    //Métodos

    getFullName(){

        return `El usuario se llama ${this.nombre} ${this.apellido}.`;
    };

    addMascotas(pet){

        this.mascotas.push(pet);
    };

    countMascotas(){

        return `El usuario tiene ${this.mascotas.length} mascotas.` ;
    };

    addBook(name,author){

        let newBook = {nombre:name,autor:author};

        this.libros.push(newBook);


    };

    getBookNames(){

        let bookNames= [];

        this.libros.forEach(book => {
            
            bookNames.push(book.nombre);
        });

        console.log('Al usuario le gustan los siguientes libros:');
        return bookNames;
    }


}

const userName     = 'Ryan';
const userLastName = 'Reynolds';
const userBooks    = [

    {nombre: 'The Picture of Dorian Gray', autor: 'Oscar Wilde'},
    {nombre: 'Harry Potter and the Order of the Phoenix', autor: 'J. K. Rowling'}
    
];
const userPets     = ['Itchy','Scratchy'];

const usuario = new Usuario(userName, userLastName, userBooks, userPets);

console.log(usuario.getFullName());
usuario.addMascotas('Snowball');
console.log(usuario.countMascotas()); 
usuario.addBook('Nomadland: Surviving America in the Twenty-First Century','Jessica Bruder');
console.log(usuario.getBookNames());
