import React, { FC, useState } from 'react';
import * as S from './PersonalInfo.style';
import Modal from '../Modal/Modal';
import AddressEdit from '../Address/AddressEdit';
import { StyledInput } from '../../Styles/common.style';

const PersonalInfo: FC = title => {
  const [value, setValue] = useState('');

  const handleAlert = (value: string) => {
    // console.log(value);
  };

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setValue(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(value);
  };

  return (
    <S.PersonalInfo>
      <S.Group>
        <S.PersonalInfoTitleWrap>
          <S.PersonalInfoTitle>개인정보 관리</S.PersonalInfoTitle>
        </S.PersonalInfoTitleWrap>
        <S.PersonalInfoBox>
          <S.InputBox onSubmit={handleSubmit}>
            <StyledInput
              label="이름 *"
              placeholder="이솜이"
              onChange={onChange}
              width="40rem"
              margin="0 0 1rem 0"
            />
            <StyledInput
              label="전화번호 *"
              placeholder="010-1234-5678"
              onChange={onChange}
              width="40rem"
              margin="0 0 1rem 0"
            />
            <StyledInput
              label="아이디 *"
              placeholder="dlthadl2@naver.com"
              onChange={onChange}
              width="40rem"
              margin-bottom="1rem"
            />
            <S.ButtonBox>
              <S.SaveButton>수정</S.SaveButton>
              <S.CancelButton>취소</S.CancelButton>
            </S.ButtonBox>
          </S.InputBox>
          <S.ShippingAdderssBox>
            <S.ShippingTitle>
              <S.AddressList>배송지 목록</S.AddressList>
              <Modal
                opener={<S.AddAddress>배송지 추가</S.AddAddress>}
                contents={<AddressEdit showRecipient={false} />}
                title="배송지 추가(수정)"
                successText="저장"
              />
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
