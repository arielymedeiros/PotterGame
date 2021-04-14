var etapa1 = prompt('O que Rony deve fazer a seguir? \n1 - Revelar a missão para Neville \n2 - Despistar Neville')

function desafio1 (etapa1){
  if(etapa1 === '1'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>Neville teme pela expulsão dos amigos e os dedura. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa1 === '2'){
    document.write(`
    <p>Você respondeu "Despistar Neville" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
    Clique <a href="./descricaofase2.html">aqui</a> para continuar. </p>
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

desafio1(etapa1)