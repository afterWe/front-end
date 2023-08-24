import { Button, Headline3, Subtitle1 } from '@class101/ui';
import styled from 'styled-components';
import { ProductCardStyleProps } from '../../types/components';

export const ProductCard = styled.div<ProductCardStyleProps>`
  padding: ${props => props.padding};
  width: ${props => props.width};
`;

export const ProductCardContainer = styled(Button)`
  width: 100%;
  height: auto;
  padding: 0;
  background-color: transparent;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: transparent;
    filter: brightness(0.9);
  }

  span {
    ${({ theme }) => theme.flexBox(undefined, 'flex-start', 'column')};
    width: 100%;
  }
`;

export const ProductCardImgBox = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  overflow: hidden;

  ::after {
    display: block;
    content: '';
    padding-bottom: 100%;
  }
`;

export const ProductCardImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const ProductInform = styled.p`
  margin-top: 1rem;
`;

export const ProductName = styled(Headline3)`
  text-align: start;
  line-height: 25px;
  font-size: 1.1rem;
  font-weight: 500;
`;

export const ProductPrice = styled(Subtitle1)`
  text-align: start;
  line-height: 22px;
  font-size: 1rem;
  font-weight: 500;
`;
