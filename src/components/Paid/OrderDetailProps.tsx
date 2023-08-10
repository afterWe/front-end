import { OrderDetailProps } from '../../types/components';
import * as S from './OrderDetailProps.style';

export default function OrderDetaiComponentProps({
  orderDetail
}: OrderDetailProps) {
  return (
    <div>
      <S.OrderProduct>주문상품 : </S.OrderProduct>
      <S.OrderWrap>
        {orderDetail.map(
          ({ id, image, title, category, color, size, quantity, price }) => (
            <S.DetailGroup key={id}>
              <S.ImageDetailBox>
                <S.Image>
                  <img src={image} alt="orderProduct" />
                </S.Image>
                <S.OrderDetail>
                  <S.ProductName>{title}</S.ProductName>
                  <S.ProductDetailBox>
                    <S.ProductDeltail>{category}</S.ProductDeltail>
                    <S.ProductDeltail>
                      <span>
                        {color} / {size}
                      </span>
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
    </div>
  );
}
