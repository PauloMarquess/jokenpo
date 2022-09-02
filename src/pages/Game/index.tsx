import { Button, Input, Score, ScoreBoard } from '../../components';
import ActionsGame from '../../components/molecules/ActionsGame';
import { ContainerGame } from './styled';

const Game = () => {
  const handleClick = (value: any) => {
    console.log(value);
  };
  return (
    <ContainerGame>
      <h1>JO KEN PÔ</h1>
      <Input placeholder="Digite o nome do jogador" />
      <Button
        children="Iniciar"
        onClick={() => {
          console.log('foi');
        }}
      />
      <Score userName="JOGADOR" scorePlayer={0} scoreComputer={0} />
      <ScoreBoard result="❓" resultComputer="❓" />
      <Button
        children="Iniciar Jogo"
        onClick={() => {
          console.log('foi');
        }}
      />
      <Button
        children="Regras"
        onClick={() => {
          console.log('foi');
        }}
      />
      <ActionsGame onClick={(value: any) => handleClick(value)} />
    </ContainerGame>
  );
};

export default Game;
