import React, { FC, useEffect, useState } from 'react';
import * as S from './PersonalInfo.style';
import { StyledInput } from '../../Styles/common.style';
import { AddressDataProps } from '../../types/components';
import AddressList from '../Address/AddressList';

const PersonalInfo: FC = title => {
  const [value, setValue] = useState('');
  const [addressData, setAddressData] = useState<AddressDataProps[]>([]);

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

  useEffect(() => {
    fetch('./data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

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
              disabled
              width="40rem"
              margin="0 0 1rem 0"
              // text-align="center"
            />
            <StyledInput
              label="전화번호 *"
              placeholder="010-1234-5678"
              onChange={onChange}
              disabled
              width="40rem"
              margin="0 0 1rem 0"
            />
            <StyledInput
              label="아이디 *"
              placeholder="dlthadl2@naver.com"
              onChange={onChange}
              disabled
              width="40rem"
              margin-bottom="1rem"
            />
            <S.ButtonBox>
              <S.SaveButton>수정</S.SaveButton>
              <S.CancelButton>취소</S.CancelButton>
            </S.ButtonBox>
          </S.InputBox>
          <S.ShippingAdderssBox>
            <AddressList showAddressTitle={true} showContents={true} />
          </S.ShippingAdderssBox>
        </S.PersonalInfoBox>
      </S.Group>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
