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

export interface OrderDetailProps {
  orderDetail: {
    id: number;
    image: string;
    title: string;
    category: string;
    color: string;
    size: string;
    quantity: number;
    price: string;
  }[];
}

export interface OrderInfoProps {
  orderInfo: {
    id: number;
    date: string;
    address: string;
    price: string;
    payment_method: string;
  }[];
}
