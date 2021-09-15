let entrada = prompt("Ingresá lo que deseas almorzar");

while (entrada != "ESC") {
   switch (entrada) {
        case "Sandwich":
            alert ("Valor $150");
            break;
        case "Milanesa":
            alert ("Valor $350");
            break;
        case "Ensalada":
            alert ("Valor $250");
        
        default:
            alert ("Disculpa, aún no forma parte de nuestro menú");
            break;
    } 
    entrada = prompt("Ingresá lo que deseas almorzar");
    console.log(entrada);
}




    
    