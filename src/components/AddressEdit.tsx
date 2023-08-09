import React, { FC } from 'react';
import { ButtonSize } from '@class101/ui';
import * as S from './AddressEdit.style';

const AddressEdit: FC = () => {
  return (
    <S.AddressEdit>
      <S.HeadContainer>
        <S.HeadTitle>배송지 추가(수정)</S.HeadTitle>
        <S.StyledDivider color="black" />
      </S.HeadContainer>
      <S.InputContainer>
        <S.StyledInput
          label="배송지이름"
          // errorMessage='배송지 이름을 입력해주세요.'
        />
        <S.StyledInput
          label="수령인"
          // errorMessage='수령인 이름을 입력해주세요.'
        />
        <S.StyledInput
          label="휴대폰번호"
          // errorMessage='휴대폰번호를 입력해주세요.'
        />
        <S.StyledControlGroup>
          <S.StyledInput disabled label="우편번호" />
          <S.StyledButton size={ButtonSize.LARGE}>주소검색</S.StyledButton>
        </S.StyledControlGroup>
        <S.StyledInput
          label="도로명주소"
          // errorMessage='주소를 검색해주세요.'
        />
        <S.StyledInput
          label="상세주소"
          // errorMessage='상세주소를 입력해주세요.'
        />
      </S.InputContainer>
    </S.AddressEdit>
  );
};

export default AddressEdit;
