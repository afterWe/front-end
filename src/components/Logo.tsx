import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Logo: FC = () => {
  return (
    <LogoStyled>
      <Link to="/">
        <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
      </Link>
    </LogoStyled>
  );
};

export default Logo;

const LogoStyled = styled.div`
  margin-bottom: 2rem;
  text-align: center;
  img {
    width: 30%;
  }
`;
