import React, { FC, useEffect, useState } from 'react';
import * as S from './PersonalInfo.style';
import { StyledInput } from '../../Styles/common.style';
import AddressList from '../Address/AddressList';
import axios from 'axios';
import { userInfoProps } from '../../types/components';

const PersonalInfo: FC = title => {
  const [userInfo, setUserInfo] = useState<userInfoProps>();
  const [inputEdit, setInputEdit] = useState(false);
  const [value, setValue] = useState<{ [key: string]: string }>({
    name: '',
    phoneNumber: '',
    email: ''
  });
  const [originalValue, setOriginalValue] = useState<{ [key: string]: string }>(
    {
      name: '',
      phoneNumber: '',
      email: ''
    }
  );

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;

    setValue(prevValue => ({
      ...prevValue,
      [name]: value
    }));
  };

  const handleCancle = () => {
    setValue(originalValue);
    setInputEdit(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  async function getUser() {
    try {
      const res = await axios.get('/data/userInfo.json');
      setUserInfo(res.data);
      setOriginalValue(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const { id, name, phoneNumber, email } = userInfo || {};

  const phoneNumberRegex = /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/;
  const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  const nameCondition = value.name.length > 0;
  const phoneNumberCondition = phoneNumberRegex.test(value.phoneNumber);
  const emailCondition = emailRegex.test(value.email);

  const inputCondition =
    nameCondition &&
    phoneNumberCondition &&
    emailCondition &&
    (value.name !== name ||
      value.phoneNumber !== phoneNumber ||
      value.email !== email);

  return (
    <S.PersonalInfo>
      <S.Group>
        <S.PersonalInfoTitleWrap>
          <S.PersonalInfoTitle>개인정보 관리</S.PersonalInfoTitle>
        </S.PersonalInfoTitleWrap>
        <S.PersonalInfoBox>
          <S.InputBox>
            {inputEdit ? (
              <>
                <StyledInput
                  label="이름 *"
                  placeholder={name}
                  defaultValue={name}
                  onChange={onChange}
                  width="40rem"
                  margin="0 0 1rem 0"
                  name="name"
                />
                <StyledInput
                  label="전화번호 *"
                  placeholder={phoneNumber}
                  defaultValue={phoneNumber}
                  onChange={onChange}
                  width="40rem"
                  margin="0 0 1rem 0"
                  name="phoneNumber"
                />
                <StyledInput
                  label="아이디 *"
                  placeholder={email}
                  defaultValue={email}
                  onChange={onChange}
                  width="40rem"
                  margin-bottom="1rem"
                  name="email"
                />
                <S.ButtonBox>
                  {inputCondition ? (
                    <S.SaveButton onClick={() => setInputEdit(false)}>
                      저장
                    </S.SaveButton>
                  ) : (
                    <S.SaveButton disabled>저장</S.SaveButton>
                  )}
                  <S.CancelButton onClick={handleCancle}>취소</S.CancelButton>
                </S.ButtonBox>
              </>
            ) : (
              <>
                <StyledInput
                  label="이름 *"
                  placeholder={name}
                  onChange={onChange}
                  disabled
                  width="40rem"
                  margin="0 0 1rem 0"
                  name="name"
                />
                <StyledInput
                  label="전화번호 *"
                  placeholder={phoneNumber}
                  onChange={onChange}
                  disabled
                  width="40rem"
                  margin="0 0 1rem 0"
                  name="phoneNumber"
                />
                <StyledInput
                  label="아이디 *"
                  placeholder={email}
                  onChange={onChange}
                  disabled
                  width="40rem"
                  margin-bottom="1rem"
                  name="email"
                />
                <S.ButtonBox>
                  <S.SaveButton onClick={() => setInputEdit(true)}>
                    수정
                  </S.SaveButton>
                </S.ButtonBox>
              </>
            )}
          </S.InputBox>
          <S.ShippingAdderssBox>
            <AddressList showAddressTitle={true} showContents={true} />
          </S.ShippingAdderssBox>
        </S.PersonalInfoBox>
      </S.Group>
    </S.PersonalInfo>
  );
};

export default PersonalInfo;
