import React, { FC, useState, useEffect } from 'react';
import * as S from './PaymentDetail.style';

interface OrderItem {
  id: number;
  orderNum: string;
  product: string;
}

const PaymentDetail: FC = () => {
  const [data, setData] = useState<OrderItem[]>([]);

  useEffect(() => {
    fetch('./data/payment.json')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  const orderData = {
    header: ['주문번호', '주문상품', '상세보기']
  };

  return (
    <S.PaymentDetail>
      <S.Group>
        <S.PaymentTitle>
          <S.Title>결제 내역</S.Title>
          <S.Detail>(추가)</S.Detail>
        </S.PaymentTitle>
        <S.PaymentBox>
          <S.PaymentTable>
            <thead>
              <tr>
                {orderData.header.map(item => {
                  return <th key={item}>{item}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {data.map(item => {
                return (
                  <tr key={item.id}>
                    <td>{item.orderNum}</td>
                    <td>{item.product}</td>
                    <td>
                      <S.DetailButton>상세보기</S.DetailButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.PaymentTable>
        </S.PaymentBox>
        <S.Pagination>1 2 3 4 5 ... 10</S.Pagination>
      </S.Group>
    </S.PaymentDetail>
  );
};

export default PaymentDetail;
