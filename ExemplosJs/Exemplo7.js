//Varias formas diferentes de fazer o mesmo resultado.
function somar(){ //O mais basico.
    const res = 2 + 2;
    console.log(res);
}

function somar2(num1, num2){ //Sem return.
    const res = num1 + num2;
    console.log(res);
}

function somar3(num1, num2){ //Possui return.
    const res = num1 + num2;
    return res;
}

const a = (num1, num2) => { //Anomimos.
    const res = num1 + num2;
    return res;
}

console.log(a(12, 12)); //O 12 representa o valor do num1 e num2, diferente de uma var eles podem ser alterados então não são predefinidos.