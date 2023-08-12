import React, { FC } from 'react';
import { ButtonSize } from '@class101/ui';
import { StyledButton, StyledInput } from '../../Styles/common.style';
import { theme } from '../../Styles/theme';
import * as S from './Login.style';

const Login: FC = () => {
  return (
    <S.Login>
      <S.MainLogo>
        <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
      </S.MainLogo>
      <S.LoginContainer>
        <StyledInput
          fill
          placeholder="아이디(이메일)"
          margin="0 0 0.5rem 0"
          //errorMessage="아이디(이메일)를 입력해주세요."
        />
        <S.InputPasswordWrap>
          <StyledInput
            fill
            placeholder="비밀번호"
            margin="0 0 1rem 0"
            // errorMessage="비밀번호를 입력해주세요."
          />
          <S.StyledEye fillColor={theme.gray} />
        </S.InputPasswordWrap>
        <StyledButton fill size={ButtonSize.LARGE} isMargin={true}>
          로그인
        </StyledButton>
        <S.TextButtonBox>
          <S.StyledTextButton to="/sign-in">
            회원가입 바로가기
          </S.StyledTextButton>
        </S.TextButtonBox>
      </S.LoginContainer>
    </S.Login>
  );
};

export default Login;
