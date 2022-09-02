import { useEffect, useState } from 'react';
import { Button, Input, Modal, Score, ScoreBoard } from '../../components';
import ActionsGame from '../../components/molecules/ActionsGame';
import { actions, messages, valueTypeEnum } from '../../__mocks__';
import { ContainerGame } from './styled';

const Game = () => {
  const [titleModal, setTitleModal] = useState('');
  const [messageModal, setMessageModal] = useState('');
  const [open, setOpen] = useState(false);
  const [userName, setUserName] = useState('JOGADOR');
  const [playGame, setPlayGame] = useState(false);
  const [scorePlayerValue, setScorePlayerValue] = useState(0);
  const [scoreComputerValue, setScoreComputerValue] = useState(0);
  const [userAction, setUserAction] = useState('❓');
  const [computerAction, setComputerAction] = useState('❓');
  const [textGame, setTextGame] = useState('Iniciar Jogo');
  const SCORE_TO_WIN = 10;

  const handleModal = (type: any) => {
    if (!type) {
      setOpen(false);
      setTitleModal('');
      setMessageModal('');
      return;
    }
    setTitleModal(messages?.[type]?.title);
    setTitleModal(messages?.[type]?.message);
    setOpen(true);
  };

  const randomActionComputer = () => {
    const number = Math.floor(Math.random() * actions.length);
    return actions[number];
  };

  const handleClick = (value: any) => {
    setUserAction(value.label);
    const actionComputer = randomActionComputer();
    setComputerAction(actionComputer.label);
    checkWinner(value.value, actionComputer.value);
  };

  const handleUserName = (value: any) => {
    if (!value) return setUserName('JOGADOR');
    setUserName(value);
  };

  const checkWinner = (playerValue, computerValue) => {
    const playerRockWin =
      playerValue === valueTypeEnum.ROCK &&
      computerValue === valueTypeEnum.SCISSORS;
    const playerPaperWin =
      playerValue === valueTypeEnum.PAPER &&
      computerValue === valueTypeEnum.ROCK;
    const playerScissorsWin =
      playerValue === valueTypeEnum.SCISSORS &&
      computerValue === valueTypeEnum.PAPER;
    const drawerResult = playerValue === computerValue;
    const playerWin = playerRockWin || playerPaperWin || playerScissorsWin;

    if (drawerResult) return setTextGame('Empate jogue novamente !');

    if (playerWin) {
      setScorePlayerValue((state) => state + 1);
      return setTextGame('Vitória jogue novamente !');
    }
    setScoreComputerValue((state) => state + 1);
    return setTextGame('Derrota jogue novamente !');
  };

  const startGame = () => {
    if (userName === 'JOGADOR') {
      handleModal('user');
      return;
    }
    if (playGame) return resetValues();
    setPlayGame(true);
  };

  const resetValues = () => {
    setTextGame('Iniciar jogo !');
    setPlayGame(false);
    setScorePlayerValue(0);
    setScoreComputerValue(0);
    setUserAction('❓');
    setComputerAction('❓');
  };

  useEffect(() => {
    const checkVictory = () => {
      const playerWin = scorePlayerValue === SCORE_TO_WIN;
      const computerWin = scoreComputerValue === SCORE_TO_WIN;
      if (playerWin) return handleModal('playerWin');
      if (computerWin) return handleModal('computerWin');
    };
    checkVictory();
  }, [scorePlayerValue, scoreComputerValue]);
  return (
    <ContainerGame>
      <h1>JO KEN PÔ</h1>
      <Input
        placeholder="Digite o nome do jogador"
        onChange={(e: any) => {
          handleUserName(e.target.value);
        }}
      />
      <Button
        children={playGame ? 'Reiniciar jogo !' : 'Iniciar'}
        onClick={startGame}
      />
      <Score
        userName={userName}
        scorePlayer={scorePlayerValue}
        scoreComputer={scoreComputerValue}
      />
      <ScoreBoard result={userAction} resultComputer={computerAction} />
      <Button
        children={textGame}
        onClick={() => {
          startGame();
        }}
      />
      <Button
        children="Regras"
        onClick={() => {
          handleModal('rules');
        }}
      />
      <div
        style={{
          display: `${
            scorePlayerValue >= 10 || scoreComputerValue >= 10 ? 'none' : 'flex'
          }`,
        }}
      >
        <ActionsGame
          disabled={!playGame}
          onClick={(value: any) => handleClick(value)}
        />
      </div>

      <Modal
        open={open}
        titleModal={titleModal}
        messageModal={messageModal}
        handleOpenModal={() => setOpen(false)}
      />
    </ContainerGame>
  );
};

export default Game;
