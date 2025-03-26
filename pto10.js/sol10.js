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
function depositoDinero(nombre, cantidad) {   // creacion funcion para depositar

     if(isNaN(cantidad)|| cantidad <= 0){
        console.log(`Error. la cantidad no es valida`); // verificamos que la cantidad a depositar sea un numero y sea positiva para poder ingresar de lo contrario no se deposita
        return;
     }
     const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre); // con .find encontramos la cuenta a la que queremos depositar el dinero

     if(cuenta){
        cuenta.saldo += parseFloat(cantidad);
        console.log(`se ha depositado ${cantidad} en la cuenta de ${nombre} nuevo saldo ${cuenta.saldo}`); // en este segmento vamos a sumar el dinero depositado a la cuenta y si en el vector no la tenemos lanzamos el mensaje de no encontrada
     } else {
        console.log(" no se encontro la cuenta");
     }

}
function retiroDinero (nombre, cantidad){  // creacion funcion retiro de la cuenta deseada y su monto a retirar
    if(isNaN(cantidad)|| cantidad <= 0){
        console.log(`Error. la cantidad no es valida`);
        return;
     }
     const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre); // como ya sabemos .find encontramos la cuenta para retirar

     if(cuenta){
        if(cuenta.saldo >= cantidad){
            cuenta.saldo -= parseFloat(cantidad);     // si realizamos el retiro con exito debemos hacer la resta del dinero y mostrar el nuevo saldo que dejamos en la cuenta
            console.log(`se retiro ${cantidad} de cuenta ${nombre} nuevo saldo ${cuenta.saldo}`);
        } else {                                // si no hay suficiente dinero lanzamos el mensajero de la falla por falta de dinero
            console.log("No se realizo con exito por falta de dinero ");
        }
     }
}

function consultarSaldo (nombre){  // creacion de funcion para saber el saldo de la cuenta
    const cuenta = cuentas.find(cuenta => cuenta.nombre === nombre); // aca buscamos la cuenta segun el nombre

       if (cuenta){
        console.log(`Sldo de su cuenta ${nombre} es ${cuenta.saldo}`); // luego de encontrar el nombre de la cuenta lo decimos con cuenta.saldo y si no es encontrada en el vector lanzamos el mensaje
       } else {
        console.log("Error. cunta no encontrada");
       }
}

function listaCuentas (){  // fundion para tener en lista todas las cuentas que logramos crear en nuestro vector
    if (cuentas.length === 0) { // aca es el tamaño del vector o por decir cuantas cuentas creamos si el tamaño es 0 decimos no hay cuentas creadas
        console.log ("No se ven cuentas creadas");
        return;
    }
        console.log("cuenta creada con exito"); 
        cuentas.forEach(cuenta => {     // con estos elemestos podemos imprimir cada cuenta creada con su saldo 
            console.log(`${cuenta.nombre} ${cuenta.saldo}`);
        });

}
function menu (){   // creacion funcion menu, es decir las funciones que se pueden hacer en el banco
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

      







