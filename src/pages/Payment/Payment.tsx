import { Button, ButtonSize, Divider, Input } from '@class101/ui';
import * as S from './Payment.style';

export default function Payment() {
  return (
    <S.Payment>
      <S.TitleWrap>
        <S.Title>결제하기</S.Title>
      </S.TitleWrap>
      <S.BodyBodyWrap>
        <S.BodyWrap>
          <S.DelieveryGroup>
            <S.DelieveryGroupTopBox>
              <S.DelieveryTitle>배송 옵션</S.DelieveryTitle>
              <S.shippingList>배송지 목록</S.shippingList>
            </S.DelieveryGroupTopBox>
            <S.InputBox>
              <Input label="이름 *" />
              <br />
              <Input label="휴대폰 번호 *" />
              <br />
              <Input size="md" inline label="우편번호" />
              <S.StyledButton>주소 검색</S.StyledButton>
              {/* <Button size="lg">주소 검색</Button> */}

              <br />
              <br />
              <Input label="도로명 주소 *" />
              <br />
              <Input label="상세 주소 *" />
              <br />
            </S.InputBox>
          </S.DelieveryGroup>
          <S.PaymentInfoGroup>
            <S.PaymentTitle>결제 정보</S.PaymentTitle>
            <S.PaymentDetailBox>
              <S.PaymentDetailInfoBox>
                <div>상품 금액</div>
                <div>
                  159,000<span>원</span>
                </div>
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <div>배송비</div>
                <div>무료</div>
              </S.PaymentDetailInfoBox>
              <S.PaymentDetailInfoBox>
                <div>총 결제 금액</div>
                <div>
                  159,000<span>원</span>
                </div>
              </S.PaymentDetailInfoBox>
              <hr />
            </S.PaymentDetailBox>
            <S.PaymentDetailImgBox>
              <S.OrderProductImg />
              <S.OrderProductDetail>
                <S.OrderProductDetailTitle>
                  나이키에어포스
                </S.OrderProductDetailTitle>
                <S.OrderProductSubDetail>여성 신발</S.OrderProductSubDetail>
                <S.OrderProductSubDetail>
                  수량: <span>1</span>
                </S.OrderProductSubDetail>
                <S.OrderProductSubDetail>
                  159,000 <span>원</span>
                </S.OrderProductSubDetail>
              </S.OrderProductDetail>
            </S.PaymentDetailImgBox>
            <Button fill>결제하기</Button>
          </S.PaymentInfoGroup>
        </S.BodyWrap>
        <S.PaymentMethod>
          <S.PaymentMethodTitle>결제 방법</S.PaymentMethodTitle>

          <input type="radio" id="direct" name="payment" value="direct" />
          <label htmlFor="direct">바로결제</label>
          <br />
          <input type="radio" id="kakaopay" name="payment" value="kakaopay" />
          <label htmlFor="kakaopay">카카오페이</label>
        </S.PaymentMethod>
      </S.BodyBodyWrap>
    </S.Payment>
  );
}
