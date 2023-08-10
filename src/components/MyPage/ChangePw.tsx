import React, { FC } from 'react';
import * as S from './ChangePw.style';
import { ButtonSize } from '@class101/ui';

const ChangePw: FC = () => {
  return (
    <S.ChangePw>
      <S.Group>
        <S.ChangePwTitle>
          <S.Title>비밀번호 변경</S.Title>
        </S.ChangePwTitle>
        <S.ChangePwBox>
          <S.InputPasswordWrap>
            <S.StyledInput
              type="password"
              placeholder="새로운 비밀번호를 입력해주세요."
              // errorMessage="알파벳 소문자, 숫자, 특수문자를 포함해 8자 이상이어야 합니다."
            />
            <S.StyledInput
              type="password"
              placeholder="새로운 비밀번호를 한번 더 입력해주세요."
              // errorMessage="비밀번호가 일치하지 않습니다."
            />
          </S.InputPasswordWrap>
          <S.StyledButton fill size={ButtonSize.LARGE} margin="2rem">
            변경
          </S.StyledButton>
        </S.ChangePwBox>
      </S.Group>
    </S.ChangePw>
  );
};

export default ChangePw;
