import styled from 'styled-components';
import { Flex } from '../../../styles';

export const ContainerStore = styled(Flex)<object>`
  flex-direction: column;
`;
export const Players = styled(Flex)<object>`
  width: 50%;
  justify-content: space-around;
  position: relative;
`;
export const Player = styled(Flex)<object>`
  flex-direction: column;
`;

export const ImagePlayer = styled.img`
  position: absolute;
  width: 300px;
  left: -30%;
  padding-top: 100px;
`;
