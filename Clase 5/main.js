class Web {
    constructor(dominio, logo, cantidadPaginas) {
        this.dominio = dominio;
        this.logo = logo;
        this.cantidadPaginas = cantidadPaginas;
    }
}

const dominio = prompt ("Ingrese el nombre de su empresa");
const logo = prompt("Tiene logo diseñado?");
const cantidadPaginas = Number(
    prompt("Qué cantidad de páginas necesita en su web?")
);

const web1 = new Web(dominio, logo, cantidadPaginas);
console.log(web1);