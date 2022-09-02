import { ContainerScoreBoard } from './styled';

interface ScoreBoardProps {
  result: string;
  resultComputer: string;
}

const ScoreBoard = ({ result, resultComputer }: ScoreBoardProps) => {
  return (
    <ContainerScoreBoard>
      <h1>{result}</h1>
      <h1>{resultComputer}</h1>
    </ContainerScoreBoard>
  );
};

export default ScoreBoard;
