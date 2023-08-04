import { styled } from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 100px auto 0;
  width: 100%;
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: ${props => `1px solid ${props.color}`};
`;

export const FooterNavList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 0;
  list-style: none;

  li:hover {
    color: red;
  }
`;

export const FooterContentWrap = styled.div`
  text-align: center;
  margin-top: 40px;
`;

export const InfoBox = styled.div`
  width: 100%;
`;

export const InfoList = styled.dl`
  list-style: none;

  dt {
    display: inline-block;
    font-size: 14px;

    &::after {
      content: ':';
      margin: 0px 4px;
    }
  }

  dd {
    display: inline-block;
    margin: 0;
    font-size: 14px;

    &::after {
      content: '|';
      margin: 0px 4px;
    }
  }
`;

export const ExplainBox = styled.div`
  width: 75%;
`;

export const ExplainList = styled.dl`
  list-style: none;
  margin: 0;
  word-wrap: break-word;
  word-break: keep-all;

  dt {
    font-size: 14px;

    &::after {
      content: ':';
      margin: 0px 4px;
    }
  }

  dd {
    display: inline;
    margin: 0 4px 0 0;
    font-size: 14px;
  }
`;
