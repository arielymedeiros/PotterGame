var etapa3 = prompt('O que Hermione deve fazer a seguir? \n1 - Usar o Vira-Tempo para voltar no tempo \n2 - Lançar o feitiço Alohomora para destrancar a porta')

function desafio3 (etapa3){
  if(etapa3 === '1'){
    document.write(`
    <h1>GAME OVER. </h1></br>
    <p>Hermione encontrou ela mesma no caminho e bagunçou a linha do tempo. </br> 
    Você foi descoberto e expulso de Hogwarts.</br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if (etapa3 === '2'){
    document.write(`
    <p>PARABÉNS!</br>
    Você respondeu "Lançar o feitiço Alohomora para destrancar a porta" e completou a missão!</br>
    <a href="../index.html"><button> Jogar Novamente </button> </a> 
    </p>
    `)
  }
  else{
    document.write(`
    <p>Comando inválido. </br>
    Digite uma opção válida. </br>
    <a href="./descricaofase3.html"> Voltar </a> </p>
    `)
  }

}

desafio3(etapa3)