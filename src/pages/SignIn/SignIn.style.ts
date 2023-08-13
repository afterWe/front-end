import styled from 'styled-components';
import { PageContainer } from '../../Styles/common.style';

export const SignIn = styled(PageContainer)`
  ${({ theme }) => theme.flexBox('center', 'center', 'column')};
  height: 100vh;
`;

export const MainLogo = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  img {
    width: 30%;
  }
`;

export const SignInContainer = styled.form`
  width: 30rem;
`;

export const InputButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)};
`;

export const InputEyeGroup = styled.span`
  ${({ theme }) =>
    theme.positionBox('relative', undefined, undefined, undefined, undefined)};
`;

export const StyledEye = styled.div`
  ${({ theme }) =>
    theme.positionBox('absolute', '0.5rem', '0.8rem', undefined, undefined)}
  z-index: 9;
`;
