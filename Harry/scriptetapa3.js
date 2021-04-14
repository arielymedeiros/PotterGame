var etapa3 = prompt('O que Harry deve fazer a seguir? \n1 - Voar na vassoura até o topo da torre \n2 - Lançar o feitiço Wingardium Leviosa para levitar o frasco até Sirius')

function desafio3 (etapa3){
  if(etapa3 === '2'){
    document.write(`
    <h1>GAME OVER. </h1></br>
    <p>Harry não consegue manter o feitiço tempo suficiente para chegar ao topo da torre. </br> 
    Você foi descoberto e expulso de Hogwarts</br>
    <a href= "../index.html">Voltar ao início</a></p>
    `)
  }
  else if(etapa3 === '1'){
    document.write(`
    <p>PARABÉNS!</br>
    Você respondeu "Voar na vassoura até o topo da torre" e completou a missão!</br>
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