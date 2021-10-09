// comece a criar a sua função add na linha abaixo
function add(n1,n2){
    return n1+n2
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply(n1,n2){
    let resultado = 0
    for(let i = 0; i < n2; i++){
        resultado = add(n1,resultado)
    } 
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// comece a criar a sua função power na linha abaixo
function power(x,n){
    let resultado = 1
    for(let i = 0; i < n; i++){
        resultado = multiply(x,resultado)
    }
    return resultado
}


// descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial (n){
    let resultado = 1
    for(let i = 0; i < n; i++){
        resultado = multiply((n-i),resultado)
    }
    return resultado
} 

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci
function fibonacci(n) {
    let temp1 = 0
    let temp2 = 1
    let resultado = 0

    if(n < 2){
        return n 
    }
    for(let i = 2; i <= n; i++){
        resultado = add (temp1,temp2)

        resultado = add(temp2,temp1)
        temp1 = temp2
        temp2 = resultado
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');
