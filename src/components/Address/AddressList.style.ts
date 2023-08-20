import styled from 'styled-components';
import { TextButton } from '@class101/ui';

export const AddressList = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'center', 'column')}
`;

export const AddressAddBox = styled.div`
  ${({ theme }) => theme.flexBox('right', undefined, undefined)}
  width: 80%;
  margin-bottom: 2rem;
`;

export const StyledTextButton = styled(TextButton)`
  margin-left: 0.5rem;
  text-decoration-line: underline;
`;

export const AddressTitleBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
  width: 80%;
  margin-bottom: 2rem;
`;

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const StyledRadioBtn = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'baseline', undefined)}
`;
