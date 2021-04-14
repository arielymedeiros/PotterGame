var etapa1 = prompt('O que Hermione deve fazer a seguir? \n1 - Lutar com o Livro Monstruoso dos Monstros \n2 - Fazer carinho no Livro Monstruoso dos Monstros')

function desafio1 (etapa1){
  if(etapa1 === '1'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>O Livro Monstruoso dos Monstros é muito barulhento quando fica irritado. </br> 
    Você foi descoberto e expulso de Hogwarts.</br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa1 === '2'){
    document.write(`
    <p>Você respondeu "Fazer carinho no Livro Monstruoso dos Monstros" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
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