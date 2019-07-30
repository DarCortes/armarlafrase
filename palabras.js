//VARIABLE
var palabras1 = document.getElementById("palabras1");
var palabras2 = document.getElementById("palabras2");
var palabras3 = document.getElementById("palabras3");
var palabras4 = document.getElementById("palabras4");

var boton = document.getElementById("boton-frase")
var resultado = document.getElementById("Resultado")


//FUNCION
function armarFrase(a, b, c, d) {
    return (a + " " + b + " " + c + " " + d)
}
//EVETOS
boton.addEventListener("click", function() {
    var frasecompleta = armarFrase(palabras1.value, palabras2.value, palabras3.value, palabras4.value)
    resultado.innerHTML = frasecompleta
})