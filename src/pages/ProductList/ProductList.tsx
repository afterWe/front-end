import { FC, useEffect, useState } from 'react';
import { useSearchParams, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductAside from './ProductAside';
import * as S from './ProductList.style';
import { Select } from '@class101/ui';
import ProductCard from '../../components/ProductCard/ProductCard';
import { ProductCardProps } from '../../types/components';
import { BASE_URL } from '../../api';

const ProductList: FC = () => {
  const [productListData, setProductListData] = useState<ProductCardProps[]>(
    []
  );
  const [selectedValue, setSelectedValue] = useState('최신순');
  const [hasMoreData, setHasMoreData] = useState(true);
  const [page, setPage] = useState(2);
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const location = useLocation();

  useEffect(() => {
    setProductListData([]);

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/products/${params.id}${location.search}`,
          {
            params: {
              page: 1,
              perPage: 9
            }
          }
        );
        setProductListData(response.data);
      } catch (err) {
        console.log('ERROR!');
      }
    };

    fetchData();
  }, [params.id, location.search]);

  const fetchMoreData = async () => {
    try {
      setTimeout(async () => {
        const res = await axios.get(
          `${BASE_URL}/products/${params.id}${location.search}`,
          {
            params: {
              page: page,
              perPage: 9
            }
          }
        );
        setProductListData(prevData => [...prevData, ...res.data]);

        res.data.length > 0 ? setHasMoreData(true) : setHasMoreData(false);

        setPage(prevPage => prevPage + 1);
      }, 1000);
    } catch (err) {
      console.log('ERROR!');
    }
  };

  const setSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (SORT_LIST.find(({ label }) => label === value)) {
      searchParams.set(
        'sorting',
        SORT_LIST.find(({ label }) => label === value)!.value
      );

      setSearchParams(searchParams);
      setSelectedValue(value);
    }
  };

  return (
    <S.ProductList>
      <ProductAside />
      <S.PageContainer>
        <InfiniteScroll
          dataLength={productListData.length}
          next={fetchMoreData}
          hasMore={hasMoreData}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>마지막 페이지 입니다.</b>
            </p>
          }
          style={{ overflow: 'hidden' }}
        >
          <S.FilterWrap>
            <Select
              value={selectedValue}
              options={SORT_LIST}
              onChange={setSort}
            />
          </S.FilterWrap>
          <S.ProductCardContainer>
            <S.ProductCardWrap>
              {productListData &&
                productListData.map((data, index) => (
                  <ProductCard
                    key={data.id}
                    cardWidth="250px"
                    imgUrl={data.url}
                    imgAlt={data.imgAlt}
                    name={data.name}
                    price={data.price}
                    cardPadding="10px 10px 40px 10px"
                    index={index}
                  />
                ))}
            </S.ProductCardWrap>
          </S.ProductCardContainer>
        </InfiniteScroll>
      </S.PageContainer>
    </S.ProductList>
  );
};

export default ProductList;

const SORT_LIST = [
  { id: 1, label: '최신순', value: '최신순' },
  { id: 2, label: '높은가격순', value: '높은가격순' },
  { id: 3, label: '낮은가격순', value: '낮은가격순' }
];
