import styled from 'styled-components';
import {
  Button,
  CheckCircleIcon,
  CheckCircleOutlineIcon,
  Colors,
  Divider,
  Textarea
} from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';
import { SelectColorProps } from '../../types/components';
import { theme } from '../../Styles/theme';

export const ProductDetail = styled(PageContainer)`
  margin: 0 auto;
`;

export const ProductDetailUpperContainer = styled.article`
  ${({ theme }) => theme.flexBox(undefined, undefined, 'row')}
  width: 100%;
  height: 38rem;
`;

export const StyledDivider = styled(Divider)`
  padding: 3rem 0;
`;

export const ProductDetailLowerContainer = styled.article`
  width: 100%;
`;

export const ProductDetailImgWrap = styled.section`
  ${({ theme }) => theme.flexBox(undefined, undefined, 'row')}
  gap: 1.4rem;
  width: 60%;
  padding: 0 3rem 3rem;
`;

export const SubImgGroup = styled.div`
  margin: 0;
`;

export const SubImgBox = styled.div`
  width: 5rem;
  height: 7rem;
  margin-bottom: 1rem;
`;

export const SubImg = styled.button`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
  padding: 0;

  &:hover {
    cursor: pointer;
  }
`;

export const ImgBox = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const MainImgGroup = styled.div`
  width: 30rem;
  height: 100%;
`;

export const MainImgBox = styled.div`
  width: 100%;
  height: 100%;
`;

export const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;

export const ProductDetailWrap = styled.section`
  ${({ theme }) => theme.flexBox('space-between', undefined, 'column')}
  width: 40%;
  padding: 0 3rem 3rem;
`;

export const ProductName = styled.h3`
  margin: 0;
  line-height: 1.3;
  font-size: 30px;
  font-weight: 500;
`;

export const Category = styled.h5`
  margin: 0;
  line-height: 1.5;
  font-size: 17px;
  font-weight: 500;
`;

export const Price = styled.div`
  margin-top: 1.5rem;
  font-weight: 500;
`;

export const SelectColorList = styled.ul`
  ${({ theme }) => theme.flexBox(undefined, undefined, undefined)}
  width: 70%;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
`;

export const SelectColorBtn = styled.button<SelectColorProps>`
  width: 23px;
  height: 23px;
  margin-right: 0.9rem;
  background-color: ${({ color }) => color};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckedColorBtnWhite = styled(CheckCircleOutlineIcon)`
  width: 23px;
  height: 23px;
  margin-right: 0.9rem;
  border-radius: 50%;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

export const CheckedColorBtn = styled(CheckCircleIcon)`
  width: 23px;
  height: 23px;
  margin-right: 0.9rem;
  border-radius: 50%;
  box-sizing: border-box;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectSizeList = styled.ul`
  ${({ theme }) => theme.flexBox(undefined, undefined, undefined)}
  flex-wrap: wrap;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
`;

export const UnSelectedSizeBtn = styled(Button)`
  margin: 0 0.4rem 0.4rem 0;

  &:hover {
    background-color: ${theme.gray};
  }
`;

export const SelectedSizeBtn = styled(UnSelectedSizeBtn)`
  background: ${theme.gray};
`;

export const AddCartBtn = styled.button`
  width: 100%;
  height: 3.8rem;
  background-color: ${props =>
    props.disabled ? Colors.gray700 : Colors.black};
  border: none;
  border-radius: 2rem;
  color: ${Colors.white};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${Colors.gray700};
    cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  }
`;

export const ReviewTitle = styled.h5`
  margin-bottom: 1rem;
  font-weight: bold;
`;

export const ReviewForm = styled.form`
  margin-bottom: 3rem;
`;

export const AddReviewGroup = styled.div`
  margin-top: 0.3rem;
`;

export const ReviewText = styled(Textarea)`
  margin-bottom: 0.2rem;
  border-color: ${theme.gray};
  border-radius: 7px;
  resize: none;
`;

export const AddReviewBtnOuter = styled.div`
  ${({ theme }) => theme.flexBox('flex-end', undefined, undefined)}
  width: 100%;
`;

export const AddReviewBtn = styled(Button)`
  border-radius: 7px;
  background-color: ${Colors.black};
  color: ${Colors.white};

  &:hover {
    background-color: ${Colors.gray700};
  }
`;

export const ShowMoreReview = styled(Button)`
  height: auto;
  padding: 0;
  background: none;
  border: none;
  text-decoration: underline;
  color: ${theme.darkGray};

  &:hover {
    background: none;
  }
`;

export const ReviewIcons = styled.div`
  display: flex;
  justify-content: end;
`;
