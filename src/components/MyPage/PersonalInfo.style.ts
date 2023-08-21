import styled from 'styled-components';
import {
  Colors,
  Button,
  TextButton,
  RadioButtonGroup,
  RadioButton,
  ControlGroup
} from '@class101/ui';

export const PersonalInfo = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 37rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PersonalInfoTitleWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 0;
`;

export const PersonalInfoTitle = styled.div`
  font-size: 1.25rem;
`;

export const Detail = styled.div``;

export const PersonalInfoBox = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const InputBox = styled.form`
  width: 100%;
  padding-right: 4rem;
  text-align: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 0.5rem;
  padding-top: 2rem;
`;

export const SaveButton = styled(Button)`
  width: 5rem;
  &:hover {
    background: ${Colors.gray400};
    border-color: ${Colors.gray400};
  }
`;

export const CancelButton = styled(Button)`
  width: 5rem;
  &:hover {
    background: ${Colors.gray400};
    border-color: ${Colors.gray400};
  }
`;

export const ShippingAdderssBox = styled.div`
  border-left: 1px solid #ccc;
  height: 400px;
  padding-left: 4rem;
`;

export const ShippingTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressList = styled.div``;

export const AddAddress = styled(TextButton)`
  font-size: 0.8rem;
  cursor: pointer;
`;

export const ShippingAddressList = styled.div``;

export const AddressEditContainer = styled.div`
  width: 80%;
  margin: 1.5rem auto;
`;

export const EditTitle = styled.div`
  border-bottom: 1px solid #ccc;
  padding-bottom: 1.5rem;
  font-size: 1.2rem;
`;

export const EditBox = styled.div`
  padding: 1rem 0;
`;

export const StyledControlGroup = styled(ControlGroup)`
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin: 0.5rem 5rem 0 5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const AddressEditWrap = styled.div`
  width: 80%;
  margin: 2rem auto;
`;

export const AddressListContainer = styled.div`
  width: 100%;
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
  span {
    display: flex;
    align-items: center;
  }
`;

export const StyledTextButton = styled(TextButton)`
  margin-left: 0.5rem;
  text-decoration-line: underline;
`;
