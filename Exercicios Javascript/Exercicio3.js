var nota1 = 9.8,
    nota2 = 9.5,
    nota3 = 8.7,
    nota4 = 9.5,
    media = 0;

media = (nota1+nota2+nota3+nota4)/4;

media = media.toFixed(1);
if(media >= 7.0){
    console.log("Aprovado com sucesso!")
    console.log('Sua media = ' + media);
}else{
    console.log("Reprovado!")
    console.log('Sua media = ' + media);
}