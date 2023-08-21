import { FC } from 'react';
import * as S from './ProductList.style';
import { Colors } from '@class101/ui';

const ProductList: FC = () => {
  return (
    <S.ProductList>
      <S.ProductAside>
        <S.SizeCategory>사이즈</S.SizeCategory>
        <S.SizeList>
          {ASIDE_SIZE.map(el => {
            return (
              <li key={el.id}>
                <S.SizeButton>{el.size}</S.SizeButton>
              </li>
            );
          })}
        </S.SizeList>
        <S.ColorCategory>색상</S.ColorCategory>
        <S.ColorList>
          {ASIDE_COLOR.map(el => {
            return (
              <li key={el.id}>
                <S.ColorBtn color={el.color} />
              </li>
            );
          })}
        </S.ColorList>
        <S.PriceCategory>가격</S.PriceCategory>
        {ASIDE_PRICE_RANGE.map(el => {
          return (
            <S.StyledLabel key={el.id}>
              <input type="checkbox" /> {el.price_range}
            </S.StyledLabel>
          );
        })}
      </S.ProductAside>
    </S.ProductList>
  );
};

export default ProductList;

const ASIDE_SIZE = [
  { id: 1, size: 220 },
  { id: 2, size: 230 },
  { id: 3, size: 240 },
  { id: 4, size: 250 },
  { id: 5, size: 260 },
  { id: 6, size: 270 },
  { id: 7, size: 280 },
  { id: 8, size: 290 },
  { id: 9, size: 300 },
  { id: 10, size: 310 }
];

const ASIDE_COLOR = [
  { id: 1, color: Colors.white },
  { id: 2, color: Colors.black },
  { id: 3, color: Colors.red700 },
  { id: 4, color: Colors.yellow400 },
  { id: 5, color: Colors.green900 },
  { id: 6, color: Colors.blue700 }
];

const ASIDE_PRICE_RANGE = [
  { id: 1, price_range: ' 0 ~ 50,000 원' },
  { id: 2, price_range: '50,000 원 ~ 100,000 원' },
  { id: 3, price_range: '100,000 원 ~ 150,000 원' },
  { id: 4, price_range: '150,000 원 ~ 200,000 원' },
  { id: 5, price_range: '200,000 원 ~ ' }
];
