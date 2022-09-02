import { ContainerStore, Player, Players } from './styled';

interface StoreProps {
  userName: string;
  scorePlayer: number;
  scoreComputer: number;
}

const Score = ({ userName, scorePlayer, scoreComputer }: StoreProps) => {
  userName = userName.length > 12 ? `${userName.slice(0, 12)} ...` : userName;
  return (
    <ContainerStore>
      <h1>PLACAR</h1>
      <Players>
        <Player>
          <h2>{userName}</h2>
          <h2>{scorePlayer}</h2>
        </Player>
        X
        <Player>
          <h2>COMPUTADOR</h2>
          <h2>{scoreComputer}</h2>
        </Player>
      </Players>
    </ContainerStore>
  );
};

export default Score;
