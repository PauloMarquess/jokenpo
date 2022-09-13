import styled from 'styled-components';

export const ContainerButton = styled.div`
  button {
    width: 250px;
    border: none;
    border-radius: 4px;
    height: 42px;
    font-size: 16px;
    background-color: #341a49f0;
    color: #fff;
    transition: 0.5;
    :hover {
      background-color: #341a49a6;
      border: solid 2px #341a49f0;
    }
  }
  #defeat {
    background: #f20808;
    border: solid 2px #f20808;
  }
  #victory {
    background: #0bb10b;
    border: solid 2px #0bb10b;
  }
  #draw {
    background: #272727;
    border: solid 2px #272727;
  }
`;
