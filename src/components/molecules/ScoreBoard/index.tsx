import { ContainerScoreBoard } from './styled';

interface ScoreBoardProps {
  result: string;
  resultComputer: string;
  image: any;
}

const ScoreBoard = ({ result, resultComputer, image }: ScoreBoardProps) => {
  return (
    <ContainerScoreBoard>
      <h1>{result}</h1>
      <h1>{resultComputer}</h1>
      <img src={image} alt="freeza" />
    </ContainerScoreBoard>
  );
};

export default ScoreBoard;
