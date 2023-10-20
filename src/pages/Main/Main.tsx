import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { BASE_URL } from '../../api';
import * as S from './Main.style';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCardProps } from '../../types/components';

const Main: FC = () => {
  const [newProductData, setNewProductData] = useState<ProductCardProps[]>([]);

  useEffect(() => {
    async function fetchNewProductData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/products/new?page=1&perPage=9`
        );

        return setNewProductData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchNewProductData();
  }, []);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <main>
      <section>
        <S.MainBanner
          style={{ backgroundImage: `url('/images/main_banner.jpg')` }}
        />
      </section>
      <S.MainProductWrap>
        <S.MainProductTitle>달리는 준영이에게 무한한 서포트</S.MainProductTitle>
        <S.MainProductContents>
          새로운 리액트X 폼으로 부드럽고 안정적인 지지력을 선사하는 런베이스
          인피니티런 4. <br /> 지금 바로 만나보세요.
        </S.MainProductContents>
        <S.BuyMainProduct>구매하기</S.BuyMainProduct>
      </S.MainProductWrap>
      <S.NewProductWrap>
        <S.NewProductTitle>New Product</S.NewProductTitle>
        <Slider {...carouselSettings}>
          {newProductData &&
            newProductData.map(product => (
              <div key={product.id}>
                <ProductCard
                  cardWidth="13rem"
                  cardPadding="2rem"
                  name={product.name}
                  price={product.price}
                  imgUrl={product.url}
                  imgAlt={product.imgAlt}
                />
              </div>
            ))}
        </Slider>
      </S.NewProductWrap>
    </main>
  );
};

export default Main;
