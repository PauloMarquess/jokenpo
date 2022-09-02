import { Button, Input } from '../../components';
import { ContainerGame } from './styled';

const Game = () => {
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
    </ContainerGame>
  );
};

export default Game;
