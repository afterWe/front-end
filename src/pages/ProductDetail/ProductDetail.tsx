import React, { FC } from 'react';
import * as S from './ProductDetail.style';
import {
  Button,
  ButtonSize,
  Colors,
  Icon,
  Input,
  ModalBottomSheet
} from '@class101/ui';

const ProductDetail: FC = () => {
  return (
    <S.ProductDetail>
      <S.ProductDetailUpperContainer>
        <S.ProductDetailImgWrap>
          <S.SubImgGroup>
            <S.SubImgBox>
              <S.SubImg
                style={{ backgroundImage: `url('/images/nike.jpg')` }}
              />
            </S.SubImgBox>
            <S.SubImgBox>
              <S.SubImg
                style={{ backgroundImage: `url('/images/nike.jpg')` }}
              />
            </S.SubImgBox>
            <S.SubImgBox>
              <S.SubImg
                style={{ backgroundImage: `url('/images/nike.jpg')` }}
              />
            </S.SubImgBox>
          </S.SubImgGroup>
          <S.MainImgGroup>
            <S.MainImgBox>
              <S.MainImg src="/images/nike.jpg" alt="selected img" />
            </S.MainImgBox>
          </S.MainImgGroup>
        </S.ProductDetailImgWrap>
        <S.ProductDetailWrap>
          <S.ProductDetailGroup marginBottom="3rem">
            <S.ProductName>나이키 에어 포스 1 '07</S.ProductName>
            <S.Category>여성 신발</S.Category>
            <S.Price>139,000 원</S.Price>
          </S.ProductDetailGroup>
          <S.ProductDetailGroup marginBottom="3rem">
            <S.Category>색상 선택</S.Category>
            <S.SelectColorList>
              {SELECT_COLOR.map(color => {
                return (
                  <li key={color.id}>
                    <S.SelectColorBtn color={color.color} />
                  </li>
                );
              })}
            </S.SelectColorList>
          </S.ProductDetailGroup>
          <S.ProductDetailGroup marginBottom="1rem">
            <S.Category>사이즈 선택</S.Category>
            <S.SelectSizeList>
              {SELECT_SIZE.map(size => {
                return (
                  <li key={size.id}>
                    <S.SelectSizeBtn>{size.size}</S.SelectSizeBtn>
                  </li>
                );
              })}
            </S.SelectSizeList>
          </S.ProductDetailGroup>
          <ModalBottomSheet
            opener={<S.AddCartBtn>장바구니</S.AddCartBtn>}
            title="장바구니에 담겼습니다."
            subTitle=" "
            successText="확인"
          />
          {/* <S.AddCartBtn>장바구니</S.AddCartBtn> */}
        </S.ProductDetailWrap>
      </S.ProductDetailUpperContainer>
      <S.ProductDetailLowerContainer>
        <h5>리뷰(3.5/5.0)</h5>
        {/* 벌점 선택 시 <Icon.Star /> */}
        <Icon.StarOutline />
        <Icon.StarOutline />
        <Icon.StarOutline />
        <Icon.StarOutline />
        <Icon.StarOutline />
        <S.ReviewForm>
          <Input className="styled input" inputStyle={S.inputCommomStyle} />
          <Button type="submit" size={ButtonSize.LARGE}>
            등록
          </Button>
        </S.ReviewForm>
        {/* <p>
          <div>
            <span>asdf******</span>
            <span>(수정됨)</span>
            <button>수정</button>
            <button>삭제</button>
            <span>2023.08.02</span>
          </div>
          <div>
            <Icon.StarOutline />
            <Icon.StarOutline />
            <Icon.StarOutline />
            <Icon.Star />
            <Icon.Star />
          </div>
          <div>이 제품은 결국 반품했네요...</div>
          <form>
            <div>
              <Icon.StarOutline />
              <Icon.StarOutline />
              <Icon.StarOutline />
              <Icon.StarOutline />
              <Icon.StarOutline />
            </div>
            <input placeholder="댓글 수정" />
            <button type="submit">수정</button>
            <button>취소</button>
          </form>
        </p> */}
      </S.ProductDetailLowerContainer>
    </S.ProductDetail>
  );
};

export default ProductDetail;

const SELECT_COLOR = [
  {
    id: 1,
    title: 'white',
    color: Colors.white
  },
  {
    id: 2,
    title: 'black',
    color: Colors.black
  },
  {
    id: 3,
    title: 'red',
    color: Colors.red600
  },
  {
    id: 4,
    title: 'yellow',
    color: Colors.yellow400
  },
  {
    id: 5,
    title: 'green',
    color: Colors.green600
  },
  {
    id: 6,
    title: 'blue',
    color: Colors.blue600
  }
];

const SELECT_SIZE = [
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
