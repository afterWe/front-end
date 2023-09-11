import styled from 'styled-components';
import { TextButton, EyeOffIcon } from '@class101/ui';

export const Login = styled.div`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  width: 100%;
  height: 100vh;
`;

export const MainLogo = styled.h1`
  margin-bottom: 2rem;
  text-align: center;

  img {
    width: 30%;
  }
`;

export const LoginContainer = styled.div`
  width: 30rem;
`;

export const Onsubmit = styled.form``;

export const InputPasswordWrap = styled.div`
  ${({ theme }) => theme.positionBox('relative')};
`;

export const StyledEye = styled(EyeOffIcon)`
  ${({ theme }) => theme.positionBox('absolute', '0.8rem', '0.8rem')}

  &:hover {
    cursor: pointer;
  }
`;

export const TextButtonBox = styled.div`
  ${({ theme }) => theme.flexBox('center')}
`;

export const StyledTextButton = styled(TextButton)`
  margin-top: 1rem;
`;
