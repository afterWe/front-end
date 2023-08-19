import React, { FC, useEffect, useState } from 'react';
import * as S from './Main.style';
import {
  Carousel,
  CarouselNavigationPosition,
  Section,
  Slide
} from '@class101/ui';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCardProps } from '../../types/components';

const Main: FC = () => {
  const [newProductData, setNewProductData] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    fetch('./data/newProductList.json')
      .then(res => res.json())
      .then(data => {
        setNewProductData(data);
      });
  }, []);

  return (
    <main>
      <section>
        <S.MainBanner
          style={{ backgroundImage: `url('/images/main_banner.jpg')` }}
        />
      </section>
      <S.MainProductWrap>
        <S.MainProductTitle>달리는 너에게 무한한 서포트</S.MainProductTitle>
        <S.MainProductContents>
          새로운 리액트X 폼으로 부드럽고 안정적인 지지력을 선사하는 런베이스
          인피니티런 4. <br /> 지금 바로 만나보세요.
        </S.MainProductContents>
        <S.BuyMainProduct>구매하기</S.BuyMainProduct>
      </S.MainProductWrap>
      <Section title="New Product">
        <Carousel
          navigationPosition={CarouselNavigationPosition.TopRightOut}
          lgSlidesPerView={4}
          smSlidesPerView={2}
          pagination
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(order => (
            <Slide key={`ViewAllButton-${order}`}>
              <PlayGroundBanner
                backgroundColor={Colors[`blue${(((order - 1) % 6) + 1) * 100}`]}
              >
                배너{order}
              </PlayGroundBanner>
            </Slide>
          ))}
        </Carousel>
      </Section>
      {/* <S.NewProductWrapper></S.NewProductWrapper> */}
    </main>
  );
};

export default Main;
