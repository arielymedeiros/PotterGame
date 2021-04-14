var etapa2 = prompt('O que Harry deve fazer a seguir? \n1 - Lançar o feitiço Lumos \n2 - Acender a lamparina')

function desafio2 (etapa2){
  if(etapa2 === '2'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>Harry tropeçou e derrubou a lamparina, atraindo a atenção para si. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa2==='1'){
    document.write(`
    <p>Você respondeu "Lançar o feitiço Lumos" e segue na tarefa de levar a poção polissuco ao Sirius.</br>
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