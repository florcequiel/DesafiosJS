    let apellido = prompt("Por favor, ingresá tu apellido");
    let nombre = prompt("Y ahora, ingresá tu nombre");
    alert("Hola" + " " + nombre + " " + apellido);

    let tuEdad = prompt("Qué edad tenés?");
    let edad = parseInt(tuEdad); 
    
    let edadInscripcion = 18;

    let resultado = edad >= edadInscripcion;
    alert("Ya te puedes inscribir");
