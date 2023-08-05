import { styled } from 'styled-components';
import { Button } from '@class101/ui';

export const Payment1 = styled.div`
  box-sizing: border-box;
  width: 80%;
  margin: 100px auto;
  /* padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px; */
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;

export const Header = styled.h2``;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  /* font-size: 20px; */
  font-weight: 600;
`;

export const BodyBodyWrap = styled.div``;

export const BodyWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3.5rem 0;
`;

export const DelieveryGroup = styled.div`
  /* border: 1px solid black; */
  width: 48%;

  /* padding-right: 10px; */
`;

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

export const DelieveryTitle = styled.div`
  margin: 30px 0;

  font-size: 18px;
`;

export const InputBox = styled.div``;

export const PaymentInfoGroup = styled.div`
  width: 35%;

  /* border: 1px solid black; */
`;

export const PaymentTitle = styled(DelieveryTitle)`
  /* padding: 0 0.8rem; */
`;

export const PaymentDetailBox = styled.div`
  /* padding: 0 0.8rem; */
`;

export const PaymentDetailInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem 0;
`;

export const PaymentDetailImgBox = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  padding: 1rem 0;
`;

export const OrderProductImg = styled.img`
  width: 38%;
  height: 8rem;
  background-color: #f5f5f5;
  border: none;
`;

export const OrderProductDetail = styled.div`
  padding-left: 1rem;
  line-height: 2rem;
`;

export const OrderProductDetailTitle = styled.div`
  font-size: 15px;
  font-weight: 700;
`;

export const OrderProductSubDetail = styled.div`
  font-size: 13px;
  font-weight: 500;
`;

export const StyledButton = styled(Button)`
  margin-left: 2.2rem;
  height: 48px;
`;

export const PostCodeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const GoToPay = styled.div`
  border: 1px solid black;
`;

export const PaymentMethod = styled(DelieveryTitle)`
  margin: 3.5rem 0;
  line-height: 2rem;
`;

export const PaymentMethodTitle = styled.div`
  margin: 1.5rem 0;
`;
