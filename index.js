const numberButtons = document.getElementById('numeros');
const symbolButtons = document.getElementById('simbolos');
const pantalla = document.getElementById('spanPantalla');

var numeros = [...Array(9).keys()].map(i => i + 1).concat(0)
var operadores = ['+', '-', '*', '/',]
var igual = '=';
var numero1 =''
var numero2 = ''
var operador = ''
var resultado

window.addEventListener('load', () => {
    numeros.forEach(num => {
        const buttonNum = document.createElement('button');
        buttonNum.innerText = num;
        numberButtons.appendChild(buttonNum);
        numberButtons.inerHTML += buttonNum;

        buttonNum.addEventListener('click', () => {
            if(operador === ''){
                    numero1 += buttonNum.innerHTML
                console.log(parseInt(numero1))
            }else{
                numero2 += buttonNum.innerHTML
                console.log(numero2)
            }
        });

    })
    operadores.forEach(op =>{
        const buttonOP = document.createElement('button')
        buttonOP.innerText =  op
        symbolButtons.appendChild(buttonOP)
        buttonOP.addEventListener('click', () =>{
            operador = buttonOP.innerText
            console.log('El operador es q',operador)
        })
    })
    const equalbutton = document.createElement('button')
    equalbutton.textContent = igual
    equalbutton.inerHTML = equalbutton
    symbolButtons.appendChild(equalbutton)
    equalbutton.addEventListener('click', calcular)
})

function calcular(){
    if(numero1 && numero2 && operador){
        switch (operador){
            case '+':
                console.log(parseInt(numero1) + parseInt(numero2))
                break;
            case '-':
                console.log (parseInt(numero1) - parseInt(numero2))
                break;
            case '*':
                console.log (parseInt(numero1) * parseInt(numero2))
                break;
            case '/':
                console.log (parseInt(numero1) / parseInt(numero2))
                break;
        }
    
        numero1 = ''
        numero2 = ''
        operador = ''
    }else{
        if(numero1 === '' || numero2 === '' || operador === ""){
            alert("falta algun dato")
        }
    }
}