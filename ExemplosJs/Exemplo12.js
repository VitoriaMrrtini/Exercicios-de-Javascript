const nomes =["Ana", "Flavio", "Silvia", "Bruno"]; //Lista com os convidados por exemplo.

const nomeProcurado = "Silvia"; //O nome que sera procurado na lista
var encontrado = false;

for(i = 0; i < nomes.length; i++){ //O indice vai procurar até achar o nome
    if(nomeProcurado === nomes[i]){ //Verificação da credencial
        encontrado = true; 
        break; //Será feito uma unica tentativa para achar o nome sem percorrer toda a constante nomes.
    }
}

if(encontrado){
    console.log(`O nome ${nomeProcurado} está na lista`); //O nome será validado
}else{
    console.log(`O nome ${nomeProcurado} não está na lista`); //Erro
}