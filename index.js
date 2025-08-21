const numberButtons = document.getElementById('numeros');
const symbolButtons = document.getElementById('simbolos');
const pantalla = document.getElementById('spanPantalla');

var numeros = [...Array(9).keys()].map(i => i + 1).concat(0)
var operadores = ['+', '-', '*', '/',]
var igual = '=';

window.addEventListener('load', () => {
    numeros.forEach(num =>{
        const button = document.createElement('button');
            button.className = 'numberClass';
            button.value = num;
            button.textContent = num;
        numberButtons.appendChild(button);
        button.addEventListener('click', () => {
            escirbirNumero(button.value);
        })
    });

    operadores.forEach(op =>{
        const buttonOP = document.createElement('button')
            buttonOP.className = 'operatorClass';
            buttonOP.value = op;
            buttonOP.textContent = op;
        symbolButtons.appendChild(  buttonOP);
        buttonOP.addEventListener('click', () => {
            let spanPantalla = pantalla.textContent;
            escirbirOperador(buttonOP.value, spanPantalla);
        })
    })
})

function escirbirNumero(numero) {
    pantalla.innerHTML += numero;
}
function escirbirOperador(operador, spanPantalla){
    if(spanPantalla.slice(-1) === '+' || spanPantalla.slice(-1) === '-' || spanPantalla.slice(-1) === '*' || spanPantalla.slice(-1) === '/') {
        return;
    }else {
        pantalla.innerHTML += operador;
    }
}