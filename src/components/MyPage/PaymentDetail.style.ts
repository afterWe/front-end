import styled from 'styled-components';
import { Button } from '@class101/ui';

export const PaymentDetail = styled.div`
  margin: 0 auto;
  width: 1200px;
  height: 600px;
  border-top: 1px solid;
  margin-top: 80px;
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PaymentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 40px 0;
`;

export const Title = styled.div``;

export const Detail = styled.div``;

export const PaymentBox = styled.div`
  display: flex;
`;

export const PaymentTable = styled.table`
  width: 800px;
  thead {
    background-color: #ccc;
  }
  tbody {
  }
  th {
    height: 50px;
  }
  tr {
  }
  td {
    height: 60px;
    text-align: center;
    border-bottom: 1px solid #ccc;
  }
`;

export const DetailButton = styled(Button)`
  width: 120px;
  height: 30px;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: right;
  width: 800px;
  padding: 20px 0;
`;
