import { ContainerStore, ImagePlayer, Player, Players, Vs } from './styled';

interface StoreProps {
  userName: string;
  scorePlayer: number;
  scoreComputer: number;
  image: any;
}

const Score = ({ userName, scorePlayer, scoreComputer, image }: StoreProps) => {
  userName = userName.length > 12 ? `${userName.slice(0, 12)} ...` : userName;
  return (
    <ContainerStore>
      <h1>PLACAR</h1>
      <Players>
        <ImagePlayer src={image} />
        <Player>
          <h2>{userName}</h2>
          <h1>{scorePlayer}</h1>
        </Player>
        <Vs>X</Vs>
        <Player>
          <h2>Freeza</h2>
          <h1>{scoreComputer}</h1>
        </Player>
      </Players>
    </ContainerStore>
  );
};

export default Score;
