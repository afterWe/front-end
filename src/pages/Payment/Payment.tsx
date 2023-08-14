import { Input, RadioButton, RadioButtonGroup } from '@class101/ui';
import * as S from './Payment.style';
import { FC, useEffect, useState } from 'react';
import { PaymentInformProps, PaymentProps } from '../../types/components';

const Payment: FC = () => {
  const [paymentOrderList, setPaymentOrderList] = useState<PaymentProps[]>([]);
  const [paymentInform, setPaymentInform] = useState<PaymentInformProps | null>(
    null
  );

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    fetch('/data/paymentOrderList.json')
      .then(res => res.json())
      .then(data => setPaymentOrderList(data));

    fetch('/data/paymentInformation.json')
      .then(res => res.json())
      .then(data => setPaymentInform(data[0]));
  }, []);

  const handleOnChange = (value: string) => {
    console.log('뭐 선택되는 거지?', value);
    setSelectedValue(value);
  };

  return (
    <S.Payment>
      <S.TitleBox>
        <S.Title>결제하기</S.Title>
      </S.TitleBox>
      <S.StyledDivider color="black" />
      <S.PaymentInfoContainer>
        <S.DelieveryWrap>
          {/* ------정인님 컴포넌트 들어올 부분 시작------------- */}
          <S.DelieveryGroupTopBox>
            <S.DelieveryTitle>배송 옵션</S.DelieveryTitle>
            <S.shippingList>배송지 목록</S.shippingList>
          </S.DelieveryGroupTopBox>
          <S.InputBox>
            <Input label="이름 *" />
            <br />
            <Input label="휴대폰 번호 *" />
            <br />
            <Input size="md" inline label="우편번호" />
            <S.StyledButton>주소 검색</S.StyledButton>
            <br />
            <br />
            <Input label="도로명 주소 *" />
            <br />
            <Input label="상세 주소 *" />
            <br />
          </S.InputBox>
        </S.DelieveryWrap>
        {/* ----------끝--------------- */}
        <S.PaymentInfoWrap>
          <S.PaymentTitle>결제 정보</S.PaymentTitle>
          {paymentInform && (
            <>
              <S.PaymentDetailInfoBox>
                <li>상품 금액</li>
                <li>
                  {Number(paymentInform.productAmount).toLocaleString()} 원
                </li>
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <li>배송비</li>
                {paymentInform.delieveryFee === '무료'
                  ? '무료'
                  : `${paymentInform.delieveryFee} "원"`}
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <li>총 결제 금액</li>
                <li>
                  {Number(paymentInform.totalPaymentAmount).toLocaleString()} 원
                </li>
              </S.PaymentDetailInfoBox>
            </>
          )}

          <S.StyledDivider color="black" />
          <S.PaymentOrderListWrap>
            {paymentOrderList.map(el => (
              <S.PaymentDetailImgGroup key={el.id}>
                <S.OrderImageBox>
                  <img src={el.image} alt="productImg" />
                </S.OrderImageBox>
                <S.OrderProductDetail>
                  <li>{el.name}</li>
                  <S.OrderProductSubDetail>
                    <li>{el.type}</li>
                    <li>수량: {el.quantity}</li>
                    <li>{el.price} 원</li>
                  </S.OrderProductSubDetail>
                </S.OrderProductDetail>
              </S.PaymentDetailImgGroup>
            ))}
          </S.PaymentOrderListWrap>
          <S.StyledButton fill>결제하기</S.StyledButton>
        </S.PaymentInfoWrap>
      </S.PaymentInfoContainer>
      <S.PaymentMethod>
        <S.PaymentMethodTitle>결제 방법</S.PaymentMethodTitle>
        <RadioButtonGroup
          stackingDirection="vertical"
          showBorder={false}
          showDivider={false}
          onChange={handleOnChange}
          value={selectedValue}
        >
          <RadioButton value="direct-pay">바로 결제</RadioButton>
          <RadioButton value="kakao-pay">카카오 페이</RadioButton>
        </RadioButtonGroup>
      </S.PaymentMethod>
    </S.Payment>
  );
};

export default Payment;
