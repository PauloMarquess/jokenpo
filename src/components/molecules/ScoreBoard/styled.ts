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
  }
`;
