import styled from 'styled-components';
import { AddressEditWidthProps } from '../../types/components';
import { ControlGroup, Button } from '@class101/ui';

export const AddressEditContainer = styled.div<AddressEditWidthProps>`
  width: ${({ width }) => (width ? width : '100%')};
  margin-bottom: 3rem;
`;

export const StyledControlGroup = styled(ControlGroup)`
  width: 100%;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  margin-left: 5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`;
