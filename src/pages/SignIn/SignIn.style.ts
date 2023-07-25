import styled from 'styled-components';
import { Input, Button, Icon, Colors } from '@class101/ui';

interface Props {
  width?: string;
  margin?: string;
}

export const SignIn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const SignInContainer = styled.form`
  width: 30rem;
`;

export const MainLogo = styled.h1`
  position: fixed;
  top: 0;
  left: 40px;
  width: 13%;

  img {
    width: 100%;
  }
`;

export const StyledInput = styled(Input)<Props>`
  width: ${({ width }) => width};
  margin-bottom: 0.4rem;
  border-color: ${Colors.gray400};

  &:hover {
    border-color: ${Colors.gray600};
  }
`;

export const InputButtonGroup = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const InputEyeGroup = styled.span`
  position: relative;
`;

export const StyledEye = styled(Icon.Eye)`
  position: absolute;
  top: 0.7rem;
  right: 1rem;
  z-index: 9;

  &:hover {
    cursor: pointer;
  }
`;

export const StyledButton = styled(Button)<Props>`
  margin-top: ${({ margin }) => margin};
  background: ${Colors.gray400};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: ${Colors.gray500};
    border-color: ${Colors.gray500};
  }
`;
