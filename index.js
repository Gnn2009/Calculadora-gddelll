const numberButtons = document.getElementById('numeros');
const symbolButtons = document.getElementById('simbolos');
const spnaPantallaT = document.getElementById('spanPantalla');
const pantalla = document.getElementById('pantalla');

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
        buttonNum.className = 'buttonsStyles'
        numberButtons.appendChild(buttonNum);
        numberButtons.inerHTML += buttonNum;

        buttonNum.addEventListener('click', () => {

            if(operador === ''){
                numero1 += buttonNum.innerText
            }else{
                numero2 += buttonNum.innerText
                spnaPantallaT.innerHTML = parseInt(numero2)
            }
            spnaPantallaT.innerHTML = parseInt(numero1)
            pantalla.classList.add('anamiacionPantalla')
            setTimeout(() => {
                pantalla.classList.remove('anamiacionPantalla')
            }, 200);
        });

    })
    operadores.forEach(op =>{
        const buttonOP = document.createElement('button')
        buttonOP.innerText =  op
        buttonOP.className = 'buttonsStyles'
        symbolButtons.appendChild(buttonOP)
        buttonOP.addEventListener('click', () =>{
            operador = buttonOP.innerText
            pantalla.classList.add('anamiacionPantalla')
            setTimeout(() => {
                pantalla.classList.remove('anamiacionPantalla')
            }, 200);
            spnaPantallaT.innerHTML = ''
            console.log('El operador es: ',operador)
        })
    })
    const equalbutton = document.createElement('button')
    equalbutton.textContent = igual
    equalbutton.className = 'buttonsStyles'
    equalbutton.id = 'equalButton'
    equalbutton.innerHTML = equalbutton.innerText
    symbolButtons.appendChild(equalbutton)
    equalbutton.addEventListener('click', calcular)
})
function calcular(){
    spnaPantallaT.innerHTML = parseInt(numero1)
    pantalla.classList.add('anamiacionPantalla')
    setTimeout(() => {
        pantalla.classList.remove('anamiacionPantalla')
    }, 200);
    if(numero1 && numero2 && operador){
        switch (operador){
            case '+':
                resultado = parseInt(numero1) + parseInt(numero2)
                break;
            case '-':
                resultado = parseInt(numero1) - parseInt(numero2)
                break;
            case '*':
                resultado = parseInt(numero1) * parseInt(numero2)
                break;
            case '/':
                resultado = parseInt(numero1) / parseInt(numero2)
                break;
        }
        spnaPantallaT.innerHTML = resultado
        console.log(resultado)
        numero1 = ''
        numero2 = ''
        operador = ''
    }else if(numero1 === '' || numero2 === '' || operador === ""){
        alert("falta algun dato")
        return;
    }
    
}
