import React, { FC } from 'react';
import { Button, Divider, Icon, Select } from '@class101/ui';
import * as S from './Cart.style';

const Cart: FC = () => {
  return (
    <S.Cart>
      <S.CartListContainer>
        <S.FreeShipServiceWrap>
          <S.FreeShipServiceTitle>무료배송서비스</S.FreeShipServiceTitle>
          <S.FreeShipServiceContent>
            배송서비스를 즐겨봐
          </S.FreeShipServiceContent>
        </S.FreeShipServiceWrap>
        <S.ReturnAndRefundWrap>
          <S.ReturnAndRefundTitle>반품 및 환불안내</S.ReturnAndRefundTitle>
          <S.ReturnAndRefundContent>자세히보기</S.ReturnAndRefundContent>
        </S.ReturnAndRefundWrap>
        <S.CartListWrap>
          <S.CartListTitle>장바구니</S.CartListTitle>
          <S.CartListGroup>
            <S.ImageBox>이미지</S.ImageBox>
            <S.CartListDetailBox>
              <S.ItemInfoAndDelete>
                <S.ItemInfoName>나이키 에어 포스 1 쉐도우 복서</S.ItemInfoName>
                <Icon.Trash />
                <S.ItemInfoDetail>남성 신발 240/white</S.ItemInfoDetail>
              </S.ItemInfoAndDelete>
              <S.SelectAndItemPrice>
                <Select
                  value=""
                  placeholder="1"
                  options={['1', '2', '3', '4', '5']}
                  size="sm"
                />
                <S.ItemPrice>159,000</S.ItemPrice>
              </S.SelectAndItemPrice>
            </S.CartListDetailBox>
          </S.CartListGroup>
          <Divider />
        </S.CartListWrap>
      </S.CartListContainer>
      <S.OrderListContainer>
        <S.OrderListTitle>주문 내역</S.OrderListTitle>
        <S.ProductPriceBox>
          <span>상품금액</span>
          <span>data</span>
        </S.ProductPriceBox>
        <S.ShippingFee>
          <span>배송비</span>
          <span>0원</span>
        </S.ShippingFee>
        <S.TotalPrice>
          <span>총 결제 금액</span>
          <span>data</span>
        </S.TotalPrice>
        <Button>결제 하기</Button>
      </S.OrderListContainer>
    </S.Cart>
  );
};

export default Cart;
