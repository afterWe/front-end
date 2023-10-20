import React, { FC, FormEventHandler, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ButtonSize } from '@class101/ui';
import { StyledButton, StyledInput } from '../../Styles/common.style';
import { theme } from '../../Styles/theme';
import { LoginProps } from '../../types/components';
import axios from 'axios';
import * as S from './Login.style';
import { BASE_URL } from '../../api';

const Login: FC = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<LoginProps>({
    email: '',
    password: ''
  });

  const { email, password } = userInfo;

  const idCondition = email.includes('@') && email.includes('.');
  const pwCondition = new RegExp(
    /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?]).{8,}$/
  ).test(password);

  const updateUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const login: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (idCondition && pwCondition) {
      try {
        const response = await axios.post(
          `${BASE_URL}/users/signIn`,
          {
            email: email,
            password: password
          },
          {
            headers: { 'Content-Type': 'application/json;charset=utf-8' }
          }
        );

        if (response.data.message) {
          alert(response.data.message);
        } else {
          localStorage.setItem('token', response.data.token);
          alert('로그인 성공');
          navigate('/');
        }
      } catch (error) {
        console.error('Axios error:', error);
        alert('Axios error.');
      }
    }
  };

  return (
    <S.Login>
      <S.MainLogo>
        <Link to="/">
          <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
        </Link>
      </S.MainLogo>
      <S.LoginContainer>
        <StyledInput
          fill
          placeholder="아이디(이메일)"
          margin="0 0 0.5rem 0"
          name="email"
          value={email}
          onChange={updateUserInfo}
          errorMessage={
            !idCondition ? '아이디(이메일)를 입력해주세요.' : undefined
          }
        />
        <S.InputPasswordWrap>
          <StyledInput
            fill
            placeholder="비밀번호"
            margin="0 0 1rem 0"
            name="password"
            value={password}
            onChange={updateUserInfo}
            errorMessage={!pwCondition ? '비밀번호를 입력해주세요.' : undefined}
          />
          <S.StyledEye fillColor={theme.gray} />
        </S.InputPasswordWrap>
        <S.Onsubmit onSubmit={login}>
          <StyledButton
            fill
            type="submit"
            size={ButtonSize.LARGE}
            isMargin={true}
            disabled={!idCondition || !pwCondition}
          >
            로그인
          </StyledButton>
        </S.Onsubmit>
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
