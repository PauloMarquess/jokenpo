export const actions = [
  { label: '👊🏽', description: 'Rock', value: 1 },
  { label: '🖐🏽', description: 'Paper', value: 2 },
  { label: '✌🏽', description: 'Scissors', value: 3 },
];

export const valueTypeEnum: any = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

export const messages: any = {
  rules: {
    title: 'Regras',
    message:
      'Jo ken pô, é um jogo em que as pessoas jogam com as mãos, escolhendo entre pedra (mão fechada), papel (mão espalmada) e tesoura (dois dedos a frente). O jogo é similar ao "par ou ímpar", porém com uma variável a mais. E funciona assim: Cada jogador escolhe uma opção. A tesoura corta o papel, mas quebra com a pedra; o papel embrulha a pedra, mas é cortado pela tesoura e a pedra quebra a tesoura e é embrulhada pelo papel. O desafio aqui é vencer o computador 10 vezes! Faça a sua escolha e boa sorte!',
  },
  user: {
    title: 'Usuário',
    message: 'Preencha um nome para o jogador',
  },
  computerWin: {
    title: 'Que pena!',
    message:
      'Não foi dessa vez, mais tente novamente aposto que você consegue !',
  },
  playerWin: {
    title: 'Parabéns !',
    message: 'Voce venceu, quero ver ganhar de novo !',
  },
};
