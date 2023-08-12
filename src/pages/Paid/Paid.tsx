import { FC, useEffect, useState } from 'react';
import * as S from './Paid.style';
import OrderInfoComponent from '../../components/Paid/OrderInfoComponent';
import { ButtonSize } from '@class101/ui';
import { OrderDetailProps, OrderInfoProps } from '../../types/components';

const Paid: FC = () => {
  const [orderInfoData, setOrderInfoData] = useState<OrderInfoProps[]>([]);
  const [orderDetailData, setOrderDetailData] = useState<OrderDetailProps[]>(
    []
  );

  useEffect(() => {
    fetch('/data/orderInfo.json')
      .then(res => res.json())
      .then(data => setOrderInfoData(data));

    fetch('/data/orderDetail.json')
      .then(res => res.json())
      .then(data => setOrderDetailData(data));
  }, []);

  return (
    <S.Paid>
      <S.TitleContainer>
        <S.Title>결제가 완료 되었습니다.</S.Title>
      </S.TitleContainer>
      <S.BorderLine color="black" />
      <OrderInfoComponent
        orderInfoData={orderInfoData}
        orderDetailData={orderDetailData}
      />
      <S.ButtonGroup>
        <S.OnClickButton fill size={ButtonSize.LARGE}>
          마이페이지
        </S.OnClickButton>
        <S.OnClickButton fill size={ButtonSize.LARGE}>
          메인으로
        </S.OnClickButton>
      </S.ButtonGroup>
    </S.Paid>
  );
};

export default Paid;
