import styled from 'styled-components';
import { RadioButtonGroup, RadioButton } from '@class101/ui';

export const AddressList = styled.div`
  margin: 0 auto;
  width: 30rem;
  margin-top: 10rem;
`;

export const HeadContainer = styled.div`
  margin: 0 auto;
`;

export const HeadTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem;
`;

export const HeadTitleEditBox = styled.div`
  display: flex;
  justify-content: right;
  padding: 1rem;
`;

export const AddressInfoContainer = styled.div`
  width: inherit;
  margin: 0 auto;
`;

export const StyledRadioButtonGroup = styled(RadioButtonGroup)`
  display: flex;
  width: inherit;
`;

export const StyledRadioButton = styled(RadioButton)``;

export const AddressInfoGroup = styled.div``;

export const AddressInfoBox = styled.div`
  margin-left: 1rem;
`;

export const AddressInfoUserName = styled.div`
  font-size: 1rem;
`;

export const AddressInfoDetail = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-size: 0.8rem;
`;

export const TextButtonBox = styled.div`
  display: flex;
  justify-self: right;
`;
