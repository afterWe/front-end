import { FC, useState } from 'react';
import * as S from './ProductList.style';
import { ButtonColor, Colors, Select } from '@class101/ui';
import ProductCard from '../../components/ProductCard/ProductCard';
import { PageContainer } from '../../Styles/common.style';

const ProductList: FC = () => {
  const [selectedValue, setSelectedValue] = useState('최신순'); // Initial value

  const options = [
    { label: '최신순', value: '최신순' },
    { label: '높은가격', value: '높은가격' },
    { label: '낮은가격', value: '낮은가격' }
  ];

  const handleSelectChange = (newValue: string) => {
    setSelectedValue(newValue);
  };

  return (
    <S.ProductList>
      <S.ProductAside>
        <p>
          <S.SizeCategory>사이즈</S.SizeCategory>
          <S.SizeList>
            {ASIDE_SIZE.map(el => {
              return (
                <li key={el.id}>
                  <S.SizeButton color={ButtonColor.WHITE}>
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
                  <S.ColorBtn color={el.color} />
                </li>
              );
            })}
          </S.ColorList>
        </p>
        <p>
          <S.PriceCategory>가격</S.PriceCategory>
          {ASIDE_PRICE_RANGE.map(el => {
            return (
              <S.StyledLabel key={el.id}>
                <input type="checkbox" /> {el.price_range}
              </S.StyledLabel>
            );
          })}
        </p>
      </S.ProductAside>
      <S.PageContainer>
        <S.FilterWrap>
          <Select
            value={selectedValue}
            options={options}
            onChange={event => handleSelectChange(event.target.value)}
          />
        </S.FilterWrap>
        <S.ProductCardContainer>
          <S.ProductCardWrap>
            {Products_List.map((product, index) => (
              <ProductCard
                cardWidth="250px"
                key={index}
                imgUrl={product.imgUrl}
                imgAlt={product.imgAlt}
                name={product.name}
                price={product.price}
                cardPadding="10px 10px 40px 10px"
              />
            ))}
          </S.ProductCardWrap>
        </S.ProductCardContainer>
      </S.PageContainer>
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

const Products_List = [
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 1',
    name: 'Product Name 1',
    price: '50,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 2',
    name: 'Product Name 2',
    price: '75,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 3',
    name: 'Product Name 3',
    price: '130,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 4',
    name: 'Product Name 4',
    price: '99,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 5',
    name: 'Product Name 5',
    price: '129,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 6',
    name: 'Product Name 6',
    price: '89,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 7',
    name: 'Product Name 7',
    price: '50,000'
  },
  {
    imgUrl: '/images/nike.jpg',
    imgAlt: 'Product Image 8',
    name: 'Product Name 8',
    price: '75,000'
  }
];
