import { Colors, Button } from '@class101/ui';
import { styled } from 'styled-components';
import { PageContainer } from '../../Styles/common.style';
import { Divider } from '@class101/ui';

export const Paid = styled(PageContainer)`
  box-sizing: border-box;
  ${({ theme }) => theme.flexBox('', '', 'column')}
`;

export const TitleContainer = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'column')}
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 2rem;
`;

export const BorderLine = styled(Divider)`
  margin: 2.5rem 0;
`;

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between', '', '')}
  margin-top: 5rem;
`;

export const OnClickButton = styled(Button)`
  width: 40%;
  height: 4rem;
  background: ${Colors.black};
  font-weight: 500;
  font-size: 16px;
  color: ${Colors.white};
  border-radius: 2rem;

  &:hover {
    background: ${({ theme }) => theme.darkGray};
  }
`;
