var usuario, senha; //A variavel ainda esta para definir

usuario = "Vitoria"; //Nosso usuario aceito
senha = "26112006"; //Senha do Usuario

if(usuario === "Vitoria" && senha === "26112006"){ //Aqui será onde vai acontecer a verificação das credenciais o "&&" esta fazendo a função de verificar se ambas estão corretas.
    console.log("Login Efetuado com sucesso!") //Nossa mensagem caso esriver errado.
}else{ //se o if estiver errado, o else faz o papel de retornar para outra função desejada.
    console.log("Usuário ou Senha Inválido!") //Mensagem de erro.
}