import styled from 'styled-components';
import {
  Input,
  Colors,
  Button,
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

export const PersonalInfoTitle = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 0;
`;

export const Title = styled.div``;

export const Detail = styled.div``;

export const PersonalInfoBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InputBox = styled.div`
  padding-right: 3rem;
`;

export const StyledInput = styled(Input)`
  width: 30rem;
  margin-bottom: 1rem;
  border-color: ${Colors.gray400};
  &:hover {
    border-color: ${Colors.gray600};
  }
  ::placeholder {
    /* display: flex;
    align-items: center; */
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
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
  padding-left: 3rem;
`;

export const ShippingTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AddressList = styled.div``;

export const AddAddress = styled.div`
  font-size: 0.8rem;
  cursor: pointer;
`;

export const ShippingAddressList = styled.div``;
export const StyledRadioButtonGroup = styled(RadioButtonGroup)``;
export const StyledRadioButton = styled(RadioButton)``;

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
