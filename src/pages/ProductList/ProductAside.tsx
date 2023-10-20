import { FC } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ButtonColor, Colors } from '@class101/ui';
import * as S from './ProductAside.style';

const ProductAside: FC = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const setSize = (sizeId: string, e: React.MouseEvent<HTMLButtonElement>) => {
    if (e.target) {
      const searchSize = searchParams.getAll('size');

      if (!searchSize.includes(sizeId)) {
        searchSize.push(sizeId);
        searchParams.set('size', searchSize.join(','));
        setSearchParams(searchParams);
      }
    } else {
      const searchSize = searchParams
        .getAll('size')
        .filter(value => value !== sizeId);
      searchParams.delete('size');
      searchSize.forEach(value => searchParams.append('size', value));
      setSearchParams(searchParams);
    }
  };

  const setColor = (
    colorId: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    if (e.target) {
      const searchColor = searchParams.getAll('color');

      if (!searchColor.includes(colorId)) {
        searchColor.push(colorId);
        searchParams.set('color', searchColor.join(','));
        setSearchParams(searchParams);
      }
    } else {
      const searchColor = searchParams
        .getAll('color')
        .filter(value => value !== colorId);
      searchParams.delete('size');
      searchColor.forEach(value => searchParams.append('color', value));
      setSearchParams(searchParams);
    }
  };

  const setPrice = (
    min: string,
    max: string | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      searchParams.append('minPrice', min);
      if (max !== undefined) {
        searchParams.append('maxPrice', max);
      }
      setSearchParams(searchParams);
    } else {
      const searchMin = searchParams.getAll('minPrice');
      const searchMax = searchParams.getAll('maxPrice');

      searchParams.delete('minPrice');
      searchParams.delete('maxPrice');

      searchMin
        .filter(list => list !== min)
        .forEach(value => {
          searchParams.append('minPrice', value);
        });

      searchMax
        .filter(list => list !== max)
        .forEach(value => searchParams.append('maxPrice', value));

      setSearchParams(searchParams);
    }
  };

  return (
    <S.ProductAside>
      <S.ListTitle>
        {params.id === 'new'
          ? 'New'
          : params.id === 'clothes'
          ? 'Clothing'
          : params.id === 'shoes'
          ? 'Shoes'
          : params.id === 'goods'
          ? 'Items'
          : null}
      </S.ListTitle>
      <p>
        {/* <S.SizeCategory>성별</S.SizeCategory>
        {ASIDE_GENDER.map(el => {
          return (
            <S.PriceRangeWrap key={el.id}>
              <S.StyledLabel>
                <input type="checkbox">{el.gender}</input>
              </S.StyledLabel>
            </S.PriceRangeWrap>
          );
        })} */}
        <S.SizeCategory>사이즈</S.SizeCategory>
        <S.SizeList>
          {ASIDE_SIZE.map(el => {
            return (
              <li key={el.id}>
                <S.SizeButton
                  color={ButtonColor.WHITE}
                  onClick={(e: any) => setSize(el.sizeId, e)}
                >
                  {el.size}
                </S.SizeButton>
              </li>
            );
          })}
        </S.SizeList>
      </p>
      <p>
        <S.ColorCategory>색상</S.ColorCategory>
        <S.ColorList>
          {ASIDE_COLOR.map(el => {
            return (
              <li key={el.id}>
                <S.ColorBtn
                  color={el.color}
                  onClick={(e: any) => setColor(el.colorId, e)}
                />
              </li>
            );
          })}
        </S.ColorList>
      </p>
      <p>
        <S.PriceCategory>가격</S.PriceCategory>
        {ASIDE_PRICE_RANGE.map(el => {
          return (
            <S.PriceRangeWrap key={el.id}>
              <S.StyledLabel>
                <input
                  type="checkbox"
                  onChange={e => setPrice(el.min, el.max, e)}
                />
                {Number(el.min).toLocaleString()}원 ~{' '}
                {el.max ? `${Number(el.max).toLocaleString()}원` : ''}
              </S.StyledLabel>
            </S.PriceRangeWrap>
          );
        })}
      </p>
    </S.ProductAside>
  );
};

export default ProductAside;

const ASIDE_SIZE = [
  { id: 1, size: '220', sizeId: '1' },
  { id: 2, size: '230', sizeId: '2' },
  { id: 3, size: '240', sizeId: '3' },
  { id: 4, size: '250', sizeId: '4' },
  { id: 5, size: '260', sizeId: '5' },
  { id: 6, size: '270', sizeId: '6' },
  { id: 7, size: '280', sizeId: '7' },
  { id: 8, size: '290', sizeId: '8' },
  { id: 9, size: '300', sizeId: '9' },
  { id: 10, size: '310', sizeId: '10' }
];

const ASIDE_COLOR = [
  { id: 1, color: Colors.white, colorName: 'white', colorId: '1' },
  { id: 2, color: Colors.black, colorName: 'black', colorId: '3' },
  { id: 3, color: Colors.red700, colorName: 'red', colorId: '2' },
  { id: 4, color: Colors.yellow400, colorName: 'yellow', colorId: '6' },
  { id: 5, color: Colors.green900, colorName: 'green', colorId: '4' },
  { id: 6, color: Colors.blue700, colorName: 'blue', colorId: '5' }
];

const ASIDE_PRICE_RANGE = [
  { id: 1, min: '0', max: '50000' },
  { id: 2, min: '50000', max: '100000' },
  { id: 3, min: '100000', max: '150000' },
  { id: 4, min: '150000', max: '200000' },
  { id: 5, min: '200000' }
];

const ASIDE_GENDER = [
  { id: 1, gender: 'male', genderId: '1' },
  { id: 2, gender: 'female', genderId: '2' }
];
