import styled from 'styled-components';
import { Input, Button, TextButton, Icon, Colors } from '@class101/ui';

interface Props {
  width?: string;
  margin?: string;
}

export const Login = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MainLogo = styled.h1`
  position: fixed;
  width: 13%;
  top: 0;
  left: 40px;

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const LoginContainer = styled.div`
  width: 30rem;
`;

export const StyledInput = styled(Input)<Props>`
  width: ${({ width }) => width};
  margin-bottom: 0.6rem;
  border-color: ${Colors.gray400};

  &:hover {
    border-color: ${Colors.gray600};
  }
`;

export const InputPasswordWrap = styled.div`
  position: relative;
`;

export const StyledEye = styled(Icon.Eye)`
  position: absolute;
  top: 0.8rem;
  right: 1rem;

  &:hover {
    color: ${Colors.gray600};
    cursor: pointer;
  }
`;

export const StyledButton = styled(Button)<Props>`
  display: flex;
  justify-content: center;
  margin-top: ${({ margin }) => margin};
  background: ${Colors.gray400};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: ${Colors.gray500};
    border-color: ${Colors.gray500};
  }
`;

export const TextButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledTextButton = styled(TextButton)<Props>`
  display: flex;
  justify-content: center;
  margin-top: ${({ margin }) => margin};
`;
