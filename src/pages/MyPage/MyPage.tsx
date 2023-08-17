import React, { FC, useState } from 'react';
import * as S from './MyPage.style';
import PaymentDetail from '../../components/MyPage/PaymentDetail';
import PersonalInfo from '../../components/MyPage/PersonalInfo';
import ChangePw from '../../components/MyPage/ChangePw';
import { PageContainer } from '../../Styles/common.style';

const MyPage: FC = () => {
  const [activeComponent, setActiveComponent] = useState<
    'payment' | 'personalInfo' | 'password'
  >('payment');

  const handleButton = (component: 'payment' | 'personalInfo' | 'password') => {
    setActiveComponent(component);
  };

  return (
    <S.MyPage>
      <PageContainer>
        <S.TitleContainer>
          <S.MyPageTitle>마이페이지</S.MyPageTitle>
        </S.TitleContainer>
        <S.TabContainer>
          <S.StyledTabBtn
            active={activeComponent === 'payment'}
            onClick={() => handleButton('payment')}
          >
            결제 내역
          </S.StyledTabBtn>
          <S.StyledTabBtn
            active={activeComponent === 'personalInfo'}
            onClick={() => handleButton('personalInfo')}
          >
            개인정보 관리
          </S.StyledTabBtn>
          <S.StyledTabBtn
            active={activeComponent === 'password'}
            onClick={() => handleButton('password')}
          >
            비밀번호 변경
          </S.StyledTabBtn>
        </S.TabContainer>
        {activeComponent === 'payment' && <PaymentDetail />}
        {activeComponent === 'personalInfo' && <PersonalInfo />}
        {activeComponent === 'password' && <ChangePw />}
      </PageContainer>
    </S.MyPage>
  );
};

export default MyPage;
