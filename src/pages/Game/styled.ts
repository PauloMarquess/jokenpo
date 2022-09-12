import styled from 'styled-components';
import { Images } from '../../assets';
import { Flex } from '../../styles';

export const ContainerGame = styled(Flex)<object>`
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-image: url(${Images.background});
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;

  h1 {
    padding-top: 50px;
  }
`;
