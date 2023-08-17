import { FC, ChangeEvent, useState } from 'react';
import * as S from './RadioInput.styled';
import { RadioBtnProps } from '../../types/components';

const RadioBtn: FC<RadioBtnProps> = ({
  value,
  name,
  contents,
  align,
  btnMargin,
  onChange
}) => {
  return (
    <S.RadioBtnLabel align={align}>
      <S.StyledRadioBtn
        type="radio"
        name={name}
        value={value}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          onChange(value);
        }}
        btnMargin={btnMargin}
      />
      <S.RadioBtnTxt>{contents}</S.RadioBtnTxt>
    </S.RadioBtnLabel>
  );
};

export default RadioBtn;
