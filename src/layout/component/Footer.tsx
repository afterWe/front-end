import { FC } from 'react';
import * as S from './style/Footer.style';
import { Body1, Body2, Colors, TextButton } from '@class101/ui';

const MyComponent: FC = () => {
  return (
    <S.FooterContainer color={Colors.gray300}>
      <S.FooterNavList>
        {FOOTER_NAV_LIST.map(item => {
          return (
            <li key={item.id}>
              <TextButton size="lg">{item.title}</TextButton>
            </li>
          );
        })}
      </S.FooterNavList>
      <S.FooterContentWrap>
        <Body1>Korea | &copy; RunBase 2023. All Rights Reserved</Body1>
        <Body2>
          이 웹사이트는 포트폴리오를 위해 제작되었으며, 본 사이트의 모든
          컨텐츠와 제품들은 판매 목적이 아닌 예시 목적으로 사용되었습니다.
        </Body2>
        <S.InfoList>
          <dt>전화 문의</dt>
          <dd>010-8539-9495</dd>
          <dt>이메일</dt>
          <dd>some100696@gmail.com</dd>
          <dt>호스팅서비스</dt>
          <dd>AfterWe</dd>
        </S.InfoList>
      </S.FooterContentWrap>
    </S.FooterContainer>
  );
};

export default MyComponent;

const FOOTER_NAV_LIST = [
  { id: 1, title: '이용약관', Link: '' },
  { id: 2, title: '결제방법', Link: '' },
  { id: 3, title: '주문조회', Link: '' },
  { id: 4, title: '문의하기', Link: '' }
];
