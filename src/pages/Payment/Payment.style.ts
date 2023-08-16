import { styled } from 'styled-components';
import { Button, Colors, Divider, Headline2, Headline3 } from '@class101/ui';
import { PageContainer } from '../../Styles/common.style';

export const Payment = styled(PageContainer)`
  box-sizing: border-box;
`;

export const HeadlineBox = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'column')}
`;

export const Headline = styled(Headline2)`
  font-weight: 400;
`;

export const SubHeadline = styled(Headline3)`
  font-weight: 500;
  margin: 2rem 0;
`;

export const EditBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ModalBox = styled.div`
  margin-top: 4.8rem;
  margin-right: 1.8rem;
  cursor: pointer;
`;

export const PaymentInfoContainer = styled.div`
  margin: 2rem 0;
  ${({ theme }) => theme.flexBox('space-between', '', 'row')}
`;

export const DelieveryWrap = styled.section`
  width: 47%;
`;

export const AddressEditBox = styled.div`
  width: 95%;
`;

export const DelieveryTitle = styled.h3`
  font-size: 1.5rem;
`;

export const DelieveryList = styled.p`
  color: ${({ theme }) => theme.darkGray};
  font-size: 13.5px;

  &:hover {
    text-decoration: underline;
  }
`;

export const PaymentInfoWrap = styled.section`
  width: 43%;
`;

export const PaymentTitle = styled.h3`
  font-size: 1.5rem;
`;

export const PaymentDetailInfoBox = styled.dl`
  margin: 2rem 0;
  font-size: 1.1rem;
  ${({ theme }) => theme.flexBox('space-between', '', 'row')}
`;

export const StyledDivider = styled(Divider)`
  padding: 2rem 0rem;
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
  margin: 3rem 0;
`;

export const RadioBtnValue = styled.p`
  font-size: 1.2rem;
`;
