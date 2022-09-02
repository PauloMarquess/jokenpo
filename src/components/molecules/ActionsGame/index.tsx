import { actions } from '../../../__mocks__';
import { ButtonAction, ContainerActionsGame } from './styled';

interface ActionsGameProps {
  disabled?: boolean;
  onClick: any;
}

const ActionsGame = ({ disabled, onClick }: ActionsGameProps) => {
  return (
    <ContainerActionsGame>
      {actions.map((action) => (
        <ButtonAction
          onClick={() => onClick(action)}
          disabled={disabled}
          key={action.value}
        >
          {action.label}
        </ButtonAction>
      ))}
    </ContainerActionsGame>
  );
};

export default ActionsGame;
