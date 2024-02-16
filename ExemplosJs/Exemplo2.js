var a = 1;

if(true){
    //Variavel let esta sendo declarada dentro do bloco "if" e devera ser usada.
    let b = 2; 
}

//neste ponto dara em erro referencia, pois a variavel b foi declaradacomo let.
console.log(a);
console.log(b);