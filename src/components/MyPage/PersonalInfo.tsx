import React, { FC, useState } from 'react';
import { ButtonSize } from '@class101/ui';
import { StyledInput } from '../../Styles/common.style';
import * as S from './PersonalInfo.style';
import Modal from '../Modal/Modal';

const PersonalInfo: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAlert = (value: string) => {
    // console.log(value);
  };

  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <S.PersonalInfo>
      <S.Group>
        <S.PersonalInfoTitle>
          <S.Title>개인정보 관리</S.Title>
        </S.PersonalInfoTitle>
        <S.PersonalInfoBox>
          <S.InputBox>
            <S.StyledInput label="이름 *" placeholder="이솜이" />
            <S.StyledInput label="전화번호 *" placeholder="010-1234-5678" />
            <S.StyledInput label="아이디 *" placeholder="dlthadl2@naver.com" />
            <S.ButtonBox>
              <S.SaveButton>수정</S.SaveButton>
              <S.CancelButton>취소</S.CancelButton>
            </S.ButtonBox>
          </S.InputBox>
          <S.ShippingAdderssBox>
            <S.ShippingTitle>
              <S.AddressList>배송지 목록</S.AddressList>
              {/* {isOpen && (
                <Modal
                  opener={<div>클릭!</div>}
                  contents="장바구니에 담겼습니다"
                  successText="확인"
                />
              )} */}
              {isOpen && (
                <Modal
                  opener={<div>배송지 추가</div>}
                  contents={
                    <S.AddressEditContainer>
                      <S.EditTitle>배송지 추가(수정)</S.EditTitle>
                      <S.EditBox>
                        <StyledInput
                          margin="0 0 0.5rem 0"
                          label="배송지이름 *"
                          // errorMessage='배송지 이름을 입력해주세요.'
                        />
                        <StyledInput
                          margin="0 0 0.5rem 0"
                          label="수령인 *"
                          // errorMessage='수령인 이름을 입력해주세요.'
                        />
                        <StyledInput
                          margin="0 0 0.5rem 0"
                          label="휴대폰번호 *"
                          // errorMessage='휴대폰번호를 입력해주세요.'
                        />
                        <S.StyledControlGroup>
                          <StyledInput
                            margin="0 0 0.5rem 0"
                            disabled
                            label="우편번호"
                          />
                          <S.StyledButton size={ButtonSize.LARGE}>
                            주소검색
                          </S.StyledButton>
                        </S.StyledControlGroup>
                        <StyledInput
                          margin="0 0 0.5rem 0"
                          label="도로명주소 *"
                          // errorMessage='주소를 검색해주세요.'
                        />
                        <StyledInput
                          margin="0 0 0.5rem 0"
                          label="상세주소 *"
                          // errorMessage='상세주소를 입력해주세요.'
                        />
                      </S.EditBox>
                    </S.AddressEditContainer>
                  }
                  successText="저장"
                />
              )}
              <S.AddAddress onClick={showModal}>배송지 추가</S.AddAddress>
            </S.ShippingTitle>
            <S.ShippingAddressList>
              <S.StyledRadioButtonGroup
                stackingDirection="horizontal"
                showBorder={false}
                showDivider
                onChange={handleAlert}
              >
                <S.StyledRadioButton value="test">Option1</S.StyledRadioButton>
                <S.StyledRadioButton value="test2">Option2</S.StyledRadioButton>
              </S.StyledRadioButtonGroup>
            </S.ShippingAddressList>
          </S.ShippingAdderssBox>
        </S.PersonalInfoBox>
      </S.Group>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
