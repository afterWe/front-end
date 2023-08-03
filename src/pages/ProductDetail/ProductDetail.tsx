import React, { FC } from 'react';
import { styled, css } from 'styled-components';

const ProductDetail: FC = () => {
  return <Div>ProductDetail</Div>;
};

export default ProductDetail;

const Div = styled.div`
  ${({ theme }) => css`
    ${theme.flexBox(
      'row',
      'center',
      'flex-start'
    )}/* Add other styles specific to the 'Div' component here */
  `}
`;
