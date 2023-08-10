import React, { FC, useState } from 'react';
import * as S from './MyPage.style';
import { Button } from '@class101/ui';
import PaymentDetail from '../../components/MyPage/PaymentDetail';
import PersonalInfo from '../../components/MyPage/PersonalInfo';
import ChangePw from '../../components/MyPage/ChangePw';

const MyPage: FC = () => {
  const [activeComponent, setActiveComponent] = useState<
    'payment' | 'personalInfo' | 'password'
  >('payment');

  const handleButton = (component: 'payment' | 'personalInfo' | 'password') => {
    setActiveComponent(component);
  };

  return (
    <S.MyPage>
      <S.TitleContainer>
        <S.MyPageTitle>마이페이지</S.MyPageTitle>
      </S.TitleContainer>
      <S.Container>
        <Button onClick={() => handleButton('payment')}>결제 내역</Button>
        <Button onClick={() => handleButton('personalInfo')}>
          개인정보 관리
        </Button>
        <Button onClick={() => handleButton('password')}>비밀번호 변경</Button>
      </S.Container>
      {activeComponent === 'payment' && <PaymentDetail />}
      {activeComponent === 'personalInfo' && <PersonalInfo />}
      {activeComponent === 'password' && <ChangePw />}
    </S.MyPage>
  );
};

export default MyPage;
