import React, { FC } from 'react';
import * as S from './PersonalInfo.style';

const PersonalInfo: FC = () => {
  const handleAlert = (value: string) => {
    console.log(value);
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
              <S.StyledButton>수정</S.StyledButton>
              <S.StyledButton>취소</S.StyledButton>
            </S.ButtonBox>
          </S.InputBox>
          <S.ShippingAdderssBox>
            <S.ShippingTitle>
              <S.AddressList>배송지 목록</S.AddressList>
              <S.AddAddress>배송지 추가</S.AddAddress>
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
