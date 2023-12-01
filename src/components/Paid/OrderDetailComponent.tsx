import { FC } from 'react';
import { OrderInfoDataProps } from '../../types/components';
import * as S from './OrderDetailComponent.style';

const OrderDetailComponent: FC<{ orderInfoData: OrderInfoDataProps[] }> = ({
  orderInfoData
}) => {
  return (
    <div>
      {orderInfoData &&
        orderInfoData.map(order =>
          order.productsInfo.map(
            ({
              orderId,
              imageUrl,
              name,
              category,
              color,
              size,
              quantity,
              purchasePrice
            }) => (
              <S.DetailGroup key={orderId}>
                <S.ImageDetailBox>
                  <S.Image>
                    <img src={imageUrl} alt="Product-Img" />
                  </S.Image>
                  <S.OrderDetail>
                    <S.ProductName>{name}</S.ProductName>
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
                  {Number(purchasePrice).toLocaleString()}
                  <span>원</span>
                </S.Price>
              </S.DetailGroup>
            )
          )
        )}
    </div>
  );
};

export default OrderDetailComponent;
