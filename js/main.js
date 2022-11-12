// Display donde se van a mostar los numeros
let display = document.getElementById('input-display');
//Botones de la calculadora
let buttons = document.querySelectorAll('.number .num');
// Variablaes
let cifraVacia = '';
// Llamadas a eventos
window.addEventListener('load', () => display.value = 0);
// Creamos un array de los botones
const numeros = Array.from(buttons);
// Aqui creamos un forech de cada boton para ponerlos ala escucha
buttons.forEach((button) => button.addEventListener('click', () => calculaNumeros(button, display)));
// Funcion calculadora
const calculaNumeros = (button, display) => {
    button.value == 'C' ? borrarDisplay(display)
        : button.value == '=' ? resultadoDisplay(display)
            : actualizaDisplay(display, button)
}
const resultadoDisplay = display => display.value = eval(display.value);
const actualizaDisplay = (display, button) => {
    display.value == 0 ? display.value = cifraVacia : null;
    // 
    display.value += button.value;
}
const borrarDisplay = display => display.value = 0;
