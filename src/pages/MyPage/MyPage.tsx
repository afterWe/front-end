import React, { FC } from 'react';
import * as S from './MyPage.style';
import { Button } from '@class101/ui';
import { PaymentDetail } from '../../components/MyPage/PaymentDetail.style';

const MyPage: FC = () => {
  return (
    <S.MyPage>
      <S.TitleContainer>
        <S.MyPageTitle>마이페이지</S.MyPageTitle>
      </S.TitleContainer>
      <S.Container>
        <S.StyledButton>결제내역</S.StyledButton>
        <Button>개인정보관리</Button>
        <Button>비밀번호 변경</Button>
      </S.Container>
      <PaymentDetail />
    </S.MyPage>
  );
};

export default MyPage;
