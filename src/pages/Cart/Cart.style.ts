import styled from 'styled-components';
import { Button, Colors, Select, TextButton, TrashIcon } from '@class101/ui';

export const Cart = styled.div`
  ${({ theme }) => theme.flexBox('center')}
  height: 100%;
`;

export const CartListContainer = styled.div`
  width: 70%;
`;

export const FreeShipServiceWrap = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 0.2rem solid ${({ theme }) => theme.gray};
  line-height: 1.2rem;
`;

export const FreeShipServiceTitle = styled.p`
  font-size: 1.2rem;
  color: ${Colors.orange500};
`;

export const FreeShipServiceContent = styled.p`
  font-size: 0.8rem;
`;

export const StyledTextButton = styled(TextButton)`
  font-size: 0.8rem;
  margin-bottom: 0.15rem;
`;

export const ReturnAndRefundWrap = styled.div`
  background-color: ${({ theme }) => theme.gray};
  margin-bottom: 1rem;
  padding: 1rem;
  line-height: 1.2rem;
`;

export const ReturnAndRefundTitle = styled.p`
  font-size: 1rem;
`;

export const ReturnAndRefundContent = styled.p`
  font-size: 0.8rem;
`;

export const CartListWrap = styled.div`
  margin-top: 3rem;
`;

export const CartListTitle = styled.h1`
  color: ${({ theme }) => theme.gray};
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const CartListGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between')}
  margin: 2rem 0;
`;

export const ItemImageBox = styled.div`
  height: 10rem;
  width: 10rem;
  background-color: ${({ theme }) => theme.gray};
`;

export const ItemImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const CartListDetailBox = styled.div`
  display: flex;
`;

export const ItemInfoBox = styled.div`
  margin-left: 1rem;
  ${({ theme }) => theme.flexBox('space-between', '', 'column')}
`;

export const ItemInfo = styled.div``;

export const ItemInfoName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ItemInfoDetail = styled.p`
  color: ${({ theme }) => theme.gray};
  font-size: 1rem;
`;

export const StyledSelectBox = styled.div``;

export const StyledSelect = styled(Select)`
  width: 5rem;
  height: 3rem;
`;

export const DeleteAndPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'flex-end', 'column')}
`;

export const StyeldTrachIcon = styled(TrashIcon)`
  &:hover {
    cursor: pointer;
  }
`;

export const ItemPrice = styled.p``;

export const OrderListContainer = styled.div`
  width: 30%;
  margin-left: 5rem;
  position: sticky;
  top: 140px;
  height: 100%;
`;

export const OrderListTitle = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const ProductPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', '', '')}
  line-height: 2rem;
`;

export const ShippingFeeBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', '', '')}
  line-height: 2rem;
`;

export const TotalPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', '', '')}
  margin-top: 2rem;
  line-height: 2rem;
`;

export const CartOrderButtonBox = styled.div`
  ${({ theme }) => theme.flexBox('center', '', '')}
  margin-top: 2rem;
`;

export const CartOrderButton = styled(Button)`
  height: 3rem;
  color: white;
  background-color: black;
  border-radius: 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
  }
`;
