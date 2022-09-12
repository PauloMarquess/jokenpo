import styled from 'styled-components';
import { Flex } from '../../../styles';

export const ContainerStore = styled(Flex)<object>`
  flex-direction: column;
`;
export const Players = styled(Flex)<object>`
  width: 48%;
  justify-content: space-around;
  position: relative;
`;
export const Player = styled(Flex)<object>`
  flex-direction: column;
  text-transform: uppercase;
`;

export const ImagePlayer = styled.img`
  position: absolute;
  width: 300px;
  left: -30%;
  padding-top: 100px;
  transition: 1s;
  animation: show 1.5s both;

  @keyframes show {
    from {
      opacity: 0;
      transform: translate3d(-80%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const Vs = styled.span`
  font-size: 30px;
`;
