class Usuario {
    constructor (nombre,apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
        }   
    
    addMascotas (nombreMascota) {
        this.mascotas.push(nombreMascota)
        return this.mascotas
    }

    countMascotas(){
        return this.mascotas.length;
    }
   
    addBook (libro){
        this.libros.push(libro)
        return this.libros
    }

    getBookNames () {
        let nombreLibros = this.libros.map(libros2 => {
            return libros2.nombre
        });
        console.log(nombreLibros);
    }
}

const Persona = new Usuario("Leandro", "Prado",[{ nombre:'Elquijote',autor:'Libro'}],['Achu','Toto','Lolo'])

Persona.getFullName()
Persona.addMascotas("Cala")
Persona.addBook({nombre:'Rayuela',autor:'Julio Cortazar'})

console.log(`ud tiene ${Persona.countMascotas()} mascotas`);
console.log(Persona);
Persona.getBookNames()
