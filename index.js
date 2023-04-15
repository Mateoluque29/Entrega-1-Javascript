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
/*
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
                    if(imc < 40){
                        resultadoImc = 'Obesidad de tercer grado'
                    }
                }
            }    
        }
    } 
    
    alert('El resultado de su IMC es ' + resultadoImc)
    reintentar = prompt('Desea reintentar? Si / No')
}while(reintentar == 'si');
*/

let nombre;
let eleccion;
let comida;
let altura;
let peso;
let imc;
let resultadoImc;
let reintentar;

let proteina
let kcal


nombre = prompt('Ingrese su nombre');
eleccion = prompt('Hola ' + nombre + ' si quiere ingresar a la Calculadora de IMC escriba IMC. Si quiere saber valores nutricionales de los alimentos, escriba alimentos');

if(eleccion == 'imc'){
    do{
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
                            if(imc < 40){
                                resultadoImc = 'Obesidad de tercer grado'
                            }
                        }
                    }    
                }
            } 
            
            alert('El resultado de su IMC es ' + resultadoImc)
            reintentar = prompt('Desea reintentar? Si / No')
        }while(reintentar == 'si');
}else{
    do{
        comida = Number (prompt('Elija el numero del alimento que desea saber sus valores nutricionales'+ '\n' +
    '1- Leche semidescremada (2%)'+ '\n' +
    '2- Yogur natural' + '\n' +
    '3- Quesos blandos'+ '\n' +
    '4- Huevo entero' + '\n' +
    '5- Cereales'+ '\n' +
    '6- Legumbres'+ '\n' +
    '7- Pan Frances'+ '\n' +
    '8- Frutas Secas'))

    if(comida == 1){
        alert('250ml de leche semidescremada tiene:'+ '\n' +
        'Proteina: 7,5g'+ '\n' +
        'Kilocalorias: 125')
    }else{
        if(comida == 2){
            alert('200ml de yogur natural tiene:'+ '\n' +
            'Proteina: 6g'+ '\n' +
            'Kilocalorias: 118')
        }else{
            if(comida == 3){
            alert('70g de queso blando tiene:'+ '\n' +
            'Proteina: 14g'+ '\n' +
            'Kilocalorias: 182')
            }else{
                if(comida == 4){
                    alert('6 huevos enteros tiene:'+ '\n' +
            'Proteina: 36g'+ '\n' +
            'Kilocalorias: 468')
                }else{
                    if(comida == 5){
                        alert('240g de cereales tiene:'+ '\n' +
                        'Proteina: 24g'+ '\n' +
                        'Kilocalorias: 768')
                    }else{
                        if(comida == 6){
                            alert('80g de legumbres tiene:'+ '\n' +
                            'Proteina: 16g'+ '\n' +
                            'Kilocalorias: 224')
                        }else{
                            if(comida == 7){
                                alert('127g de pan frances tiene:'+ '\n' +
                                'Proteina: 12g'+ '\n' +
                                'Kilocalorias: 336')
                            }else{
                                if(comida == 8){
                                    alert('30g de frutas secas tiene:'+ '\n'+
                                'Proteina: 5,4g'+ '\n' +
                                'Kilocalorias: 187,5')
                                }
                            }
                        }
                    }
                }
            }
        }
        
    }

    reintentar = prompt('Desea reintentar? Si / No')
    }while(reintentar == 'si');
    
    }
