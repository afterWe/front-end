import { ReactNode } from 'react';

export interface GalleryProps {
  img: string;
}

export interface StyledInputProps {
  width?: string;
  margin?: string;
}

export interface StyledButtonProps {
  isMargin: boolean;
}

export interface ModalProps {
  opener: ReactNode;
  title?: string;
  contents: ReactNode | string;
  successText?: string;
  cancelText?: string;
  modalWidth?: string;
  onSuccess?: (() => void) | undefined;
  onCancel?: (() => void) | undefined;
}

export interface ModalSizeProps {
  width?: string;
}

export interface OrderInfoProps {
  id: number;
  date: string;
  address: string;
  price: string;
  payment_method: string;
}

export interface OrderDetailProps {
  id: number;
  image: string;
  title: string;
  category: string;
  color: string;
  size: string;
  quantity: number;
  price: string;
}

export interface OrderInfoComponentProps {
  orderInfoData: OrderInfoProps[];
  orderDetailData: OrderDetailProps[];
}

export interface OrderDetailComponentProps {
  orderDetailData: OrderDetailProps[];
}

export interface PaymentProps {
  id: number;
  name: string;
  image: string;
  type: string;
  quantity: string;
  price: number;
}

export interface PaymentInformProps {
  id?: number;
  productAmount: string;
  delieveryFee: string;
  totalPaymentAmount: string;
}

export interface PaymentShowRecipientProps {
  showRecipient: boolean;
}

export interface SelectColorProps {
  color: string;
}

export interface RadioBtnProps {
  value: string;
  name: string;
  contents: string | ReactNode;
  align?: 'top' | 'middle';
  btnMargin?: string;
  onChange: (value: string) => void;
}

export interface RadioBtnLabelProps {
  align?: 'top' | 'middle';
}

export interface StyledRadioBtnProps {
  btnMargin?: string;
}
