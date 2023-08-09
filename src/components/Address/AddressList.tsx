import React, { FC, useEffect, useState } from 'react';
import { RadioButtonGroup, AddIcon, Body1, Body2 } from '@class101/ui';
import * as S from './AddressList.style';

interface Address {
  id: number;
  name: string;
  addressDetail: string;
}

const AddressList: FC = () => {
  const [addressData, setAddressData] = useState<Address[]>([]);

  useEffect(() => {
    fetch('./data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

  const handleAddressSelect = () => {};

  return (
    <S.AddressList>
      <S.AddressAddBox>
        <S.StyledTextButton leftIcon={<AddIcon />}>
          배송지추가
        </S.StyledTextButton>
      </S.AddressAddBox>
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
                <div>
                  <S.StyledTextButton>수정</S.StyledTextButton>
                  <S.StyledTextButton>삭제</S.StyledTextButton>
                </div>
              </S.StyledRadioButtonBox>
            </S.StyledRadioButton>
          ))}
        </RadioButtonGroup>
      </S.AddressListContainer>
    </S.AddressList>
  );
};

export default AddressList;
