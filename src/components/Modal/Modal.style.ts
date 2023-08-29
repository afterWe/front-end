import { Divider, IconButton } from '@class101/ui';
import { styled } from 'styled-components';
import { ModalSizeProps } from '../../types/components';

export const CommLayer = styled.div`
  position: fixed;
  inset: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.4);
  overflow-y: auto;
  z-index: 11000;
  overscroll-behavior-y: contain;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`;

export const ModalContainer = styled.div<ModalSizeProps>`
  position: relative;
  padding: 10px;
  width: ${props => props.width};
  min-width: 350px;
  border-radius: 10px;
  background-color: #fff;
  text-align: center;
  box-sizing: border-box;
`;

export const HeaderLayer = styled.div`
  margin: 20px 0 30px;
`;
export const ModalDivider = styled(Divider)`
  margin-top: 15px;
`;

export const StyledIconButton = styled(IconButton)`
  position: absolute;
  top: 7px;
  right: 5px;
`;

export const BodyLayer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-height: 540px;
  overflow-y: scroll;
  box-sizing: border-box;
`;

export const BodyText = styled.p`
  padding: 60px 0 35px;
  font-size: 1rem;
  line-height: 1.7;
  white-space: pre-line;
  word-break: break-all;
`;

export const BodyContent = styled.p`
  text-align: initial;
`;

export const FooterLayer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  background: ${({ theme }) => theme.lightGray};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.keyBlue};
  }
`;
