import styled from 'styled-components';
import {
  Button,
  Colors,
  Select,
  TextButton,
  Headline3,
  Body2,
  Headline2,
  Divider
} from '@class101/ui';

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
  border: 2px solid ${({ theme }) => theme.gray};
  line-height: 2rem;
`;

export const FreeShipServiceTitle = styled(Headline3)`
  color: ${Colors.orange500};
`;

export const FreeShipServiceContent = styled(Body2)`
  color: ${({ theme }) => theme.gray};
`;

export const StyledTextButton = styled(TextButton)`
  font-size: 0.8rem;
  margin-bottom: 0.15rem;
`;

export const ReturnAndRefundWrap = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: ${({ theme }) => theme.gray};
  line-height: 2rem;
`;

export const CartListWrap = styled.div`
  margin-top: 3rem;
`;

export const StyledHeadline2 = styled(Headline2)`
  margin-bottom: 3rem;
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

export const ItemInfoName = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const ItemInfoDetail = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-size: 1rem;
`;

export const StyledSelect = styled(Select)`
  color: black;
  width: 5rem;
  height: 3rem;
`;

export const DeleteAndPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'flex-end', 'column')}
`;

export const StyledDivider = styled(Divider)`
  color: ${({ theme }) => theme.gray};
`;

export const OrderListContainer = styled.div`
  width: 30%;
  margin-left: 5rem;
  position: sticky;
  top: 140px;
  height: 100%;
`;

export const ProductPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
  line-height: 2rem;
`;

export const ShippingFeeBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
  line-height: 2rem;
`;

export const TotalPriceBox = styled.div`
  ${({ theme }) => theme.flexBox('space-between', undefined, undefined)}
  margin-top: 2rem;
  line-height: 2rem;
`;

export const CartOrderButtonBox = styled.div`
  ${({ theme }) => theme.flexBox('center', undefined, undefined)}
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
