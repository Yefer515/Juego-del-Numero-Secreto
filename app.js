let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10
function asignarTextoElemento(elemento, texto){
 let elementoHTML = document.querySelector (elemento);
 elementoHTML.innerHTML = texto;
return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento("p", `¡Adivinaste el número en ${intentos} ${(intentos === 1) ? 'intentos' : 'intentos'}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (intentos === 5) {
            asignarTextoElemento("p", `¡Agotaste tus intentos! El número secreto era ${numeroSecreto}.`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento("p", "Es Menor");
            } else {
                asignarTextoElemento("p", "Es Mayor");
            }
            intentos++;
            limpiarCaja();
        }
    }
    return;
}


function limpiarCaja(){
document.querySelector("#valorUsuario").value="";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    // si ya sortemos todos los numeros
     if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p" , "Ya se Sortearon todos los Numeros Posibles")
     }else{
    // si el numero generado esta en la lista
         if (listaNumeroSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto();
         }else{
            listaNumeroSorteados.push(numeroGenerado)
             return numeroGenerado;
    }
  }
}
function condicionesIniciales() {
    asignarTextoElemento("h1","Juego del Nunero Secreto");
    asignarTextoElemento("p",`Indica un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja()
    // indicar mensaje de numeros
    condicionesIniciales()
    //generar numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar boton nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true")

}

condicionesIniciales()
 