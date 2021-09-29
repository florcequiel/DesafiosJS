class Red {
    constructor(red, precioMensual) {
        this.red = red.toUpperCase();
        this.precioMensual = parseFloat(precioMensual);
    }
    sumaIva() {
        this.precioMensual = this.precioMensual * 1.21;
    }
}

//Declaro array de redes para almacenar objetos
const redes = []

redes.push(new Red("Instagram", "3500"));
redes.push(new Red("Facebook", "3000"));
redes.push(new Red("Linkedin", "1500"));

//Itero el array con for...of para modificarlos a todos 
for (const red of redes) {
    red.sumaIva();
}

console.log(redes);