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

export const InputPasswordWrap = styled.div``;
