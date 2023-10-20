import React, { FC, useEffect, useState } from 'react';
import {
  Body1,
  Body2,
  ButtonColor,
  ButtonSize,
  TrashIcon,
  IconButton
} from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';
import * as S from './Cart.style';
import Modal from '../../components/Modal/Modal';
import axios from 'axios';
import { BASE_URL } from '../../api';

type CartItem = {
  userId: number;
  cartId: number;
  productSizeId: number;
  quantity: number;
  productId: number;
  productName: string;
  productPrice: string;
  productColor: string;
  productSize: string;
  imageUrl: string;
  totalPrice: number;
};

const Cart: FC = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  // const [selectQuantity, setQuantity] = useState<number>(1);
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJzaWtrQG5hdmVyLmNvbSIsImlhdCI6MTY5Nzc4MzY0MiwiZXhwIjoxNjk4Mzg4NDQyLCJhdWQiOiJhdWRpZW5jZSIsImlzcyI6ImFmdGVyV2UifQ.d7miAU9aXGYGZh3gPqam-wvOuUxwVFG5pLhKtkD859I';

  async function getCartData() {
    try {
      const response = await axios.get(`${BASE_URL}/carts/cartList`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return setCartData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteCartData(cartId: number) {
    try {
      await axios.delete(`${BASE_URL}/carts/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      getCartData();
    } catch (error) {
      console.error(error);
    }
  }

  async function updateCartData(cartId: number, quantity: number) {
    try {
      await axios.put(
        `${BASE_URL}/carts/updateCart/${cartId}`,
        {
          quantity: Number(quantity)
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      getCartData();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getCartData();
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
            <Body1>반품 및 환불 지연 안내</Body1>
            <Body2 color="gray">자세히보기</Body2>
          </S.ReturnAndRefundWrap>
          <S.CartListWrap>
            <>
              <S.StyledHeadline2>장바구니</S.StyledHeadline2>
              {cartData &&
                cartData.map(
                  (
                    {
                      userId,
                      cartId,
                      productSizeId,
                      quantity,
                      productId,
                      productName,
                      productPrice,
                      productColor,
                      productSize,
                      imageUrl
                    },
                    idx
                  ) => (
                    <>
                      <S.CartListGroup key={idx}>
                        <S.CartListDetailBox>
                          <S.ItemImageBox>
                            <S.ItemImage src={imageUrl} alt={productName} />
                          </S.ItemImageBox>
                          <S.ItemInfoBox>
                            <div>
                              <S.ItemInfoName>{productName}</S.ItemInfoName>
                              <S.ItemInfoDetail>
                                수량: {quantity}
                              </S.ItemInfoDetail>
                              <S.ItemInfoDetail>
                                색상: {productColor}
                              </S.ItemInfoDetail>
                              <S.ItemInfoDetail>
                                사이즈: {productSize}
                              </S.ItemInfoDetail>
                            </div>
                            <div>
                              <S.StyledSelect
                                onChange={(
                                  e: React.ChangeEvent<HTMLSelectElement>
                                ) =>
                                  updateCartData(cartId, Number(e.target.value))
                                }
                                value={quantity}
                                options={['1', '2', '3', '4', '5']}
                                size="md"
                              />
                            </div>
                          </S.ItemInfoBox>
                        </S.CartListDetailBox>
                        <S.DeleteAndPriceBox>
                          <Modal
                            opener={
                              <IconButton
                                icon={<TrashIcon />}
                                size={ButtonSize.XSMALL}
                                color={ButtonColor.TRANSPARENT}
                                onClick={() => deleteCartData(cartId)}
                              />
                            }
                            contents="삭제되었습니다."
                            successText="확인"
                          />
                          {productPrice?.toLocaleString()} 원
                        </S.DeleteAndPriceBox>
                      </S.CartListGroup>
                      <S.StyledDivider />
                    </>
                  )
                )}
            </>
          </S.CartListWrap>
        </S.CartListContainer>
        <S.OrderListContainer>
          <S.StyledHeadline2>주문 내역</S.StyledHeadline2>
          <S.ProductPriceBox>
            <span>상품금액 :</span>
            <span>
              {cartData.length > 0 &&
                cartData[cartData.length - 1]?.totalPrice.toLocaleString()}{' '}
              원
            </span>
          </S.ProductPriceBox>
          <S.ShippingFeeBox>
            <span>배송비 :</span>
            <span>0 원</span>
          </S.ShippingFeeBox>
          <S.TotalPriceBox>
            <span>총 결제 금액 :</span>
            <span>
              {cartData.length > 0 &&
                cartData[cartData.length - 1]?.totalPrice.toLocaleString()}{' '}
              원
            </span>
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
