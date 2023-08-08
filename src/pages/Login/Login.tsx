import React, { FC } from 'react';
import { Colors, ButtonSize } from '@class101/ui';
import * as S from './Login.style';

const Login: FC = () => {
  return (
    <S.Login>
      <S.MainLogo>
        <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
      </S.MainLogo>
      <S.LoginContainer>
        <S.StyledInput
          fill
          placeholder="아이디(이메일)"
          //errorMessage="아이디를 입력해주세요."
        />
        <S.InputPasswordWrap>
          <S.StyledInput
            fill
            placeholder="비밀번호"
            //errorMessage="비밀번호를 입력해주세요."
          />
          <S.StyledEye fillColor={Colors.gray400} />
        </S.InputPasswordWrap>
        <S.StyledButton fill size={ButtonSize.LARGE} margin="2rem">
          로그인
        </S.StyledButton>
        <S.TextButtonBox>
          <S.StyledTextButton margin="1rem" to="/sign-in">
            회원가입 바로가기
          </S.StyledTextButton>
        </S.TextButtonBox>
      </S.LoginContainer>
    </S.Login>
  );
};

export default Login;
