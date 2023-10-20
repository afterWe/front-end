import React, { FC, useEffect, useState } from 'react';
import Modal from '../../components/Modal/Modal';
import * as S from './ProductDetail.style';
import {
  StarOutlineIcon,
  StarIcon,
  Reply,
  EditOutlineIcon,
  ReplySize,
  TrashIcon,
  ButtonIconPosition
} from '@class101/ui';
import { theme } from '../../Styles/theme';
import { ProductDetailProps } from '../../types/components';
import axios from 'axios';
import { BASE_URL } from '../../api';
import { useParams } from 'react-router-dom';

const ProductDetail: FC = () => {
  const params = useParams();
  const [isHoverImage, setIsHoverImage] = useState('');
  const [productData, setProductData] = useState<ProductDetailProps>({
    productId: 0,
    categoryName: '',
    serialNumber: '',
    name: '',
    price: 0,
    color: '',
    findSize: [],
    colors: [],
    imageInfo: []
  });
  const [isSelected, setIsSelected] = useState({
    size: '',
    color: productData.color || ''
  });
  console.log(isSelected.size);

  async function fetchProductData() {
    try {
      const response = await axios.get(`${BASE_URL}/products/${params.id}`);

      return setProductData(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  useEffect(() => {
    setIsSelected(prevProductData => ({
      ...prevProductData,
      color: productData.color || ''
    }));
  }, [productData]);

  const {
    categoryName,
    serialNumber,
    name,
    price,
    findSize,
    colors,
    imageInfo
  } = productData;

  const onSelectionChange = (e: any, property: string) => {
    const selectedValue = e.target.value || e.target.innerText;
    console.log(selectedValue);

    setIsSelected(prevProductData => ({
      ...prevProductData,
      [property]: selectedValue
    }));

    const firstImageOfSelectedColor = imageInfo.find(
      ({ colorName }) => colorName === selectedValue
    ) as { url: string } | undefined;
    if (firstImageOfSelectedColor) {
      setIsHoverImage(firstImageOfSelectedColor.url);
    }

    const productColorId = imageInfo.find(
      ({ colorName }) => colorName === selectedValue
    ) as { productIdByImage: number } | undefined;
    console.log(productColorId, productColorId?.productIdByImage);
  };

  const onHoverImage = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const imgElement = e.target as HTMLImageElement;
    const src = imgElement.getAttribute('src');
    if (src) {
      setIsHoverImage(src);
    }
  };

  const getDefaultImageUrl = () => {
    const defaultImage = imageInfo.find(
      ({ colorName }) => colorName === isSelected.color
    ) as { url: string } | undefined;

    return defaultImage ? defaultImage.url : 'image_url_here';
  };

  return (
    <S.ProductDetail>
      <S.ProductDetailUpperContainer>
        <S.ProductDetailImgWrap>
          <S.SubImgGroup>
            {imageInfo.map(
              ({ url, colorName }, index) =>
                colorName === isSelected.color && (
                  <S.SubImgBox key={index} onMouseOver={onHoverImage}>
                    <S.SubImg>
                      <S.ImgBox src={url} alt="product" />
                    </S.SubImg>
                  </S.SubImgBox>
                )
            )}
          </S.SubImgGroup>
          <S.MainImgGroup>
            <S.MainImgBox>
              <S.MainImg
                src={isHoverImage || getDefaultImageUrl()}
                alt="selected img"
              />
            </S.MainImgBox>
          </S.MainImgGroup>
        </S.ProductDetailImgWrap>
        <S.ProductDetailWrap>
          <p>
            <S.ProductName>{name}</S.ProductName>
            <S.Category>
              {categoryName} / {serialNumber}
            </S.Category>
            <S.Price>{price.toLocaleString()} 원</S.Price>
          </p>
          <p>
            <S.Category>색상 선택</S.Category>
            <S.SelectColorList>
              {colors?.map((color, idx) => {
                return (
                  <li key={idx}>
                    {isSelected.color !== color ? (
                      <S.SelectColorBtn
                        value={color}
                        color={color}
                        onClick={(e: any) => onSelectionChange(e, 'color')}
                      />
                    ) : color === 'white' ? (
                      <S.CheckedColorBtnWhite fillColor="black" />
                    ) : (
                      <S.CheckedColorBtn fillColor={color} />
                    )}
                  </li>
                );
              })}
            </S.SelectColorList>
          </p>
          <p>
            <S.Category>사이즈 선택</S.Category>
            <S.SelectSizeList>
              {findSize?.map(({ sizeId, sizes }) => {
                const SizeButton =
                  isSelected.size === sizes
                    ? S.SelectedSizeBtn
                    : S.UnSelectedSizeBtn;

                return (
                  <li key={sizeId}>
                    <SizeButton
                      onClick={(e: any) => onSelectionChange(e, 'size')}
                    >
                      {sizes}
                    </SizeButton>
                  </li>
                );
              })}
            </S.SelectSizeList>
          </p>
          <Modal
            opener={
              <S.AddCartBtn
                disabled={
                  isSelected.color.length <= 0 || isSelected.size.length <= 0
                }
              >
                장바구니
              </S.AddCartBtn>
            }
            contents="장바구니에 담겼습니다"
            successText="확인"
          />
        </S.ProductDetailWrap>
      </S.ProductDetailUpperContainer>
      <S.StyledDivider color={theme.gray} />
      <S.ProductDetailLowerContainer>
        <S.ReviewTitle>리뷰(3.5/5.0)</S.ReviewTitle>
        <S.ReviewForm>
          <div>
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
            <StarOutlineIcon />
          </div>
          <S.AddReviewGroup>
            <S.ReviewText placeholder="후기를 남겨주세요!" />
            <S.AddReviewBtnOuter>
              <S.AddReviewBtn type="submit">게시</S.AddReviewBtn>
            </S.AddReviewBtnOuter>
          </S.AddReviewGroup>
        </S.ReviewForm>
        <ul>
          <li>
            <Reply
              name="AfterWe"
              //댓글이 길어질 경우 다 보여줄 것인가
              disableLineClamp={false}
              readMoreText="전체보기"
              hideText="숨기기"
              hideReadMore={false}
              //대댓글 보여줄 것인지
              showChildren={false}
              size={ReplySize.LARGE}
              width="100%"
              //댓글 수정 후 보여줄 텍스트
              //nameDescription="수정됨"
              nameDescriptionColor={theme.darkGray}
              content={
                <div>
                  <div>
                    <StarIcon size={16} />
                    <StarIcon size={16} />
                    <StarIcon size={16} />
                    <StarOutlineIcon size={16} />
                    <StarOutlineIcon size={16} />
                  </div>
                  댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용
                  댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용
                  댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용
                  댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용 댓글내용
                </div>
                // 수정하기 버튼 클릭 시 생기는 input
                // <S.ReviewForm>
                //   <div>
                //     <StarOutlineIcon />
                //     <StarOutlineIcon />
                //     <StarOutlineIcon />
                //     <StarOutlineIcon />
                //     <StarOutlineIcon />
                //   </div>
                //   <S.AddReviewGroup>
                //     <S.ReviewText placeholder="후기를 남겨주세요!" />
                //     <S.AddReviewBtnOuter>
                //       <S.AddReviewBtn type="submit">게시</S.AddReviewBtn>
                //     </S.AddReviewBtnOuter>
                //   </S.AddReviewGroup>
                // </S.ReviewForm>
              }
              timeText="업로드 시간"
              rightAction={[
                <Modal
                  key="1"
                  opener={
                    <Reply.Action
                      icon={<TrashIcon />}
                      position={ButtonIconPosition.RIGHT}
                      hidden={false}
                    />
                  }
                  contents="댓글을 삭제 하시겠습니까?"
                  successText="확인"
                  cancelText="취소"
                />,
                <Reply.Action
                  key="2"
                  icon={<EditOutlineIcon />}
                  //수정하기 버튼 클릭 시 textarea로 바뀌는 로직
                  //onClick={() => {}}
                  position={ButtonIconPosition.LEFT}
                  hidden={false}
                />
              ]}
            />
          </li>
        </ul>
        <S.ShowMoreReview>리뷰 더보기</S.ShowMoreReview>
      </S.ProductDetailLowerContainer>
    </S.ProductDetail>
  );
};

export default ProductDetail;
