import React, { FC } from 'react';
import * as S from './ProductCard.style';
import { ProductCardProps } from '../../types/components';

const ProductCard: FC<ProductCardProps> = ({
  imgUrl,
  imgAlt,
  name,
  price,
  cardPadding,
  cardWidth
}) => {
  return (
    <S.ProductCard padding={cardPadding} width={cardWidth}>
      <S.ProductCardContainer>
        <S.ProductCardImgBox>
          <S.ProductCardImg src={imgUrl} alt={imgAlt} />
        </S.ProductCardImgBox>
        <S.ProductInform>
          <S.ProductName>{name}</S.ProductName>
          <S.ProductPrice>{price.toLocaleString()} 원</S.ProductPrice>
        </S.ProductInform>
      </S.ProductCardContainer>
    </S.ProductCard>
  );
};

export default ProductCard;
