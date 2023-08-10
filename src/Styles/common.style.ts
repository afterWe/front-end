import styled from 'styled-components';
import { ControlGroup, Button, Input, Colors } from '@class101/ui';
import { StyledInputProps, StyledButtonProps } from '../types/components';

export const StyledControlGroup = styled(ControlGroup)`
  align-items: center;
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  margin-top: ${({ isMargin }) => (isMargin ? '0.3rem ' : '0')};
  font-size: 1rem;
  font-weight: 500;
`;

export const StyledInput = styled(Input)<StyledInputProps>`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  border-color: ${Colors.gray400};

  &:hover {
    border-color: ${Colors.gray600};
  }
`;

export const PageContainer = styled.main`
  width: 80%;
  margin: 0 auto;
`;
