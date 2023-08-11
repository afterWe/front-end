import styled from 'styled-components';
import { EyeOffIcon } from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';

export const SignIn = styled(PageContainer)`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  height: 100vh;
`;

export const MainLogo = styled.h1`
  margin-bottom: 2rem;
  text-align: center;

  img {
    width: 30%;
  }
`;

export const SignInContainer = styled.form`
  width: 30rem;
`;

export const InputButtonGroup = styled.form`
  ${({ theme }) => theme.flexBox('space-between', 'undefined', 'undefined')};
`;

export const InputEyeGroup = styled.span`
  ${({ theme }) =>
    theme.positionBox(
      'relative',
      'undefined',
      'undefined',
      'undefined',
      'undefined'
    )};
`;

export const StyledEye = styled(EyeOffIcon)`
  ${({ theme }) =>
    theme.positionBox('absolute', '0.7rem', '1rem', 'undefined', 'undefined')}
  z-index: 9;

  &:hover {
    cursor: pointer;
  }
`;
