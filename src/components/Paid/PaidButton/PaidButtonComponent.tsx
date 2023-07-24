import { ButtonSize } from '@class101/ui';
import * as S from './PaidButtonComponent.style';

export default function PaidButtonComponent() {
  return (
    <S.ButtonGroup>
      <S.OnClickButton fill size={ButtonSize.LARGE}>
        마이페이지
      </S.OnClickButton>
      <S.OnClickButton fill size={ButtonSize.LARGE}>
        메인으로
      </S.OnClickButton>
    </S.ButtonGroup>
  );
}
