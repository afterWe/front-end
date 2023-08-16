import React, { FC } from 'react';
import Modal from '../../components/Modal/Modal';
import * as S from './ProductDetail.style';
import {
  Colors,
  StarOutlineIcon,
  StarIcon,
  Reply,
  EditOutlineIcon,
  ReplySize,
  TrashIcon,
  ButtonIconPosition
} from '@class101/ui';
import { theme } from '../../Styles/theme';

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
          <p>
            <S.ProductName>나이키 에어 포스 1 '07</S.ProductName>
            <S.Category>여성 신발</S.Category>
            <S.Price>139,000 원</S.Price>
          </p>
          <p>
            <S.Category>색상 선택</S.Category>
            <S.SelectColorList>
              {SELECT_COLOR.map(color => {
                return (
                  <li key={color.id}>
                    <S.SelectColorBtn color={color.color} />
                    {/* {color.title === 'white' ? (
                      <S.CheckedColorBtnWhite fillColor="black" />
                    ) : (
                      <S.CheckedColorBtn fillColor={color.color} />
                    )} */}
                  </li>
                );
              })}
            </S.SelectColorList>
          </p>
          <p>
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
          </p>
          <Modal
            opener={<S.AddCartBtn>장바구니</S.AddCartBtn>}
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
