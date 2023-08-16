import { Colors } from '@class101/ui';

// font-weight -> light: 300, normal: 500, bold: 700
export const theme = {
  mobile: '(max-width: 767px)',
  tablet: '(max-width: 1279px)',
  keyColor: `${Colors.blue700}`,
  gray: `${Colors.gray400}`,
  darkGray: `${Colors.gray600}`,
  flexBox: (justify?: string, alignItem?: string, direction?: string) => {
    let flexString = 'display: flex;';

    if (justify !== undefined) flexString += `justify-content: ${justify};`;
    if (alignItem !== undefined) flexString += `align-items: ${alignItem};`;
    if (direction !== undefined) flexString += `flex-direction: ${direction};`;

    return flexString;  
  },
  positionBox: (
    position: string,
    top?: string,
    right?: string,
    bottom?: string,
    left?: string
  ) => {
    let positionString = `position: ${position};`;

    if (top !== undefined) positionString += `top: ${top};`;
    if (right !== undefined) positionString += `right: ${right};`;
    if (bottom !== undefined) positionString += `bottom: ${bottom};`;
    if (left !== undefined) positionString += `left: ${left};`;

    return positionString;
  }
};
