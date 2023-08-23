import { styled } from 'styled-components';
import {
  RadioBtnLabelProps,
  StyledRadioBtnProps
} from '../../types/components';

export const RadioBtnLabel = styled.label<RadioBtnLabelProps>`
  display: flex;
  width: 20rem;
  align-items: ${({ align }) => (align === 'top' ? 'top' : 'center')};
  margin-bottom: 20px;
`;

export const StyledRadioBtn = styled.input<StyledRadioBtnProps>`
  appearance: none;
  margin-top: ${({ btnMargin }) =>
    btnMargin === undefined ? '-1px' : btnMargin};
  margin-right: 10px;
  width: 1.25em;
  height: 1.25em;
  border: ${({ theme }) => `1px solid ${theme.darkGray}`};
  border-radius: 50%;

  &:checked {
    border: ${({ theme }) => `4px solid ${theme.darkGray}`};
  }

  &:focus-visible {
    outline-offset: max(2px, 0.1em);
    outline: ${({ theme }) => `max(2px, 0.1em) dotted  ${theme.darkGray}`};
  }
`;

export const RadioBtnTxt = styled.span`
  vertical-align: middle;
`;
