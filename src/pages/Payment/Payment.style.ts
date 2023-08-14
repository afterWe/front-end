import { styled } from 'styled-components';
import { Button, Colors, Divider } from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';

export const Payment = styled(PageContainer)`
  box-sizing: border-box;
`;

export const TitleBox = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'column')}
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const StyledDivider = styled(Divider)`
  padding: 2rem 0rem;
`;

export const PaymentInfoContainer = styled.div`
  margin: 2rem 0;
  ${({ theme }) => theme.flexBox('space-between', '', 'row')}
`;

export const DelieveryWrap = styled.div`
  width: 47%;
`;

export const DelieveryTitle = styled.h3`
  font-size: 1.5rem;
`;

// -------------정인님 컴포넌트 스타일 들어올 부분 시작---------

export const DelieveryGroupTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
`;

export const shippingList = styled.u`
  padding-top: 11%;
  font-size: 12px;
  color: #909090;
`;

export const InputBox = styled.div``;

export const PostCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

// -------------------끝---------------------------

export const PaymentInfoWrap = styled.div`
  width: 43%;
`;

export const PaymentTitle = styled.h3`
  font-size: 1.5rem;
`;

export const PaymentDetailInfoBox = styled.ul`
  margin: 2rem 0;
  font-size: 1.1rem;
  ${({ theme }) => theme.flexBox('space-between', '', 'row')}
`;

export const PaymentOrderListWrap = styled.div`
  height: 330px;
  overflow-y: auto;
`;

export const PaymentDetailImgGroup = styled.div`
  margin: 2rem 0;
  ${({ theme }) => theme.flexBox('flex-start', '', 'row')}
`;

export const OrderImageBox = styled.div`
  width: 10rem;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const OrderProductDetail = styled.ul`
  margin-left: 3rem;
  font-size: 1rem;
  ${({ theme }) => theme.flexBox('space-around', '', 'column')}
`;

export const OrderProductSubDetail = styled.ul`
  line-height: 1.5rem;
  font-size: 0.8rem;
`;

export const StyledButton = styled(Button)`
  margin: 3.5rem 0;
  height: 4rem;
  font-size: 1rem;
  background-color: ${Colors.black};
  border-radius: 2rem;
  color: ${Colors.white};
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.darkGray};
  }
`;

export const PaymentMethod = styled(DelieveryTitle)`
  margin: 3rem 0;
`;

export const PaymentMethodTitle = styled.h3`
  margin: 1.5rem 0;
`;
