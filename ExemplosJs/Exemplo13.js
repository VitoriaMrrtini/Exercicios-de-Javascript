const nomes = ["Ana", "Flavio", "Silvia", "Bruno"]; //Usuarios

const nomeProcurado = "Flavio"; //Usuario que queremos achar

if(nomes.incluses(nomeProcurado)){ //Uma forma mais simplificada de fazer o exemplo12
    console.log(`O nome ${nomeProcurado} está na lista`);
}else{
    console.log(`O nome ${nomeProcurado} não está na lista`);
}