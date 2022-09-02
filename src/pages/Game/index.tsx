import { useState } from 'react';
import { Button, Input, Modal, Score, ScoreBoard } from '../../components';
import ActionsGame from '../../components/molecules/ActionsGame';
import { messages } from '../../__mocks__';
import { ContainerGame } from './styled';

const Game = () => {
  const [titleModal, setTitleModal] = useState(messages.rules.title);
  const [messageModal, setMessageModal] = useState(messages.rules.message);
  const [open, setOpen] = useState(false);
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
          setOpen(!open);
        }}
      />
      <ActionsGame onClick={(value: any) => handleClick(value)} />
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
function handleOpenModal(arg0: boolean) {
  throw new Error('Function not implemented.');
}
