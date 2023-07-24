import React, { FC } from 'react';
import { Input, Button } from '@class101/ui';
import styled from 'styled-components';

const Login: FC = () => {
  return (
    <LoginContainer>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Button fill>로그인</Button>
      <Button fill>회원가입 바로가기</Button>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  display: column;
  width: 50%;
  height: 100vh;
`;
