import * as S from './Paid.style';
import OrderDetail from '../../data/OrderDetail.json';
import OrderInfo from '../../data/OrderInfo.json';
import { OrderInfoComponent } from '../../components/Paid/OrderInfoProps';
import OrderDetailComponentProps from '../../components/Paid/OrderDetailProps';
import { ButtonSize } from '@class101/ui';

export default function Paid() {
  return (
    <S.Paid>
      <S.TitleContainer>
        <S.Title>결제가 완료 되었습니다.</S.Title>
      </S.TitleContainer>
      <S.BorderLine />
      <OrderInfoComponent orderInfo={OrderInfo} />
      <OrderDetailComponentProps orderDetail={OrderDetail} />
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
}
