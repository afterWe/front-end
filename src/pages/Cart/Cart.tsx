import React, { FC, useEffect, useState } from 'react';
import { Divider } from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';
import * as S from './Cart.style';

interface CartItem {
  id: number;
  itemImage: string;
  itemName: string;
  itemCategory: string;
  itemSize: number;
  itemColor: string;
  itemPrice: number;
}

const Cart: FC = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);

  useEffect(() => {
    fetch('./data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <PageContainer>
      <S.Cart>
        <S.CartListContainer>
          <S.FreeShipServiceWrap>
            <S.FreeShipServiceTitle>
              멤버에게 제공되는 무료 배송 서비스
            </S.FreeShipServiceTitle>
            <S.FreeShipServiceContent>
              나이키 멤버가 되어 무료배송 서비스를 비롯한 다양한 혜택을
              누려보세요.&nbsp;
              <S.StyledTextButton to="/sign-in">가입하기</S.StyledTextButton>
              &nbsp;또는&nbsp;
              <S.StyledTextButton to="/login">로그인</S.StyledTextButton>
            </S.FreeShipServiceContent>
          </S.FreeShipServiceWrap>
          <S.ReturnAndRefundWrap>
            <S.ReturnAndRefundTitle>
              반품 및 환불 지연 안내
            </S.ReturnAndRefundTitle>
            <S.ReturnAndRefundContent>자세히보기</S.ReturnAndRefundContent>
          </S.ReturnAndRefundWrap>
          <S.CartListWrap>
            <>
              <S.CartListTitle>장바구니</S.CartListTitle>
              {cartData &&
                cartData.map(
                  ({
                    id,
                    itemImage,
                    itemName,
                    itemCategory,
                    itemColor,
                    itemPrice,
                    itemSize
                  }) => (
                    <>
                      <S.CartListGroup key={id}>
                        <S.CartListDetailBox>
                          <S.ItemImageBox>
                            <S.ItemImage src={itemImage} alt="cart item" />
                          </S.ItemImageBox>
                          <S.ItemInfoBox>
                            <S.ItemInfo>
                              <S.ItemInfoName>{itemName}</S.ItemInfoName>
                              <S.ItemInfoDetail>
                                {itemCategory} {itemSize}/{itemColor}
                              </S.ItemInfoDetail>
                            </S.ItemInfo>
                            <S.StyledSelectBox>
                              <S.StyledSelect
                                value=""
                                placeholder="1"
                                options={['1', '2', '3', '4', '5']}
                                size="md"
                              />
                            </S.StyledSelectBox>
                          </S.ItemInfoBox>
                        </S.CartListDetailBox>
                        <S.DeleteAndPriceBox>
                          <S.StyeldTrachIcon size={20} />
                          <S.ItemPrice>{itemPrice} 원</S.ItemPrice>
                        </S.DeleteAndPriceBox>
                      </S.CartListGroup>
                      <Divider />
                    </>
                  )
                )}
            </>
          </S.CartListWrap>
        </S.CartListContainer>
        <S.OrderListContainer>
          <S.OrderListTitle>주문 내역</S.OrderListTitle>
          <S.ProductPriceBox>
            <span>상품금액 :</span>
            <span>data</span>
          </S.ProductPriceBox>
          <S.ShippingFeeBox>
            <span>배송비 :</span>
            <span>0 원</span>
          </S.ShippingFeeBox>
          <S.TotalPriceBox>
            <span>총 결제 금액 :</span>
            <span>data</span>
          </S.TotalPriceBox>
          <S.CartOrderButtonBox>
            <S.CartOrderButton fill>결제 하기</S.CartOrderButton>
          </S.CartOrderButtonBox>
        </S.OrderListContainer>
      </S.Cart>
    </PageContainer>
  );
};

export default Cart;
