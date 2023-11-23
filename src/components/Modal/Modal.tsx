import { FC, useState, ChangeEvent } from 'react';
import * as S from './Modal.style';
import { AddressModalProps } from '../../types/components';
import { ButtonColor, CloseIcon, Headline3 } from '@class101/ui';
import { StyledButton } from '../../Styles/common.style';
import { theme } from '../../Styles/theme';

const Modal: FC<AddressModalProps> = ({
  opener,
  title,
  contents,
  successText,
  cancelText,
  modalWidth,
  onSuccess,
  onCancel
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [changeData, setChangeData] = useState<string>('');

  const handleModal = () => {
    setIsOpen(!isOpen);

    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const handleData = (event: ChangeEvent<HTMLInputElement>) => {
    setChangeData(event.target.value);
  };

  const onSave = (e: any) => {
    setChangeData('');
    handleData(e);
  };

  return (
    <>
      <div onClick={handleModal}>{opener}</div>
      {isOpen && (
        <S.CommLayer>
          <S.ModalContainer width={modalWidth}>
            {title && (
              <S.HeaderLayer>
                <Headline3>{title}</Headline3>
                <S.ModalDivider color="black" />
              </S.HeaderLayer>
            )}
            <S.StyledIconButton
              icon={<CloseIcon />}
              fillColor={theme.darkGray}
              color={ButtonColor.TRANSPARENT}
              onClick={handleModal}
            />
            {/*
              본문에 나올 컴포넌트 혹은 string을 contents에 넣어주시면 됩니다
             */}
            <S.BodyLayer>
              {typeof contents === 'string' && (
                <S.BodyText>{contents}</S.BodyText>
              )}
              {typeof contents !== 'string' && (
                <S.BodyContent>{contents}</S.BodyContent>
              )}
            </S.BodyLayer>
            <S.FooterLayer>
              {/* successText 정의 시 추가되는 버튼입니다.
                기본적으로 클릭시 모달이 닫히는 모션이 들어갑니다.
                onSuccess 정의 시 클릭 이벤트 변경이 가능합니다.
              */}
              {successText && (
                <StyledButton
                  type="button"
                  fill={true}
                  isMargin={false}
                  onClick={onSuccess === undefined ? handleModal : onSave}
                >
                  {successText}
                </StyledButton>
              )}
              {/* successText 정의 시 추가되는 버튼입니다.
                기본적으로 클릭시 모달이 닫히는 모션이 들어갑니다.
                onSuccess 정의 시 클릭 이벤트 변경이 가능합니다.
              */}
              {cancelText && (
                <StyledButton
                  type="button"
                  fill={true}
                  isMargin={false}
                  onClick={onCancel === undefined ? handleModal : onCancel}
                >
                  {cancelText}
                </StyledButton>
              )}
            </S.FooterLayer>
          </S.ModalContainer>
        </S.CommLayer>
      )}
    </>
  );
};

export default Modal;
