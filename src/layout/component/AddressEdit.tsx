import React, { FC } from 'react';
import { Button, Divider, Input } from '@class101/ui';
import * as S from './AddressEdit.style';

const AddressEdit: FC = () => {
  return (
    <S.AddressEdit>
      <S.HeadContainer>
        <S.HeadTitle>배송지 추가(수정)</S.HeadTitle>
        <Divider color="black" />
      </S.HeadContainer>
      <S.InputContainer>
        <Input inline label="배송지이름" />
        <Input label="수령인" />
        <Input label="휴대폰번호" />
        <Input inline label="우편번호" />
        <Button>주소검색</Button>
        <Input label="도로명주소" />
        <Input label="상세주소" />
      </S.InputContainer>
    </S.AddressEdit>
  );
};

export default AddressEdit;
