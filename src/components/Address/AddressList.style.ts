import styled from 'styled-components';
import { TextButton, Body1 } from '@class101/ui';

export const AddressList = styled.div`
  width: 100%;
  ${({ theme }) => theme.flexBox('space-between', 'center', 'column')}
`;

export const AddressAddBox = styled.div`
  ${({ theme }) => theme.flexBox('right', undefined, undefined)}
  width: 100%;
`;

export const StyledTextButton = styled(TextButton)`
  margin-left: 0.5rem;
  text-decoration-line: underline;
`;

export const AddressTitleBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
  width: 100%;
`;

export const AddressListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
`;

export const StyledRadioBtn = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'baseline', undefined)}
`;

export const StyledBody1 = styled(Body1)`
  text-align: left;
`;
