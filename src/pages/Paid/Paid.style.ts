import { Colors } from '@class101/ui';
import { styled } from 'styled-components';

export const Paid = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10rem auto;
  width: 70%;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BorderLine = styled.div`
  border-top: 1px solid gray;
  margin: 2.5rem 0;
`;

export const Order = styled.div`
  padding: 0.8rem 0;
`;

export const OrderProduct = styled.div`
  padding-top: 2rem;
`;

export const OrderWrap = styled.div`
  overflow-y: auto;
  height: 500px;
  margin: 1rem 0;
`;

export const DetailGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between')}
  flex-direction: row;
  align-items: center;
  background-color: ${Colors.gray200};
  margin: 1.5rem 0;
  padding: 0 1.8rem;
`;

export const ImageDetailBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Image = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 80%;
  }
`;

export const OrderDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
`;

export const ProductName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

export const ProductDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 1rem;
  font-size: 15px;
`;

export const ProductDeltail = styled.div`
  margin: 4px 0;
  color: ${({ theme }) => theme.darkGray};
`;

export const Price = styled.div`
  padding-right: 3.5rem;
`;
