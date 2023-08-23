import { FC } from 'react';
import { OrderDetailComponentProps } from '../../types/components';
import * as S from './OrderDetailComponent.style';

const OrderDetailComponent: FC<OrderDetailComponentProps> = ({
  orderDetailData
}) => {
  return (
    <div>
      {orderDetailData.map(
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
    </div>
  );
};

export default OrderDetailComponent;
