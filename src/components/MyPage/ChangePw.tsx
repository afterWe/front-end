import React, { FC, useState } from 'react';
import * as S from './ChangePw.style';
import { ButtonSize } from '@class101/ui';
import { StyledButton, StyledInput } from '../../Styles/common.style';

const ChangePw: FC = () => {
  const [value, setValue] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value }
    } = event;
    setValue(value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(value);
  };
  return (
    <S.ChangePw>
      <S.Group>
        <S.ChangePwTitleWrap>
          <S.ChangePwTitle>비밀번호 변경</S.ChangePwTitle>
        </S.ChangePwTitleWrap>
        <S.ChangePwBox onSubmit={handleSubmit}>
          <S.InputPasswordWrap>
            <StyledInput
              type="password"
              placeholder="새로운 비밀번호를 입력해주세요."
              onChange={onChange}
              width="20rem"
              margin="0 0 0.6rem 0"
              // errorMessage="알파벳 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
            />
            <StyledInput
              type="password"
              placeholder="새로운 비밀번호를 한번 더 입력해주세요."
              onChange={onChange}
              width="20rem"
              margin="0 0 0.6rem 0"
              // errorMessage="비밀번호가 일치하지 않습니다."
            />
          </S.InputPasswordWrap>
          <StyledButton
            isMargin={false}
            fill
            size={ButtonSize.LARGE}
            margin="2rem"
          >
            변경
          </StyledButton>
        </S.ChangePwBox>
      </S.Group>
    </S.ChangePw>
  );
};

export default ChangePw;
