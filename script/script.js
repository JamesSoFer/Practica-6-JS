//
//Practica 6
//

function max(numeros){
    let max = numeros[0];
    for(i=1;i<numeros.length;i++){
        if(numeros[i]> max);
            max=numeros[i];
    }
    return max;
}
const num1 = prompt('Ingrese un numero:');
const num2 = prompt('Ingrese un segundo numero');
const arreglo = [num1, num2];
console.log (max(arreglo))
