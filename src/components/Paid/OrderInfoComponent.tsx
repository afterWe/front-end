import OrderDetailComponent from './OrderDetailComponent';
import * as S from './OrderInfoComponent.style';
import { OrderInfoComponentProps } from '../../types/components';

const OrderInfoComponent: React.FC<OrderInfoComponentProps> = ({
  orderInfoData,
  orderDetailData
}) => {
  return (
    <ul>
      <S.Order>주문 날짜 : {orderInfoData[0]?.date}</S.Order>
      <S.Order>배송지 정보 : {orderInfoData[0]?.address}</S.Order>
      <S.Order>최종 결제 금액 : {orderInfoData[0]?.price}원</S.Order>
      <S.Order>
        결제 수단 :{' '}
        {orderInfoData[0]?.payment_method === 'kakao-pay'
          ? '카카오 페이'
          : '바로 결제'}
      </S.Order>
      <S.Order>
        주문 상품 :
        <ul>
          <S.OrderWrap>
            <OrderDetailComponent orderDetailData={orderDetailData} />
          </S.OrderWrap>
        </ul>
      </S.Order>
    </ul>
  );
};

export default OrderInfoComponent;
