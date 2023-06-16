function limpiar() 
{ 
document.getElementById("frmconversiones").reset(); 
document.getElementById("res").innerHTML = ""; 
} 
document.getElementById("frmconversiones").addEventListener("submit", function(event)
{ 
event.preventDefault(); 
var cantidad = parseFloat(document.getElementById("cant").value);
var tipo = document.getElementById("tipo").value; 
var valor = parseFloat(document.getElementById("valorD").value); 
var result; if (tipo === "pesos") { result = cantidad / valor; 
document.getElementById("res").innerHTML = cantidad + " pesos equivalen a " + result + " dólares."; 
} 
else 
{ result = cantidad * valor; 
document.getElementById("res").innerHTML = cantidad + " dólares equivalen a " + result + " pesos."; } });

var resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
    resultados.innerHTML += "Tipo: " + tipo;

    var historialMensaje ="Tipo: " + tipo;
    agregarHistorial(historialMensaje);

function agregarHistorial(mensaje) {
    historialAcciones.push(mensaje);
    actualizarHistorial();
}

function actualizarHistorial() {
    var historial = document.getElementById("historial");
    historial.innerHTML = "";
    for (var i = 0; i < historialAcciones.length; i++) {
        var nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = historialAcciones[i];
        historial.appendChild(nuevoElemento);
    }
}
function retroceso() {
    if (historialAcciones.length > 0) {
        historialAcciones.pop();
        actualizarHistorial();
    }
}
document.getElementById("retroceso").addEventListener("click", function () {
    retroceso();
});