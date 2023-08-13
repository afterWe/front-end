import { Colors, PersonIcon } from '@class101/ui';
import React, { FC } from 'react';
import * as S from './style/Header.style';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <S.HeaderContainer>
      <S.MainLogo>
        <S.StyledBtn>
          <Link to="/">
            <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
          </Link>
        </S.StyledBtn>
      </S.MainLogo>
      <S.Nav>
        <S.NavList>
          {NAV_LIST.map(list => {
            return (
              <li key={list.id}>
                <S.StyledBtn color={Colors.blue700}>{list.name}</S.StyledBtn>
              </li>
            );
          })}
        </S.NavList>
      </S.Nav>
      <S.MenuList>
        {MENU_LIST.map(list => {
          return (
            <li key={list.id}>
              <Link to={list.router}>
                <S.StyledBtn color={Colors.blue700}>{list.name}</S.StyledBtn>
              </Link>
            </li>
          );
        })}
      </S.MenuList>
    </S.HeaderContainer>
  );
};

export default Header;

const NAV_LIST = [
  { id: 1, name: 'NEW', router: '/' },
  { id: 2, name: 'Clothing', router: '/' },
  { id: 3, name: 'Shoes', router: '/' },
  { id: 4, name: 'Items', router: '/' }
];

const MENU_LIST = [
  { id: 1, name: '검색', router: '/' },
  { id: 2, name: '로그인', router: '/login' },
  { id: 3, name: '회원가입', router: '/sign-in' },
  { id: 4, name: '장바구니', router: '/cart' },
  { id: 5, name: '마이페이지', router: '/mypage' }
];
