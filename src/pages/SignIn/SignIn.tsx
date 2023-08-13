import React, { FC } from 'react';
import {
  ButtonColor,
  ButtonSize,
  ControlGroup,
  EyeIcon,
  EyeOffIcon,
  IconButton
} from '@class101/ui';
import * as S from './SignIn.style';
import { StyledButton, StyledInput } from '../../Styles/common.style';
import { theme } from '../../Styles/theme';
import { Link } from 'react-router-dom';

const SignIn: FC = () => {
  return (
    <S.SignIn>
      <S.MainLogo>
        <Link to="/">
          <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
        </Link>
      </S.MainLogo>
      <S.SignInContainer>
        <StyledInput
          placeholder="이름"
          margin="0 0 0.4rem 0"
          //errorMessage="정확한 이름을 입력해주세요."
        />
        <S.InputButtonGroup>
          <StyledInput
            type="email"
            placeholder="아이디(이메일)"
            width="97%"
            margin="0 0 0.4rem 0"
            //errorMessage={ERROR_MSG[0].msg}
            //allowMessage="사용 가능한 아이디입니다."
          />
          <StyledButton type="submit" size={ButtonSize.LARGE} isMargin={false}>
            중복확인
          </StyledButton>
        </S.InputButtonGroup>
        {/* <ControlGroup>
          <StyledInput
            type="email"
            placeholder="아이디(이메일)"
            width="97%"
            margin="0 0 0.4rem 0"
            //errorMessage={ERROR_MSG[0].msg}
            //allowMessage="사용 가능한 아이디입니다."
          />
          <StyledButton type="submit" size={ButtonSize.LARGE} isMargin={false}>
            중복확인
          </StyledButton>
        </ControlGroup> */}
        <S.InputEyeGroup>
          <StyledInput
            type="password"
            placeholder="비밀번호"
            margin="0 0 0.4rem 0"
            //errorMessage="알파벳 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
          />
          <S.StyledEye>
            <IconButton
              //클릭했을 때 icon={<EyeIcon />} 으로 변경
              icon={<EyeOffIcon />}
              color={ButtonColor.TRANSPARENT}
              fillColor={theme.gray}
            />
          </S.StyledEye>
        </S.InputEyeGroup>
        <S.InputEyeGroup>
          <StyledInput
            type="password"
            placeholder="비밀번호 확인"
            margin="0 0 0.4rem 0"
            //errorMessage="비밀번호가 일치하지 않습니다."
          />
          <S.StyledEye>
            <IconButton
              //클릭했을 때 icon={<EyeIcon />} 으로 변경
              icon={<EyeOffIcon />}
              color={ButtonColor.TRANSPARENT}
              fillColor={theme.gray}
            />
          </S.StyledEye>
        </S.InputEyeGroup>
        <StyledInput
          placeholder="전화번호"
          margin="0 0 1rem 0"
          //errorMessage="전화번호를 올바르게 입력해주세요."
        />
        <StyledButton
          fill
          type="submit"
          size={ButtonSize.LARGE}
          isMargin={false}
        >
          회원가입
        </StyledButton>
      </S.SignInContainer>
    </S.SignIn>
  );
};

export default SignIn;

const ERROR_MSG = [
  { id: 1, error: 'validate', msg: '@, 마침표(.)를 포함해야만 합니다.' },
  { id: 2, error: 'confirm', msg: '중복 확인을 해주세요.' },
  { id: 3, error: 'duplicate', msg: '이미 존재하는 아이디입니다.' }
];
