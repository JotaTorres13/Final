// Jose Torres
const prompt = require("prompt-sync")(); 
let arrreglo = [                          // Definicion del arreglo principal
    {titulo:"", contenido:"", nota: 0},
]

function crear() {
    let titulo =prompt("Ingrese el titulo de la nota a ingresar: ")
    let contenido =prompt("Ingrese el contenido o detalle de la nota  : ")
    let nota = parseFloat(prompt(`Ingrese la calificacion de ${titulo}: `)) 
        if(isNaN(nota) || nota<0 || nota>5 ){
            console("Calificacion invalida")
            return; } 
            arrreglo.push({titulo,contenido,nota})
            console.log("Nota agregada satisfactoriamente")
}

// function editar_nota(): { // Función para editar una nota. }
// function eliminar_nota(): { //Función para eliminar una nota. }
// function listar_notas():  { // Función para listar todas las notas. }
// function buscar_nota(): { //Función para buscar una nota por título. }

flag= true
while(flag===true){
    console.log("\n Sistema de Gestion de Estudiantes")
    console.log("1.Crear Nota")
    console.log("2.")
    console.log("3.")
    console.log("4.")
    console.log("5.")
    console.log("6.Salir")

    let opcion = prompt("Seleccione una opcion: ")

    switch(opcion){

        case "1":
            crear();
            break;
        case "2":
            ;
            break;
        case "3":
            ;
            break;
        case "4":
            ;
            break;
        case "5":
            ;
            break
        case "6":
            console.log("Saliendo del sistema")
            flag === false
            break
        default:
            console.log("Opcion no valida")
    }
}