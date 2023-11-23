import React, { FC } from 'react';
import * as S from './style/Header.style';
import { Link, useNavigate } from 'react-router-dom';
import { Colors } from '@class101/ui';

const Header: FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const conditionLink = (name: string) => {
    if (name === '로그아웃') {
      if (token) {
        localStorage.removeItem('token');
        navigate('/myPage');
      }
    }

    if (name === '장바구니') {
      if (token) {
        navigate('/cart');
      } else if (!token) {
        alert('로그인 해주세요.');
        navigate('/login');
      }
    }

    if (name === '마이페이지') {
      if (token) {
        navigate('/mypage');
      } else if (!token) {
        alert('로그인 해주세요.');
        navigate('/login');
      }
    }
  };

  const MENU_LIST = [
    { id: 1, name: '검색', router: '/' },
    {
      id: 2,
      name: token ? '로그아웃' : '로그인',
      router: token ? '/' : '/login',
      onClick: () => conditionLink(token ? '로그아웃' : '로그인')
    },
    { id: 3, name: '회원가입', router: '/sign-in' },
    {
      id: 4,
      name: '장바구니',
      router: token ? '/cart' : '/login'
    },
    {
      id: 5,
      name: '마이페이지',
      // router: token ? '/mypage' : '/login'
      router: '/mypage'
    }
  ];

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
                <Link to={list.router}>
                  <S.StyledBtn color={Colors.blue700}>{list.name}</S.StyledBtn>
                </Link>
              </li>
            );
          })}
        </S.NavList>
      </S.Nav>
      <S.MenuList>
        {MENU_LIST.map(list => {
          return (
            <li key={list.id}>
              {list.router ? (
                <Link to={list.router}>
                  <S.StyledBtn color={Colors.blue700} onClick={list.onClick}>
                    {list.name}
                  </S.StyledBtn>
                </Link>
              ) : (
                <S.StyledBtn color={Colors.blue700} onClick={list.onClick}>
                  {list.name}
                </S.StyledBtn>
              )}
            </li>
          );
        })}
      </S.MenuList>
    </S.HeaderContainer>
  );
};

export default Header;

const NAV_LIST = [
  { id: 1, name: 'NEW', router: '/product-list/new' },
  { id: 2, name: 'Clothing', router: '/product-list/clothes' },
  { id: 3, name: 'Shoes', router: '/product-list/shoes' },
  { id: 4, name: 'Items', router: '/product-list/goods' }
];
