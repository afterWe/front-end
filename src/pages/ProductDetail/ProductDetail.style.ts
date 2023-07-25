import styled, { css } from 'styled-components';
import { Button, Colors, Input } from '@class101/ui';

interface Props {
  marginBottom?: string;
  color?: string;
  border?: string;
}

export const inputCommomStyle = {
  backgroundColor: `${Colors.gray400}`,
  borderColor: `${css`
    &:hover {
      ${Colors.red500};
    }
  `}`
};

export const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const ProductDetailUpperContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 85%;
  padding-bottom: 5rem;
  border-bottom: 1px solid ${Colors.gray400};
`;

export const ProductDetailLowerContainer = styled.section`
  width: 85%;
  padding-top: 3rem;
`;

export const ProductDetailImgWrap = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
  width: calc(100% - 456px);
  padding: 2rem;
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
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
`;

export const MainImgGroup = styled.div`
  width: 535px;
  max-width: 535px;
  max-height: 669px;
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
  width: 456px;
  padding: 2rem;
`;

export const ProductDetailGroup = styled.p<Props>`
  margin-bottom: ${({ marginBottom }) => marginBottom};
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
  display: flex;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
`;

export const SelectColorBtn = styled.button<Props>`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1rem;
  background-color: ${({ color }) => color};
  border: ${props =>
    props.color === Colors.white ? '1px solid black' : 'none'};
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export const SelectSizeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0.5rem 0;
  list-style: none;
`;

export const SelectSizeBtn = styled(Button)`
  margin: 0 0.4rem 0.4rem 0;
`;

export const AddCartBtn = styled(Button)`
  width: 92%;
  height: 3.8rem;
  background-color: ${Colors.black};
  border-radius: 2rem;
  color: ${Colors.white};
  font-size: 16px;
  font-weight: 500;

  &:hover {
    background-color: ${Colors.gray700};
  }
`;

export const ReviewForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const ReviewInput = styled(Input)`
  width: 99%;
`;
