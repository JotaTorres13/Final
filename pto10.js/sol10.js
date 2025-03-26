let cuentas = [] // aca estoy declarando el vector llamado cuentas y vamos almacernas las cuentas creadas
function crearCuenta(nombre,saldoIn) { // empiezo la funcion para crear la cuenta
 
     if (isNaN(saldoIn || saldoIn < 0)){  // si saldo inicial es un numero y es menor a 0 tira el error ya que es invalido 
        console.log("Error, DATO NO VALIDO");
        return;
     }
     const cuenta = { // si la parte de arriba que es como la verificacion cumple pasa aca para crear la cuenta como lo es el nombre y el saldo
        nombre: nombre,
        saldo: parseFloat(saldoIn)
     };
     cuentas.push(cuenta); // despues de realizar el paso anterior usamos el .push para subir la cuenta a nuestro vector y lanzamos el mensaje de cuenta creada y su saldo
     console.log(`cuenta creada con exito${nombre} y tu saldo es ${saldoIn}`);

}
function depositoDinero(nombre, cantidad) {

     if(isNaN(cantidad)|| cantidad <= 0){
        console.log(`Error. la cantidad no es valida`);
        return;
     }
     const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre);

     if(cuenta){
        cuenta.saldo += parseFloat(cantidad);
        console.log(`se ha depositado ${cantidad} en la cuenta de ${nombre} nuevo saldo ${cuenta.saldo}`);
     } else {
        console.log(" no se encontro la cuenta");
     }

}
function retiroDinero (nombre, cantidad){
    if(isNaN(cantidad)|| cantidad <= 0){
        console.log(`Error. la cantidad no es valida`);
        return;
     }
     const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre);

     if(cuenta){
        if(cuenta.saldo >= cantidad){
            cuenta.saldo -= parseFloat(cantidad);
            console.log(`se retiro ${cantidad} de cuenta ${nombre} nuevo saldo ${cuenta.saldo}`);
        } else {
            console.log("No se realizo con exito por falta de dinero ");
        }
     }
}

function consultarSaldo (nombre){
    const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre);

       if (cuenta){
        console.log(`Sldo de su cuenta ${nombre} es ${cuenta.saldo}`);
       } else {
        console.log("Error. cuenta no encontrada");
       }
}

function listaCuentas (){
    if (cuentas.length === 0) {
        console.log ("No se ven cuentas creadas");
        return;
    }
        console.log("cuenta creada con exito");
        cuentas.forEach(cuenta => {
            console.log(`${cuenta.nombre} ${cuenta.saldo}`);
        });

}
function menu (){
   let banco = false;

   while(banco){
    console.log("\n Menú Banco ");
    console.log("1. Crear cuenta");
    console.log("2. Depositar dinero");
    console.log("3. Retirar dinero");
    console.log("4. Consultar saldo");
    console.log("5. Listar cuentas");
    console.log("6. Salir");

    let opcion = prompt("elegir una opcion entre 1-6");

      switch (opcion){
        case 1:  
        const nombreCuenta = prompt("Ingrese el nombre para la nueva cuenta: ");
        const saldoIn = parseFloat(prompt("Ingrese el saldo inicial de la cuenta: "));
        crearCuenta(nombreCuenta, saldoIn);
        break;
    case 2:  
        const nombreDeposito = prompt("Ingrese el nombre de la cuenta para depositar: ");
        const cantidadDeposito = parseFloat(prompt("Ingrese la cantidad a depositar: "));
        depositoDinero(nombreDeposito, cantidadDeposito);
        break;
    case 3:  
        const nombreRetiro = prompt("Ingrese el nombre de la cuenta para retirar: ");
        const cantidadRetiro = parseFloat(prompt("Ingrese la cantidad a retirar: "));
        retiroDinero(nombreRetiro, cantidadRetiro);
        break;
    case 4:  
        const nombreConsulta = prompt("Ingrese el nombre de la cuenta para consultar el saldo: ");
        consultarSaldo(nombreConsulta);
        break;
    case 5:  
        listaCuentas();
        break;
    case 6:  
        console.log("¡Adios!");
        salir = true;  
        break;
    default:
        console.log("Opción inválida. ");
        break;
}
}
}


menu();

      







