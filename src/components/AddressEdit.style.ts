import styled from 'styled-components';
import { Input, Colors, ControlGroup, Button, Divider } from '@class101/ui';

export const AddressEdit = styled.div`
  margin-top: 10rem;
  width: 100%;
`;

export const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeadTitle = styled.h3`
  font-size: 2rem;
  margin: 0 auto;
`;

export const StyledDivider = styled(Divider)`
  padding: 2rem 0rem;
`;

export const InputContainer = styled.div``;

export const StyledInput = styled(Input)`
  margin-bottom: 0.6rem;
  border-color: ${Colors.gray400};
  &:hover {
    border-color: ${Colors.gray600};
  }
`;

export const StyledControlGroup = styled(ControlGroup)`
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin: 0.3rem 5rem 0rem 5rem;
  font-size: 1rem;
  font-weight: 500;
`;
