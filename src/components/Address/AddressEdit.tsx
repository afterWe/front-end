import React, { FC, useState } from 'react';
import { ButtonSize, Checkbox, Caption1 } from '@class101/ui';
import { StyledInput } from '../../Styles/common.style';
import * as S from './AddressEdit.style';
import { PaymentShowRecipientProps } from '../../types/components';

const AddressEdit: FC<PaymentShowRecipientProps> = ({
  showRecipient,
  width
}) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <S.AddressEditContainer width={width}>
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
      <S.StyledCheckBox>
        <Checkbox
          checked={isChecked}
          size={14}
          onChange={() => setIsChecked(!isChecked)}
        />
        <Caption1>기본배송지 저장</Caption1>
      </S.StyledCheckBox>
      <S.StyledBox>
        <StyledInput
          width="100%"
          margin="0 0 0.5rem 0"
          disabled
          label="우편번호"
        />
        <S.StyledButton size={ButtonSize.LARGE}>주소 검색</S.StyledButton>
      </S.StyledBox>
      <StyledInput
        margin="0 0 0.5rem 0"
        label="도로명주소 *"
        // errorMessage='주소를 검색해주세요.'
      />
      <StyledInput
        margin="0 0 0.5rem 0"
        label="상세주소 *"
        // errorMessage='상세주소를 입력해주세요.'
      />
    </S.AddressEditContainer>
  );
};

export default AddressEdit;
