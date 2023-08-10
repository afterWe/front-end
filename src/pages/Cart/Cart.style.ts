import styled from 'styled-components';
import { Colors } from '@class101/ui';

export const Cart = styled.div`
  display: flex;
  width: 90%;
  margin-top: 10rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const CartListContainer = styled.div`
  border: 1px solid black;
  width: 60%;
`;

export const FreeShipServiceWrap = styled.div`
  border: 1px solid black;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const FreeShipServiceTitle = styled.h2`
  //h2 fontsize가 안바뀜
  font-size: 1.2rem;
  color: ${Colors.orange500};
`;

export const FreeShipServiceContent = styled.p`
  font-size: 0.8rem;
`;

export const ReturnAndRefundWrap = styled.div`
  border: 1px solid black;
  line-height: 1.5rem;
  margin-bottom: 1rem;
`;

export const ReturnAndRefundTitle = styled.h3``;

export const ReturnAndRefundContent = styled.div`
  font-size: 0.8rem;
`;

export const CartListWrap = styled.div`
  border: 1px solid black;
`;

export const CartListTitle = styled.h1``;

export const CartListGroup = styled.div`
  display: flex;
  border: 1px solid black;
`;

export const ImageBox = styled.image`
  border: 1px solid black;
`;

export const CartListDetailBox = styled.div``;

export const ItemInfoAndDelete = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

export const ItemInfoName = styled.span``;

export const ItemInfoDetail = styled.span``;

export const SelectAndItemPrice = styled.div`
  border: 1px solid black;
`;

export const ItemPrice = styled.div``;

export const OrderListContainer = styled.div`
  border: 1px solid black;
  width: 40%;
`;

export const OrderListTitle = styled.div``;

export const ProductPriceBox = styled.div``;

export const ShippingFee = styled.div``;

export const TotalPrice = styled.div``;
