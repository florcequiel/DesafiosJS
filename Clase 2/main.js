    let numeroCliente = "1825"
    let cliente = prompt("Por favor, ingresá tu número de cliente");
    let clienteParseado = parseInt(cliente);
    let password = "soycliente";
    let passwordIngresado = prompt("Ahora, tu contraseña")

    if (clienteParseado == numeroCliente && passwordIngresado == password) {
        alert ("Habilitado el ingreso!");
    } else {
        alert ("No estás habilitado para ingresar!");
    }