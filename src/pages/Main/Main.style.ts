import { Button, Colors, Headline3, Subtitle1 } from '@class101/ui';
import styled from 'styled-components';
import { ProductCardStyleProps } from '../../types/components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MainBanner = styled.button`
  width: 100%;
  height: 50rem;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const MainProductWrap = styled.section`
  margin: 5rem 0;
  text-align: center;
`;

export const MainProductTitle = styled(Headline3)`
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  font-weight: 700;
`;

export const MainProductContents = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  line-height: 22px;
`;

export const BuyMainProduct = styled(Button)`
  background-color: ${Colors.black};
  border-radius: 2rem;
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.gray700};
  }
`;

export const NewProductWrap = styled.section`
  width: 80%;
  margin: 8rem auto;
`;

export const NewProductTitle = styled(Subtitle1)`
  margin-bottom: 1rem;
  font-size: 1.4rem;
`;

export const ProductCard = styled.div<ProductCardStyleProps>`
  padding: ${props => props.padding};
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
