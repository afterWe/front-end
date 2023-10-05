import React, { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import {
  ButtonColor,
  ButtonSize,
  EyeIcon,
  EyeOffIcon,
  IconButton
} from '@class101/ui';
import * as S from './SignIn.style';
import { StyledButton, StyledInput } from '../../Styles/common.style';
import { theme } from '../../Styles/theme';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn: FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [phone, setPhone] = useState('');

  const [isNameValue, setIsNameValue] = useState(true);
  const [isEmailValue, setIsEmailValue] = useState(true);
  const [emailConfirm, setEmailConfirm] = useState<boolean | null>(null);
  const [isPasswordValue, setIsPasswordValue] = useState(true);
  const [isPhoneNumValue, setIsPhoneNumValue] = useState(true);

  const [passwordView, setPasswordView] = useState(false);

  const regExpName = (name: string) => {
    let nameExp = /^[가-힣]{2,}$/;
    return nameExp.test(name);
  };

  const regExpEmail = (email: string) => {
    const emailExp = /^[^@]{2,}@[^@.]{2,}\.[^@.]{2,}$/;
    return emailExp.test(email);
  };

  const regExpPassword = (password: string) => {
    let passwordExp =
      /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~]).{8,}$/;
    return passwordExp.test(password);
  };

  const regExpPhoneNum = (phone: string) => {
    const phoneExp = /^\d{3}-\d{4}-\d{4}$/;
    return phoneExp.test(phone);
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);

    const regName = regExpName(event.currentTarget.value);
    setIsNameValue(regName);
    if (event.currentTarget.value === '') setIsNameValue(true);
  };

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmail(event.target.value);

    const regEmail = regExpEmail(event.currentTarget.value);
    setIsEmailValue(regEmail);
    if (event.currentTarget.value === '') setIsEmailValue(true);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.currentTarget.value);

    const regPassword = regExpPassword(event.currentTarget.value);
    setIsPasswordValue(regPassword);
    if (event.currentTarget.value === '') setIsPasswordValue(true);
  };

  const onChagnePasswordVerify = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setPasswordVerify(event.target.value);
  };

  const onChangePhoneNum = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);

    const regPhone = regExpPhoneNum(event.currentTarget.value);
    setIsPhoneNumValue(regPhone);
    if (event.currentTarget.value === '') setIsPhoneNumValue(true);
  };

  // 비밀번호 type 변경하는 eyeIcon
  const onClickIcon = () => {
    setPasswordView(prev => !prev);
  };

  // 중복확인 POST 함수
  const checkEmail = async (email: string) => {
    const response = await axios.get(
      `http://192.168.0.23:3000/users/checkEmail/${email}`
    );

    if (response.data.message === '가입 가능한 이메일입니다.') {
      setEmailConfirm(true);
    } else {
      setEmailConfirm(false);
    }
  };

  // 최종 회원가입 POST 함수
  const registerUser: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault();

    if (emailConfirm === null) {
      alert(ERROR_MSG[1].msg);
      return;
    }

    const formattedPhone = phone.replace(/-/g, '');

    const user = {
      name: name,
      email: email,
      password: password,
      phoneNumber: formattedPhone
    };

    try {
      const response = await axios.post(
        'http://192.168.0.23:3000/users/signUp',
        user,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.message === '회원가입이 완료되었습니다.') {
        alert('회원가입이 완료되었습니다.');
        navigate('/login');
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (
          error.response?.data.message ===
          '이미 가입된 이메일 또는 전화번호입니다.'
        ) {
          alert('이미 가입된 이메일 또는 전화번호입니다.');
        } else {
          console.error('Unknown server error:', error.response?.data.message);
        }
      } else {
        console.error('Unknown error:', error);
      }
    }
  };

  return (
    <S.SignIn>
      <S.MainLogo>
        <Link to="/">
          <img src="/images/runbase_logo3.png" alt="런베이스 로고" />
        </Link>
      </S.MainLogo>
      <S.SignInContainer onSubmit={registerUser}>
        <StyledInput
          onChange={onChangeName}
          value={name}
          placeholder="이름"
          margin="0 0 0.4rem 0"
          errorMessage={isNameValue ? '' : '정확한 이름을 입력해주세요.'}
        />
        <S.InputButtonGroup>
          <StyledInput
            onChange={onChangeEmail}
            placeholder="아이디(이메일)"
            width="97%"
            margin="0 0 0.4rem 0"
            errorMessage={isEmailValue ? '' : ERROR_MSG[0].msg}
            allowMessage={
              emailConfirm === null
                ? ''
                : emailConfirm
                ? '사용 가능한 아이디입니다.'
                : ERROR_MSG[2].msg
            }
          />
          <StyledButton
            onClick={() => checkEmail(email)}
            type="submit"
            size={ButtonSize.LARGE}
            isMargin={false}
          >
            중복확인
          </StyledButton>
        </S.InputButtonGroup>
        <S.InputEyeGroup>
          <StyledInput
            onChange={onChangePassword}
            value={password}
            type={passwordView ? 'text' : 'password'}
            placeholder="비밀번호"
            margin="0 0 0.4rem 0"
            errorMessage={
              isPasswordValue
                ? ''
                : '알파벳 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다.'
            }
          />
          <S.StyledEye>
            <IconButton
              //클릭했을 때 icon={<EyeIcon />} 으로 변경
              icon={passwordView ? <EyeIcon /> : <EyeOffIcon />}
              color={ButtonColor.TRANSPARENT}
              fillColor={theme.gray}
              onClick={onClickIcon}
            />
          </S.StyledEye>
        </S.InputEyeGroup>
        <S.InputEyeGroup>
          <StyledInput
            onChange={onChagnePasswordVerify}
            type={passwordView ? 'text' : 'password'}
            placeholder="비밀번호 확인"
            margin="0 0 0.4rem 0"
            errorMessage={
              password !== passwordVerify ? '비밀번호가 일치하지 않습니다.' : ''
            }
          />
          <S.StyledEye>
            <IconButton
              //클릭했을 때 icon={<EyeIcon />} 으로 변경
              icon={passwordView ? <EyeIcon /> : <EyeOffIcon />}
              color={ButtonColor.TRANSPARENT}
              fillColor={theme.gray}
              onClick={onClickIcon}
            />
          </S.StyledEye>
        </S.InputEyeGroup>
        <StyledInput
          onChange={onChangePhoneNum}
          placeholder="전화번호"
          margin="0 0 1rem 0"
          errorMessage={
            isPhoneNumValue ? '' : '전화번호를 올바르게 입력해주세요.'
          }
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
