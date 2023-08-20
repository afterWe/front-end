import React, { FC, useEffect, useState } from 'react';
import { AddIcon, Body1, Body2 } from '@class101/ui';
import { AddressDataProps, AddressTitleProps } from '../../types/components';
import Modal from '../Modal/Modal';
import RadioBtn from '../RadioBtn/RadioInput';
import AddressEdit from './AddressEdit';
import * as S from './AddressList.style';

const AddressList: FC<AddressTitleProps> = ({ showAddressTitle }) => {
  const [addressData, setAddressData] = useState<AddressDataProps[]>([]);

  useEffect(() => {
    fetch('/data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

  const handleRadioChange = (selectedValue: string) => {};

  return (
    <S.AddressList>
      {showAddressTitle ? (
        <S.AddressTitleBox>
          <Body1>배송지목록</Body1>
          <Modal
            opener={<S.StyledTextButton>배송지추가</S.StyledTextButton>}
            title="배송지 추가"
            contents={<AddressEdit showRecipient={true} />}
            successText="확인"
            cancelText="취소"
          />
        </S.AddressTitleBox>
      ) : (
        <S.AddressAddBox>
          <Modal
            opener={
              <S.StyledTextButton leftIcon={<AddIcon />}>
                배송지추가
              </S.StyledTextButton>
            }
            title="배송지 추가"
            contents={<AddressEdit showRecipient={true} />}
            successText="확인"
            cancelText="취소"
          />
        </S.AddressAddBox>
      )}
      <S.AddressListContainer>
        {addressData.map(({ id, name, addressDetail }) => (
          <S.StyledRadioBtn key={id}>
            <RadioBtn
              value={name}
              name="address"
              contents={
                <>
                  <Body1>{name}</Body1>
                  <Body2 color="gray">{addressDetail}</Body2>
                </>
              }
              align="top"
              onChange={handleRadioChange}
              btnMargin="3px"
            />
            <div>
              <S.StyledTextButton>수정</S.StyledTextButton>
              <S.StyledTextButton>삭제</S.StyledTextButton>
            </div>
          </S.StyledRadioBtn>
        ))}
      </S.AddressListContainer>
    </S.AddressList>
  );
};

export default AddressList;
