import styled from 'styled-components';
import { Flex } from '../../../styles';

export const ContainerScoreBoard = styled(Flex)`
  width: 50%;
  justify-content: space-around;
  position: relative;
  img {
    position: absolute;
    right: -30%;
    margin-bottom: 100px;
    width: 300px;
    transition: 1s;
    animation: showfreeza 1.5s both;

    @keyframes showfreeza {
      from {
        opacity: 0;
        transform: translate3d(80%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
    @media (max-width: 769px) {
      width: 60px;
      padding-top: 10px;
      right: 10px;
    }
  }
  @media (max-width: 769px) {
    width: 100%;
    position: relative;
    right: 3px;
  }
`;
