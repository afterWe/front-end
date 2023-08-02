import { styled } from 'styled-components';

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100%;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 60%;
  height: 20vh;
`;

export const InputPasswordWrap = styled.div`
  position: relative;
`;

export const IconGroup = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 20vh;
  width: 60%;
`;
