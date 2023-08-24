import styled from 'styled-components';
import { AddressEditWidthProps } from '../../types/components';
import { ControlGroup, Button } from '@class101/ui';

export const AddressEditContainer = styled.div<AddressEditWidthProps>`
  width: ${({ width }) => (width ? width : '100%')};
  margin-bottom: 3rem;
  position: relative;
`;

export const StyledControlGroup = styled(ControlGroup)`
  width: 100%;
  align-items: center;
`;

export const StyledCheckBox = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

export const StyledBox = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledButton = styled(Button)`
  width: 8rem;
  margin: 0.5rem 0 0 3rem;
  border-radius: 0.3rem;
  font-size: 1rem;
  font-weight: 500;
`;
