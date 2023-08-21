import React, { FC, useEffect, useState } from 'react';
import * as S from './PersonalInfo.style';
import Modal from '../Modal/Modal';
import AddressEdit from '../Address/AddressEdit';
import { StyledInput } from '../../Styles/common.style';
import { RadioButtonGroup, Body1, Body2 } from '@class101/ui';
// import AddressList from '../Address/AddressList';
import { Address } from '../../types/components';

const PersonalInfo: FC = title => {
  const [value, setValue] = useState('');
  const [addressData, setAddressData] = useState<Address[]>([]);

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

  useEffect(() => {
    fetch('./data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

  const handleAddressSelect = () => {};

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
              {/* <AddressList /> */}
              <S.AddressListContainer>
                <RadioButtonGroup
                  stackingDirection="vertical"
                  showBorder={false}
                  showDivider={false}
                  onChange={handleAddressSelect}
                >
                  {addressData.map(({ id, name, addressDetail }) => (
                    <S.StyledRadioButton key={id} value={name}>
                      <S.StyledRadioButtonBox>
                        <div>
                          <Body1>{name}</Body1>
                          <Body2 color="gray">{addressDetail}</Body2>
                        </div>
                        <span>
                          <S.StyledTextButton>수정</S.StyledTextButton>
                          <Modal
                            opener={
                              <S.StyledTextButton>삭제</S.StyledTextButton>
                            }
                            contents="삭제하시겠습니까?"
                          />
                        </span>
                      </S.StyledRadioButtonBox>
                    </S.StyledRadioButton>
                  ))}
                </RadioButtonGroup>
              </S.AddressListContainer>
            </S.ShippingAddressList>
          </S.ShippingAdderssBox>
        </S.PersonalInfoBox>
      </S.Group>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
