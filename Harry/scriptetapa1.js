var etapa1 = prompt('O que Harry deve fazer a seguir? \n1 - Se esconder atrás da cortina \n2 - Usar a capa da invisibilidade')

function desafio1 (etapa1){
  if(etapa1 === '1'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>Os pés de Harry ficaram para fora da cortina. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa1 === '2'){
    document.write(`
    <p>Você respondeu "Usar capa da invisbilidade" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
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