import { styled } from 'styled-components';

export const HeaderContainer = styled.header`
  /* 여기를 참고해주세요! */
  ${({ theme }) => theme.flexBox('space-between', 'center')};
  ${({ theme }) => theme.positionBox('sticky', '0', '0', undefined, '0')};
  width: 100%;
  height: 90px;
  margin-bottom: 50px;
  padding: 0 40px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 2px 2px 28px -16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
`;

export const MainLogo = styled.h1`
  position: relative;
  width: 13%;
  cursor: pointer;

  img {
    width: 100%;
    vertical-align: middle;
  }
`;

export const Nav = styled.nav`
  width: 30%;
`;

export const NavList = styled.ul`
  ${({ theme }) => theme.flexBox('space-between', 'center')};
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 1px;
`;

export const MenuList = styled.ul`
  ${({ theme }) => theme.flexBox('space-between', 'center')};
  font-size: 14px;
  width: auto;
`;

export const StyledBtn = styled.button`
  background: none;
  border: none;
  font-size: 1em;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: ${props => props.color};
    font-weight: ;
  }
`;
