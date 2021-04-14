var etapa2 = prompt('O que Rony deve fazer a seguir? \n1 - Sair da estufa rapidamente \n2 - Replantar a mandrágora')

function desafio2 (etapa2){
  if(etapa2 === '2'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>Replantar mandrágoras leva tempo e elas gritam durante todo o processo. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa2 ==='1') {
    document.write(`
    <p>Você respondeu "Sair da estufa rapidamente" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
    Clique <a href="./descricaofase3.html">aqui</a> para continuar. </p>
    `)
  }
  else{
    document.write(`
    <p>Comando inválido. </br>
    Digite uma opção válida. </br>
    <a href="./descricaofase1.html"> Voltar </a> </p>
    `)
  }

}

desafio2(etapa2)