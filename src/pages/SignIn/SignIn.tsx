import React, { FC } from 'react';
import { ButtonSize, Colors } from '@class101/ui';
import * as S from './SignIn.style';
import { Link } from 'react-router-dom';

const SignIn: FC = () => {
  return (
    <S.SignIn>
      <Link to="/">
        <S.MainLogo>
          <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
        </S.MainLogo>
      </Link>
      <S.SignInContainer>
        <S.StyledInput
          placeholder="이름"
          //errorMessage="정확한 이름을 입력해주세요."
        />
        <S.InputButtonGroup>
          <S.StyledInput
            type="email"
            placeholder="아이디(이메일)"
            width="97%"
            //errorMessage="@, 마침표(.)를 포함해야만 합니다."
          />
          <S.StyledButton type="submit" size={ButtonSize.LARGE}>
            중복확인
          </S.StyledButton>
        </S.InputButtonGroup>
        <S.InputEyeGroup>
          <S.StyledInput
            type="password"
            placeholder="비밀번호"
            //errorMessage="알파벳 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
          />
          <S.StyledEye fillColor={Colors.gray400} />
        </S.InputEyeGroup>
        <S.InputEyeGroup>
          <S.StyledInput
            type="password"
            placeholder="비밀번호 확인"
            //errorMessage="비밀번호가 일치하지 않습니다."
          />
          <S.StyledEye fillColor={Colors.gray400} />
        </S.InputEyeGroup>
        <S.StyledInput
          placeholder="전화번호"
          //errorMessage="전화번호를 올바르게 입력해주세요."
        />
        <S.StyledButton
          fill
          type="submit"
          size={ButtonSize.LARGE}
          margin="2rem"
        >
          회원가입
        </S.StyledButton>
      </S.SignInContainer>
    </S.SignIn>
  );
};

export default SignIn;
