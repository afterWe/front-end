import React, { FC, useState, useEffect, MouseEvent, ChangeEvent } from 'react';
import * as S from './AddressEdit.style';
import { ButtonSize, Checkbox, Caption1 } from '@class101/ui';
import { StyledInput } from '../../Styles/common.style';
import { PaymentShowRecipientProps } from '../../types/components';
import { IAddr } from '../../types/components';
import axios from 'axios';

const AddressEdit: FC<PaymentShowRecipientProps> = ({
  showRecipient,
  data,
  width,
  addressData,
  onAddressChange
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [addrValue, setAddrValue] = useState(''); // 도로명주소
  const [zipNoValue, setZipNoValue] = useState(''); // 우편번호
  const [addrDetailValue, setAddrDetailValue] = useState(''); // 상세주소

  const handleAddrDetail = (event: ChangeEvent<HTMLInputElement>) => {
    setAddrDetailValue(event.target.value);
  };

  const onClickAddr = (event: MouseEvent<HTMLElement>) => {
    new window.daum.Postcode({
      oncomplete: function (data: IAddr) {
        setAddrValue(data.address);
        setZipNoValue(data.zonecode);
        setAddrDetailValue('');
        onAddressChange(data.address);
        document.getElementById('addrDetail')?.focus();
        // handleData(data.address);
      }
    }).open();
  };

  const onClickBasic = () => {
    const inputValue = {
      isChecked,
      addrValue,
      zipNoValue,
      addrDetailValue
    };

    axios
      .post('backend_api', inputValue)
      .then(response => {
        console.log('기본 배송지로 저장', response);
      })
      .catch(error => {
        console.error('Error', error);
      });
  };

  useEffect(() => {
    if (addressData) {
      setAddrValue(addressData.address || '');
      setZipNoValue(String(addressData.postCode || '')); //우편번호는 숫자니까
      setAddrDetailValue(addressData.addressDetail || '');
    } else {
      setAddrValue('');
      setZipNoValue('');
      setAddrDetailValue('');
    }
  }, [addressData]);

  return (
    <S.AddressEditContainer width={width}>
      {data ? (
        <>
          <StyledInput
            margin="0 0 0.5rem 0"
            label="배송지이름 *"
            defaultValue={addressData?.addressName}
            // errorMessage='배송지 이름을 입력해주세요.'
          />
          {showRecipient && (
            <StyledInput
              margin="0 0 0.5rem 0"
              label="수령인 *"
              defaultValue={addressData?.recipient}
              // errorMessage='수령인 이름을 입력해주세요.'
            />
          )}
          <StyledInput
            margin="0 0 0.5rem 0"
            label="휴대폰번호 *"
            defaultValue={addressData?.phoneNumber}
            // errorMessage='휴대폰번호를 입력해주세요.'
          />
          {!showRecipient && (
            <S.StyledCheckBox>
              <Checkbox
                checked={isChecked}
                size={14}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div onClick={onClickBasic}>
                <Caption1>기본배송지 저장</Caption1>
              </div>
            </S.StyledCheckBox>
          )}
          <S.StyledBox>
            <StyledInput
              width="100%"
              margin="0 0 0.5rem 0"
              disabled
              label="우편번호"
              defaultValue={addressData?.postCode}
            />
            <S.StyledButton size={ButtonSize.LARGE} onClick={onClickAddr}>
              주소 검색
            </S.StyledButton>
          </S.StyledBox>
          <StyledInput
            margin="0 0 0.5rem 0"
            label="도로명주소 *"
            value={addrValue}
            // errorMessage='주소를 검색해주세요.'
          />
          <StyledInput
            margin="0 0 0.5rem 0"
            label="상세주소 *"
            defaultValue={addressData?.addressDetail}
            // errorMessage='상세주소를 입력해주세요.'
          />
        </>
      ) : (
        <>
          <StyledInput
            margin="0 0 0.5rem 0"
            label="배송지이름 *"
            // errorMessage='배송지 이름을 입력해주세요.'
          />
          {showRecipient && (
            <StyledInput
              margin="0 0 0.5rem 0"
              label="수령인 *"
              // errorMessage='수령인 이름을 입력해주세요.'
            />
          )}
          <StyledInput
            margin="0 0 0.5rem 0"
            label="휴대폰번호 *"
            // errorMessage='휴대폰번호를 입력해주세요.'
          />
          {!showRecipient && (
            <S.StyledCheckBox>
              <Checkbox
                checked={isChecked}
                size={14}
                onChange={() => setIsChecked(!isChecked)}
              />
              <div onClick={onClickBasic}>
                <Caption1>기본배송지 저장</Caption1>
              </div>
            </S.StyledCheckBox>
          )}
          <S.StyledBox>
            <StyledInput
              width="100%"
              margin="0 0 0.5rem 0"
              disabled
              label="우편번호"
              id="zipNo"
              type="text"
              value={zipNoValue}
            />
            <S.StyledButton size={ButtonSize.LARGE} onClick={onClickAddr}>
              주소 검색
            </S.StyledButton>
          </S.StyledBox>
          <StyledInput
            margin="0 0 0.5rem 0"
            label="도로명주소 *"
            id="addr"
            type="text"
            value={addrValue}
            // errorMessage='주소를 검색해주세요.'
          />
          <StyledInput
            margin="0 0 0.5rem 0"
            label="상세주소 *"
            id="addrDetail"
            type="text"
            value={addrDetailValue}
            onChange={handleAddrDetail}
            // errorMessage='상세주소를 입력해주세요.'
          />
        </>
      )}
    </S.AddressEditContainer>
  );
};

export default AddressEdit;
