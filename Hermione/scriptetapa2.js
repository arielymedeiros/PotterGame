var etapa2 = prompt('O que Hermione deve fazer a seguir? \n1 - Correr \n2 - Riddikulus')

function desafio2 (etapa2){
  if(etapa2 === '2'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>A magia de Hermione atraiu muita atenção. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if (etapa2 === '1') {
    document.write(`
    <p>Você respondeu "Correr" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
    Clique <a href="./descricaofase3.html">aqui</a> para continuar. </p>
    `)
  }
  else{
    document.write(`
    <p>Comando inválido. </br>
    Digite uma opção válida. </br>
    <a href="./descricaofase2.html"> Voltar </a> </p>
    `)
  }

}

desafio2(etapa2)