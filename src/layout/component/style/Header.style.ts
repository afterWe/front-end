import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 40px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 28px -16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const MainLogo = styled.h1`
  width: 13%;

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const Nav = styled.nav`
  width: 30%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  list-style: none;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;

  :last-child {
    margin-right: 0px;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 20%;
  list-style: none;
  font-size: 14px;

  :last-child {
    margin-right: 0px;
  }
`;

export const StyledBtn = styled.button`
  background: none;
  margin: 0;
  padding: 0;
  border: none;
  font-size: 1em;
  cursor: pointer;
`;
