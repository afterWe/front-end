import { Colors } from '@class101/ui';
import { styled } from 'styled-components';

export const OrderProduct = styled.p`
  padding: 0.8rem 0;
  font-size: 18px;
`;

export const OrderWrap = styled.div`
  overflow-y: auto;
  height: 500px;
`;

export const DetailGroup = styled.div`
  ${({ theme }) => theme.flexBox('space-between', 'center', 'row')}
  background-color: ${Colors.gray200};
  margin-bottom: 1.3rem;
  padding: 0.8rem 1.8rem;
`;

export const ImageDetailBox = styled.div`
  ${({ theme }) => theme.flexBox('flex-start', 'center', 'row')}
`;

export const Image = styled.div`
  width: 10rem;
  ${({ theme }) => theme.flexBox('center', 'center', '')}

  img {
    width: 100%;
  }
`;

export const OrderDetail = styled.div`
  ${({ theme }) => theme.flexBox('', '', 'column')}
  margin-left: 3rem;
`;

export const ProductName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const ProductDetailBox = styled.ul`
  ${({ theme }) => theme.flexBox('', 'flex-start', 'column')}
  padding-top: 1rem;
  font-size: 15px;
`;

export const ProductDeltail = styled.li`
  line-height: 1.45rem;
  color: ${({ theme }) => theme.darkGray};
`;

export const Price = styled.p`
  padding-right: 3.5rem;
`;
