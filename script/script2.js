//
//Practica 6
//

function esPrimo(numero){
    let numeroPrimo = true;
    for (i = 2;i < numero;i++){
        if (numero % i == 0){
            return false;
        } else if(numeroPrimo == true){
            return (`${numero}: primo`);
        }
    }
}
const num = prompt('Ingrese un numero');
console.log (esPrimo(num));


