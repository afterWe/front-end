import React, { FC, useState, useEffect } from 'react';
import * as S from './PaymentDetail.style';
import { OrderItemProps } from '../../types/components';

const PaymentDetail: FC = () => {
  const [data, setData] = useState<OrderItemProps[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

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
        <S.PaymentHeadlineWrap>
          <S.PaymentTitle>결제 내역</S.PaymentTitle>
        </S.PaymentHeadlineWrap>
        <S.PaymentBox>
          <S.PaymentTable>
            <colgroup>
              <col width="35%" />
              <col width="40%" />
              <col width="*" />
            </colgroup>
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
        <S.StyledPagination
          currentPageIndex={currentPageIndex}
          totalPageIndex={4}
          pageCountPerView={5}
          onChange={(number: number) => setCurrentPageIndex(number)}
        />
      </S.Group>
    </S.PaymentDetail>
  );
};

export default PaymentDetail;
