import React, { FC } from 'react';
import { Input, Button, TextButton, Icon } from '@class101/ui';
import * as S from './Login.style';

const Login: FC = () => {
  return (
    <S.Login>
      <S.InputContainer>
        <Input size="md" fill placeholder="아이디" />
        <S.InputPasswordWrap>
          <S.IconGroup>
            <Icon.Eye size={18} />
          </S.IconGroup>
          <Input size="md" fill placeholder="비밀번호" />
        </S.InputPasswordWrap>
      </S.InputContainer>
      <S.ButtonContainer>
        <Button fill>로그인</Button>
        <TextButton to="/sign-in">회원가입 바로가기</TextButton>
      </S.ButtonContainer>
    </S.Login>
  );
};

export default Login;
