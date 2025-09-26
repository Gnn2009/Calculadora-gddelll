const numberButtons = document.getElementById("numeros");
const symbolButtons = document.getElementById("simbolos");
const spnaPantallaT = document.getElementById("spanPantalla");
const pantalla = document.getElementById("pantalla");

var numeros = [...Array(9).keys()].map((i) => i + 1).concat(0);
var operacion = ""
var resultado = ""
var operadores = ["+", "-", "*", "/"];
var igual = "=";

window.addEventListener("load", () => {
    numeros.forEach((num) => {
        const buttonNum = document.createElement("button");
        buttonNum.innerText = num;
        buttonNum.className = "buttonsStyles";
        numberButtons.appendChild(buttonNum);
        numberButtons.inerHTML += buttonNum;

        buttonNum.addEventListener("click", () => {
            operacion += buttonNum.innerText;
            console.log(operacion);
            spnaPantallaT.innerHTML = operacion;
            animarPantalla()});
    });
operadores.forEach((op) => {
    const buttonOP = document.createElement("button");
    buttonOP.innerText = op;
    buttonOP.className = "buttonsStyles";
    symbolButtons.appendChild(buttonOP);
    buttonOP.addEventListener("click", () => {
    operacion += buttonOP.innerText;
    animarPantalla()
    spnaPantallaT.innerHTML = "";
    console.log("El operador es: ", operador);
    });
});
    const equalbutton = document.createElement("button");
    equalbutton.textContent = igual;
    equalbutton.className = "buttonsStyles";
    equalbutton.id = "equalButton";
    equalbutton.innerHTML = equalbutton.innerText;
    symbolButtons.appendChild(equalbutton);
    equalbutton.addEventListener("click", calcular);
});
function calcular() {
    resultado = math.evaluate(operacion)
    animarPantalla();
    spnaPantallaT.innerHTML = resultado;
    console.log(resultado);
    operacion = ""
}
function animarPantalla() {
    pantalla.classList.add("anamiacionPantalla");
    setTimeout(() => {
        pantalla.classList.remove("anamiacionPantalla");
    }, 200);
}