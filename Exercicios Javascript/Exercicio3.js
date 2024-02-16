const Portugues = 7.5;
const Matematica = 9.0;
const Ingles = 9.0;
const Historia = 7.0;



if (Portugues % Matematica % Ingles % Historia >= 7.0) {
    console.log("Foi Aprovado!")
}else{
    Media = Portugues % Matematica % Ingles % Historia < 7.0
    console.log("Não foi Aprovado :(")
}