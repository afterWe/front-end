import * as S from './Payment.style';
import { FC, useEffect, useState } from 'react';
import {
  PaymentInformProps,
  PaymentProps,
  PaymentShowRecipientProps
} from '../../types/components';
import AddressEdit from '../../components/Address/AddressEdit';
import Modal from '../../components/Modal/Modal';
import AddressList from '../../components/Address/AddressList';
import RadioBtn from '../../components/RadioBtn/RadioInput';

const Payment: FC = () => {
  const [paymentOrderList, setPaymentOrderList] = useState<PaymentProps[]>([]);
  const [paymentInform, setPaymentInform] = useState<PaymentInformProps | null>(
    null
  );

  useEffect(() => {
    fetch('/data/paymentOrderList.json')
      .then(res => res.json())
      .then(data => setPaymentOrderList(data));

    fetch('/data/paymentInformation.json')
      .then(res => res.json())
      .then(data => setPaymentInform(data[0]));
  }, []);

  const handleRadioChange = (selectedValue: string) => {
    console.log(selectedValue);
  };

  return (
    <S.Payment>
      <S.HeadlineBox>
        <S.Headline>결제하기</S.Headline>
      </S.HeadlineBox>
      <S.PaymentInfoContainer>
        <S.DelieveryWrap>
          <S.EditBox>
            <S.SubHeadline>배송 옵션</S.SubHeadline>{' '}
            <S.ModalBox>
              <Modal
                opener={<S.DelieveryList>배송지 목록</S.DelieveryList>}
                title="배송지 추가"
                contents={
                  <AddressList showAddressTitle={false} showContents={true} />
                }
                successText="확인"
                modalWidth="40%"
                onSuccess={() => alert('선택 완료!')}
              />
            </S.ModalBox>
          </S.EditBox>
          <S.AddressEditBox>
            <AddressEdit showRecipient={false} />
          </S.AddressEditBox>
        </S.DelieveryWrap>
        <S.PaymentInfoWrap>
          <S.SubHeadline>결제 정보</S.SubHeadline>
          {paymentInform && (
            <>
              <S.PaymentDetailInfoBox>
                <dt>상품 금액</dt>
                <dd>
                  {Number(paymentInform.productAmount).toLocaleString()} 원
                </dd>
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <dt>배송비</dt>
                <dd>
                  {paymentInform.delieveryFee === '무료'
                    ? '무료'
                    : `${paymentInform.delieveryFee} "원"`}
                </dd>
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <dt>총 결제 금액</dt>
                <dd>
                  {Number(paymentInform.totalPaymentAmount).toLocaleString()} 원
                </dd>
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
                    <li>{el.price.toLocaleString()} 원</li>
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
        <form>
          {RADIO_VALUES.map((el, idx) => (
            <RadioBtn
              key={idx}
              value={el}
              name="pay-method"
              contents={<S.RadioBtnValue>{el}</S.RadioBtnValue>}
              onChange={handleRadioChange}
              btnMargin="-1px"
            />
          ))}
        </form>
      </S.PaymentMethod>
    </S.Payment>
  );
};

export default Payment;

const RADIO_VALUES = ['바로 결제', '카카오페이'];
