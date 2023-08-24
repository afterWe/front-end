import React, { FC, useEffect, useState } from 'react';
import { Body2 } from '@class101/ui';
import { AddressDataProps, AddressTitleProps } from '../../types/components';
import Modal from '../Modal/Modal';
import RadioBtn from '../RadioBtn/RadioInput';
import AddressEdit from './AddressEdit';
import * as S from './AddressList.style';

const AddressList: FC<AddressTitleProps> = ({
  showAddressTitle,
  showContents
}) => {
  const [addressData, setAddressData] = useState<AddressDataProps[]>([]);

  useEffect(() => {
    fetch('/data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

  const handleRadioChange = (selectedValue: string) => {};

  console.log(addressData);

  return (
    <S.AddressList>
      {showAddressTitle ? (
        <S.AddressTitleBox>
          <Body2>배송지목록</Body2>
          <Modal
            opener={<S.StyledTextButton>배송지추가</S.StyledTextButton>}
            title="배송지 추가"
            contents={<AddressEdit data={false} showRecipient={true} />}
            successText="확인"
            cancelText="취소"
            modalWidth="30rem"
          />
        </S.AddressTitleBox>
      ) : (
        <S.AddressAddBox>
          <Modal
            opener={<S.StyledTextButton>배송지추가</S.StyledTextButton>}
            title="배송지 추가"
            contents={
              <AddressList showAddressTitle={true} showContents={true} />
            }
            successText="확인"
            cancelText="취소"
            modalWidth="30rem"
          />
        </S.AddressAddBox>
      )}
      {showContents ? (
        <S.AddressListContainer>
          {addressData.map(addressItem => (
            <S.StyledRadioBtn key={addressItem.id}>
              <RadioBtn
                value={addressItem.recipient || ''}
                name="address"
                contents={
                  <>
                    <S.StyledBody1>{addressItem.recipient}</S.StyledBody1>
                    <Body2 color="gray">
                      {addressItem.address} {addressItem.addressDetail}
                    </Body2>
                  </>
                }
                align="top"
                onChange={handleRadioChange}
                btnMargin="3px"
              />
              <div>
                <Modal
                  opener={<S.StyledTextButton>수정</S.StyledTextButton>}
                  title="배송지 추가"
                  contents={
                    <AddressEdit
                      addressData={addressItem}
                      data={true}
                      showRecipient={true}
                    />
                  }
                  successText="확인"
                  cancelText="취소"
                  modalWidth="30rem"
                />
                <S.StyledTextButton>삭제</S.StyledTextButton>
              </div>
            </S.StyledRadioBtn>
          ))}
        </S.AddressListContainer>
      ) : (
        <></>
      )}
    </S.AddressList>
  );
};

export default AddressList;
