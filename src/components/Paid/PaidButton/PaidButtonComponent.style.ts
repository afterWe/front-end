import { styled } from 'styled-components';
import { Button, Colors } from '@class101/ui';

export const ButtonGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between')}
`;

export const OnClickButton = styled(Button)`
  width: 45%;
  margin-top: 8rem;
  background: ${Colors.gray300};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: ${Colors.gray500};
  }
`;
