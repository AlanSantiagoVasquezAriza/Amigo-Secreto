// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema 

let participantes = [];
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function mostrarAmigos(){
    lista.innerHTML = ""; // Limpiar la lista antes de mostrar los amigos
    for (let i = 0; i < participantes.length; i++) {
        let li = document.createElement("li");
        li.textContent = participantes[i];
        lista.appendChild(li);
    }
}

function mostrarResultado(ganador) {
    resultado.innerHTML = ""; // Limpiar el resultado anterior
    let li = document.createElement("li");
    li.textContent = `El amigo secreto es ${ganador}`;
    resultado.appendChild(li);
}

function agregarAmigo (){
    let amigo = document.getElementById("amigo").value;
    if (amigo == ""){
        alert("Por favor, ingresa un nombre valido.");
    }else{
        participantes.push(amigo);
        document.getElementById("amigo").value = ""; // Limpiar el campo de entrada
        mostrarAmigos();
    }
}

function sortearAmigo(){
    if(participantes.length > 0) {
        let indiceGanador = Math.floor(Math.random() * participantes.length);
        let ganador = participantes[indiceGanador];
        participantes.splice(indiceGanador, 1); // Eliminar al ganador de la lista para que no se sortee a sí mismo
        mostrarAmigos();
        mostrarResultado(ganador);
    }else{
        alert("No hay suficientes participantes para realizar el sorteo.");
    }
}