import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    text-decoration: none;
    list-style: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;

    a {
    text-decoration: none;
  }
  li {
    list-style: none;
  }
  body {
   
    -webkit-font-smoothing: antialiased;
  }
  body,input,button,textarea{
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
}
`;
interface FlexProps {
  align?: string;
  justify?: string;
  direction?: string;
  gap?: string;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  width: 100%;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'center'};
  flex-direction: ${(props) => props.direction || 'row'};
  gap: ${(props) => props.gap || '16px'};
`;
