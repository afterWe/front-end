import * as S from './Paid.style';
import PaidTitleComponent from '../../components/Paid/PaidTitle/PaidTitleComponent';
import PaidButtonComponent from '../../components/Paid/PaidButton/PaidButtonComponent';
import OrderDetail from '../../data/OrderDetail.json';

interface PaidProps {
  titleText: string;
  showButton: boolean;
}

export default function Paid(props: PaidProps) {
  return (
    <S.Paid>
      <S.TitleContainer>
        <PaidTitleComponent text={props.titleText} />
      </S.TitleContainer>
      <S.BorderLine />
      <div>
        <S.Order>주문 날짜 :</S.Order>
        <S.Order>배송지 정보 :</S.Order>
        <S.Order>최종 결제 금액 :</S.Order>
        <S.Order>결제 수단 :</S.Order>
      </div>

      <div>
        <S.OrderProduct>주문상품 : </S.OrderProduct>
        <S.OrderWrap>
          {OrderDetail.map(
            ({ id, image, title, category, color, size, quantity, price }) => (
              <S.DetailGroup key={id}>
                <S.ImageDetailBox>
                  <S.Image>
                    <img src={image} />
                  </S.Image>
                  <S.OrderDetail>
                    <S.ProductName>{title}</S.ProductName>
                    <S.ProductDetailBox>
                      <S.ProductDeltail>{category}</S.ProductDeltail>
                      <S.ProductDeltail>
                        <span>{color}</span>
                        <span>/</span>
                        <span>{size}</span>
                      </S.ProductDeltail>
                      <S.ProductDeltail>
                        수량: <span>{quantity}</span>
                      </S.ProductDeltail>
                    </S.ProductDetailBox>
                  </S.OrderDetail>
                </S.ImageDetailBox>
                <S.Price>
                  {Number(price).toLocaleString()}
                  <span>원</span>
                </S.Price>
              </S.DetailGroup>
            )
          )}
        </S.OrderWrap>
        {props.showButton && <PaidButtonComponent />}
      </div>
    </S.Paid>
  );
}
