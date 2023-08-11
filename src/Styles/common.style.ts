import styled from 'styled-components';
import { ControlGroup, Button, Input, Colors } from '@class101/ui';
import { StyledInputProps, StyledButtonProps } from '../types/components';
import { theme } from './theme';

export const StyledControlGroup = styled(ControlGroup)`
  align-items: center;
`;

export const StyledButton = styled(Button)<StyledButtonProps>`
  margin-top: ${({ isMargin }) => (isMargin ? '0.3rem ' : '0')};
  background: ${theme.gray};
  font-size: 1rem;
  font-weight: 500;

  &:hover {
    background: ${Colors.gray500};
    border-color: ${Colors.gray500};
  }
`;

export const StyledInput = styled(Input)<StyledInputProps>`
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  border-color: ${theme.gray};

  &:hover {
    border-color: ${theme.darkGray};
  }
`;

export const PageContainer = styled.main`
  width: 80%;
  margin: 0 auto;
`;
