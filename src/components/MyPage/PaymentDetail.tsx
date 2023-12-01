import React, { FC, useState, useEffect } from 'react';
import * as S from './PaymentDetail.style';
import axios from 'axios';
import Modal from '../Modal/Modal';
import OrderInfoComponent from '../Paid/OrderInfoComponent';
import Pagination from './Pagination';
import { OrderInfoDataProps, OrderItemProps } from '../../types/components';
import { BASE_URL } from '../../api';

const PaymentDetail: FC = () => {
  const [data, setData] = useState<OrderItemProps[]>([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const [orderInfoData, setOrderInfoData] = useState<OrderInfoDataProps[]>([]);

  // useEffect(() => {
  //   fetch('./data/payment.json')
  //     .then(res => res.json())
  //     .then(data => setData(data));
  // }, []);

  useEffect(() => {
    fetch('/data/orderInfo.json')
      .then(res => res.json())
      .then(data => setOrderInfoData(data));

    // fetch('/data/orderDetail.json')
    //   .then(res => res.json())
    //   .then(data => setOrderDetailData(data));
  }, []);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/paymentsList`, {
        params: {
          page: currentPageIndex,
          perPage: 5
        }
      })
      .then(response => setData(response.data))
      .catch(error => console.error('Error', error));
  }, [currentPageIndex]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/mypages/paymentsDetail/orderId`)
      .then(response => setOrderInfoData(response.data))
      .catch(error => console.error('Error', error));
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
                    <td>{item.orderNumber}</td>
                    {/* <td>{item.products.length > 0 && item.products[0].name}</td> */}
                    <td>
                      {Array.isArray(item.products)
                        ? item.products.length > 0 &&
                          item.products[0].name +
                            ` 외 ${item.products.length - 1}건`
                        : item.products}
                    </td>
                    <td>
                      <Modal
                        opener={<S.DetailButton>상세보기</S.DetailButton>}
                        contents={
                          <OrderInfoComponent
                            orderInfoData={orderInfoData}
                            onDelievery={true}
                          />
                        }
                        title={`주문번호 ${item.orderNumber}`}
                        successText="확인"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.PaymentTable>
        </S.PaymentBox>
        <Pagination
          data={{ total_pages: 10 }}
          currentPage={currentPageIndex}
          setCurrentPage={setCurrentPageIndex}
        />
      </S.Group>
    </S.PaymentDetail>
  );
};

export default PaymentDetail;
