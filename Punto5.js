// Jose Torres
const prompt = require("prompt-sync")(); 
let arrreglo = [                          // Definicion del arreglo principal
    {titulo:"", contenido:"", nota: 0},
]

function crear() { // Función para crear una nota. 
    let titulo =prompt("Ingrese el titulo de la nota a ingresar: ")
    let contenido =prompt("Ingrese el contenido o detalle de la nota  : ")
    let nota = parseFloat(prompt(`Ingrese la calificacion de ${titulo}: `)) 
        if(isNaN(nota) || nota<0 || nota>5 ){ // condicional para manejar errores en las notas ingresadas. 
            console("Calificacion invalida")
            return; } 
            arrreglo.push({titulo,contenido,nota}) // al no ingresar al condicional se ingresa la nota al arreglo a traves del push. 
            console.log("Nota agregada satisfactoriamente")
}
// function editar(): { // Función para editar una nota. }
function eliminar() { //Función para eliminar una nota.
    let titulo = prompt("Ingrese el titulo de la nota ha eliminar: "); //Solicita ingresar el titulo de la nota a eliminar.
    let index = arrreglo.findIndex(titulo=>arrreglo.titulo.toLowerCase()== titulo.toLowerCase()) //Recorre el arreglo hasta hallar el titulo de la nota a eliminar sin discriminar mayusculas gracias al TOLOWERCASE.
    if(index !== -1){
        arrreglo.splice(index,1)
        console.log("Nota eliminada")
    }else{
        console.log("Estudiante no encontrado") }
}   
// function listar_notas():  { // Función para listar todas las notas. }
// function buscar_nota(): { //Función para buscar una nota por título. }

flag= true // Inicializacion de una bandera.
while(flag===true){ // Inicializacion de un ciclo, se ejecutara ya que va atado a la bandera declara inicialmente.
    console.log("\n Sistema de Gestion de Estudiantes") // Explicacion al usuario del menu por medio de pantalla.
    console.log("4.")
    console.log("5.")
    console.log("6.Salir")

    let opcion = prompt("Seleccione una opcion: ") // Opciones de usuario segun su eleccion se ejecutaran las funciones predeterminadas en el codigo.

    switch(opcion){ // Ciclo para iniciar la funcion seleccionada por el usuario.

        case "1":
            crear();
            break;
        case "2":
            ;
            break;
        case "3":
            eliminar()
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