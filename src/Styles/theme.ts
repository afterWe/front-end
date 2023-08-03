import { Colors } from '@class101/ui';

// font-weight -> light: 300, normal: 500, bold: 700
export const theme = {
  mobile: '(max-width: 767px)',
  tablet: '(max-width: 1279px)',
  keyColor: `${Colors.blue700}`,
  gray: `${Colors.gray400}`,
  darkGray: `${Colors.gray600}`,
  flexBox: (justify: string) =>
    `display: flex;
  justify-content: ${justify};`
};
