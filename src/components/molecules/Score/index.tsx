import { ContainerStore, ImagePlayer, Player, Players } from './styled';

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
          <h2>{scorePlayer}</h2>
        </Player>
        X
        <Player>
          <h2>FREEZA</h2>
          <h2>{scoreComputer}</h2>
        </Player>
      </Players>
    </ContainerStore>
  );
};

export default Score;
