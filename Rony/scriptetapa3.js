var etapa3 = prompt('O que Rony deve fazer a seguir? \n1 - Pegar o carro voador que permanece vagando por Hogwarts \n2 - Voar no Bicuço')

function desafio3 (etapa3){
  if(etapa3 === '1'){
    document.write(`
    <h1>GAME OVER. </h1></br> 
    <p>O carro não funciona como o esperado e bate no Salgueiro Lutador novamente. </br> 
    Você foi descoberto e expulso de Hogwarts. </br>
    <a href= "../index.html">Voltar ao início </a></p>
    `)
  }
  else if(etapa3 === '2') {
    document.write(`
    <p>PARABÉNS!</br>
    Você respondeu "Voar no Bicuço" e completou a missão!</br>
    <a href="../index.html"><button> Jogar Novamente </button> </a> 
    </p>
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

desafio3(etapa3)