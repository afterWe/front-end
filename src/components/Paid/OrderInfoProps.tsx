import { OrderInfoProps } from '../../types/components';
import * as S from './OrderInfoProps.style';

export const OrderInfoComponent: React.FC<OrderInfoProps> = ({ orderInfo }) => (
  <ul>
    {orderInfo.map(({ id, date, address, price, payment_method }) => (
      <div key={id}>
        <S.Order>주문 날짜 : {date}</S.Order>
        <S.Order>배송지 정보 : {address}</S.Order>
        <S.Order>최종 결제 금액 : {Number(price).toLocaleString()}원</S.Order>
        <S.Order>
          결제 수단 :{' '}
          {payment_method === 'kakao-pay' ? '카카오 페이' : '바로 결제'}
        </S.Order>
      </div>
    ))}
  </ul>
);
