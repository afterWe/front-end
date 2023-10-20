import { styled } from 'styled-components';
import { BoldTextProps } from '../../types/components';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const PageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const FilterWrap = styled.div`
  display: block;
  float: right;
  padding-right: 4.7rem;
`;

export const FilterCategory = styled.div`
  cursor: pointer;
  user-select: none;
  text-align: right;
`;

export const BoldText = styled.span<BoldTextProps>`
  font-weight: ${({ isBold }) => (isBold ? 'bolder' : 'normal')};
`;

export const ProductCardContainer = styled.div`
  clear: both;
`;

export const ProductCardWrap = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
