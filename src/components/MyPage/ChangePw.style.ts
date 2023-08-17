import styled from 'styled-components';
import { Input, Colors, Button } from '@class101/ui';

interface Props {
  width?: string;
  margin?: string;
}

export const ChangePw = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 37rem;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChangePwTitleWrap = styled.div`
  display: flex;
  width: 100%;
  padding: 2.5rem 0;
`;

export const ChangePwTitle = styled.div`
  font-size: 1.25rem;
`;

export const ChangePwBox = styled.form`
  padding-top: 2rem;
`;

export const StyledInput = styled(Input)<Props>`
  width: 20rem;
  margin-bottom: 0.6rem;
  border-color: ${Colors.gray400};

  &:hover {
    border-color: ${Colors.gray600};
  }
`;

export const InputPasswordWrap = styled.div``;

export const StyledButton = styled(Button)<Props>`
  display: flex;
  justify-content: center;
  margin-top: ${({ margin }) => margin};
  background: ${Colors.gray400};
  font-weight: 500;
  font-size: 14px;

  &:hover {
    background: ${Colors.gray500};
    border-color: ${Colors.gray500};
  }
`;
