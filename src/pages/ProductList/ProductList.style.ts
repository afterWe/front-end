import { styled } from 'styled-components';
import { SelectColorProps, BoldTextProps } from '../../types/components';
import { Colors, Button } from '@class101/ui';

export const ProductList = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
`;

export const ProductAside = styled.aside`
  position: sticky;
  top: 0;
  margin: 0 20px 0 45px;
  width: 18%;
  height: 40rem;
  ${({ theme }) => theme.flexBox('space-around', '', 'column')}
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
`;

export const SizeCategory = styled.h5`
  margin: 1.5rem 0;
  font-size: 18px;
  font-weight: 500;
`;

export const SizeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 3.5rem);
  grid-template-rows: repeat(3, 2.5rem);
  grid-gap: 0.5rem;
  justify-items: end;
`;

export const SizeButton = styled(Button)`
  font-size: 16px;
`;

export const ColorCategory = styled(SizeCategory)``;

export const ColorList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(2, 2.5rem);
  grid-gap: 0.3rem;
`;

export const ColorBtn = styled.button<SelectColorProps>`
  background-color: ${props => props.color};
  width: 2rem;
  height: 2rem;
  border: ${props =>
    props.color === Colors.white ? `0.1rem solid ${Colors.black}` : 'none'};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const PriceCategory = styled(SizeCategory)``;

export const StyledLabel = styled.label`
  ${({ theme }) => theme.flexBox('', 'center', '')}
  cursor: pointer;

  &:hover {
    color: ${Colors.gray500};
  }

  input[type='checkbox'] {
    width: 20px;
    height: 20px;
    cursor: pointer;
    margin-right: 0.7rem;
  }
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
