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

  return (
    <S.AddressList>
      {showAddressTitle ? (
        <S.AddressTitleBox>
          <Body2>배송지목록</Body2>
          <Modal
            opener={<S.StyledTextButton>배송지추가</S.StyledTextButton>}
            title="배송지 추가"
            contents={<AddressEdit showRecipient={true} />}
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
          {addressData.map(({ id, name, addressDetail }) => (
            <S.StyledRadioBtn key={id}>
              <RadioBtn
                value={name}
                name="address"
                contents={
                  <>
                    <S.StyledBody1>{name}</S.StyledBody1>
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
      ) : (
        <></>
      )}
    </S.AddressList>
  );
};

export default AddressList;
