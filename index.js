/*let nombredeusuario;
let contrasena;

nombredeusuario = prompt('Ingrese su nombre de usuario')

if (nombredeusuario != ' ')
{
    contrasena = prompt('Ingrese su contrasena')
    if (contrasena != ' '){
        console.log('el usuario ingreso su usuario y contrasena')
    }
    else{
        console.log('ingrese su contrasena')
    }

} else{
    page
}*/

/*

const SUMAR = '+';
const PRODUCTO = '*';
const DIVISION = '/';
const RESTA = '-';
const SALIR = '0';

let resultado;
let operacion;

do {
    alert('Bienvenido a la calculadora!' + '\n' +
        '"+": sumar' + '\n' +
        '"-": restar' + '\n' +
        '"*": multiplicar' + '\n' +
        '"/": division' + '\n' +
        '"0": salir');
    operacion = prompt('ingrese la operacion que desea realizar');

    if (operacion != SALIR) {
        let numero1 = Number(prompt('ingrese el primer numero'));
        let numero2 = Number(prompt('ingrese el segundo numero'));

        switch (operacion) {
            case SUMAR:
                resultado = numero1 + numero2;
                break; ///salgo del switch
            case RESTA:
                resultado = numero1 - numero2;
                break;
            case PRODUCTO:
                resultado = numero1 * numero2;
                break;
            case DIVISION:
                resultado = numero1 / numero2;
                break;
            default:
                resultado = NaN ///not a number
                alert('Ingreso un caracter invalido...');
        }
        alert('El resultado de la operacion es: ' + resultado);
    } else {
        alert('Gracias por usar la calculadora!');
    }
} while (operacion != SALIR); 

*/

let nombre;
let altura;
let peso;
let imc;
let resultadoImc;
let reintentar;



alert('Bienvenido a la calculadora de indice de masa corporal');
do{
nombre = prompt('Ingrese su nombre');
peso = Number(prompt('Hola ' + nombre + ', especifique su peso en kilogramos'));
altura= Number(prompt('Especifique su altura en metros (ejemplo: 1.70)'));
imc = (peso / (altura * altura));

    if (imc <= 24.9){
    resultadoImc = 'Normal';
    } else {
        if(imc <= 29.9){
        resultadoImc = 'Sobrepeso';
        } else {
            if(imc <= 34.9){
            resultadoImc = 'Obesidad de primer grado';
            } else {
                if(imc <= 40){  
                resultadoImc = 'Obesidad de segundo grado';
                
                }else{
                    resultadoImc = 'No valido'
                }
            }    
        }
    } 
    
    alert('El resultado de su IMC es ' + resultadoImc)
    reintentar = prompt('Desea reintentar? Si / No')
}while(reintentar == 'si');

