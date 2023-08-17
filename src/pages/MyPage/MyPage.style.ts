import styled from 'styled-components';
import { Button, Colors } from '@class101/ui';
import { StyledTabBtnProps } from '../../types/components';

export const MyPage = styled.main`
  margin: 0 auto;
`;
export const TitleContainer = styled.div``;

export const MyPageTitle = styled.h2`
  font-size: 1.9rem;
  display: flex;
  justify-content: center;
`;

export const TabContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #333;
  width: 100%;
  padding-top: 1rem;
`;

export const StyledButton = styled(Button)`
  width: 6rem;
`;

export const StyledTabBtn = styled(Button)<StyledTabBtnProps>`
  background-color: ${props => (props.active ? '#333' : Colors.white)};
  color: ${props => (props.active ? Colors.white : '#333')};
  border: ${props => (props.active ? 'none' : `1px solid #333`)};
  border-bottom: none;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;

  &:hover {
    background-color: ${props => (props.active ? '#333' : Colors.gray200)};
    color: ${props => (props.active ? Colors.white : '#333')};
  }
`;
