import styled from 'styled-components';
import { RadioButton, TextButton } from '@class101/ui';

export const AddressList = styled.div`
  width: 30rem;
  margin: 0 auto;
`;

export const AddressAddBox = styled.div`
  ${({ theme }) => theme.flexBox('right', undefined, undefined)}
  margin-bottom: 5rem;
`;

export const AddressListContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const StyledRadioButton = styled(RadioButton)`
  align-items: flex-start;
  &:nth-child(1) div {
    margin-top: -1px;
  }
`;

export const StyledRadioButtonBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
`;

export const StyledTextButton = styled(TextButton)`
  margin-left: 0.5rem;
  text-decoration-line: underline;
`;
