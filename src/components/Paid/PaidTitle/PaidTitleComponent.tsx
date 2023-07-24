import { styled } from 'styled-components';

const TitleWrapper = styled.h2`
  font-weight: 500;
  font-size: 25px;
`;

export interface PaidTitleComponentProps {
  text: string;
}

export default function PaidTitleComponent(props: PaidTitleComponentProps) {
  return <TitleWrapper>{props.text}</TitleWrapper>;
}
