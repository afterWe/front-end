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
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedAddrId, setSelectedAddrId] = useState<string | null>(null);

  useEffect(() => {
    fetch('/data/addressList.json')
      .then(res => res.json())
      .then(data => {
        setAddressData(data);
      });
  }, []);

  const handleRadioChange = (selectedValue: string) => {};

  // console.log(addressData);

  const handleDelete = (addressId: string) => {
    const newAddList = addressData.filter(
      (item: any) => item.id! === addressId
    );
    setShowDeleteConfirm(true);
    setSelectedAddrId(addressId);
  };

  const handleAddressChange = (newAddress: string) => {
    // Handle the address change, you can use it to update other components or state if needed
    console.log('Address changed to:', newAddress);
  };

  // const handleConfirmDelete = () => {
  //   if (selectedAddrId && typeof selectedAddrId === 'string') {
  //     const updatedAddressData = addressData.filter(item => {
  //       if (item.id && typeof item.id === 'string') {
  //         return item.id !== selectedAddrId;
  //       }
  //       return false;
  //     });
  //     setAddressData(updatedAddressData);
  //     setShowDeleteConfirm(false);
  //   }
  // };

  return (
    <S.AddressList>
      {showAddressTitle ? (
        <S.AddressTitleBox>
          <Body2>배송지목록</Body2>
          <Modal
            opener={<S.StyledTextButton>배송지추가</S.StyledTextButton>}
            title="배송지 추가"
            contents={
              <AddressEdit
                data={false}
                showRecipient={true}
                onAddressChange={handleAddressChange}
              />
            }
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
              <S.AddressEditBox>
                <Modal
                  opener={<S.StyledTextButton>수정</S.StyledTextButton>}
                  title="배송지 추가"
                  contents={
                    <AddressEdit
                      addressData={addressItem}
                      data={true}
                      showRecipient={true}
                      onAddressChange={handleAddressChange}
                    />
                  }
                  successText="확인"
                  cancelText="취소"
                  modalWidth="30rem"
                />
                <Modal
                  opener={
                    <S.StyledTextButton
                      onClick={() =>
                        handleDelete(addressItem.id?.toString() || '')
                      }
                    >
                      삭제
                    </S.StyledTextButton>
                  }
                  contents="삭제하시겠습니까?"
                  successText="삭제"
                  cancelText="취소"
                  // onConfirm={handleConfirmDelete}
                  // onCancel={() => setShowDeleteConfirm(false)}
                  modalWidth="30rem"
                />
              </S.AddressEditBox>
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
