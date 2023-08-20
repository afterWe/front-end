import React, { FC, useEffect, useState } from 'react';
import {
  Body1,
  Body2,
  Divider,
  ButtonColor,
  ButtonSize,
  TrashIcon,
  IconButton
} from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';
import * as S from './Cart.style';
import Modal from '../../components/Modal/Modal';

interface CartItem {
  id: number;
  itemImage: string;
  itemName: string;
  itemCategory: string;
  itemSize: number | string;
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
            <Body1>반품 및 환불 지연 안내</Body1>
            <Body2 color="gray">자세히보기</Body2>
          </S.ReturnAndRefundWrap>
          <S.CartListWrap>
            <>
              <S.StyledHeadline2>장바구니</S.StyledHeadline2>
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
                            <S.ItemImage src={itemImage} alt={itemName} />
                          </S.ItemImageBox>
                          <S.ItemInfoBox>
                            <div>
                              <S.ItemInfoName>{itemName}</S.ItemInfoName>
                              <S.ItemInfoDetail>
                                {itemCategory} {itemSize}/{itemColor}
                              </S.ItemInfoDetail>
                            </div>
                            <div>
                              <S.StyledSelect
                                value=""
                                placeholder="1"
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
                              />
                            }
                            title=""
                            contents="삭제하시겠습니까?"
                            successText="확인"
                            cancelText="취소"
                          />
                          {itemPrice.toLocaleString()} 원
                        </S.DeleteAndPriceBox>
                      </S.CartListGroup>
                      <Divider color="gray" />
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
            <span>data.toLocaleString()</span>
          </S.ProductPriceBox>
          <S.ShippingFeeBox>
            <span>배송비 :</span>
            <span>0 원</span>
          </S.ShippingFeeBox>
          <S.TotalPriceBox>
            <span>총 결제 금액 :</span>
            <span>data.toLocaleString()</span>
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
