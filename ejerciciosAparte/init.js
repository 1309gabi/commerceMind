alert("click alerta");

let nuevoUsuario = prompt ("Ingresa tu nombre");
    console.log (nuevoUsuario);

console.log("Bienvenidos a la consola💻")

let nombreUsuario = "Gabriela programadora";
let edadUsuario = 23;
console.log(nombreUsuario +' a los '+edadUsuario);

/*let edadUsuario2 = 21;
let unionEdad = edadUsuario + edadUsuario2;
console.log(unionEdad);*/

let unaMultiplicacion = prompt ("Ingresa un primer número para multiplicar");
let unaMultiplicacion2 = prompt ("Ingresa un segundo número para multiplicar");
let resultado = unaMultiplicacion * unaMultiplicacion2;
    console.log (parseInt (resultado));

let nuevoTexto = prompt ('Escribe en la siguiente línea "Hola Mundo"');
    if (nuevoTexto === 'Hola Mundo') {
        console.log('Muy Bien!!');
    } 
        else {console.log('Intentalo nuevamente')};

let numerosEnteros = prompt ('Escribe un número del 1 al 10');
    if (numerosEnteros <= 10) {
        console.log('Excelente!!');
    } 
        else {console.log('Era un número del 1 al 10')};

let opcionesUsuario = prompt(`
    Elige una opción:
    1. Película
    2. Videojuego
    3. País
    `);
    console.log(opcionesUsuario);

    switch (opcionesUsuario){
        case '1':
            console.log('Cars 2')
            break;
        case '2':
            console.log('LOL')
            break;
        case '3':
            console.log('España')
            break;
        default:
            console.log('Opción no válida')
            break;
    }


