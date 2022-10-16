import { TypographyVariantTypes } from '../types';
import { UIIconStyle } from './ui-icon-style';
import { UITypographyStyle } from './ui-typography-style';

export interface UITypographyProps {
  variant: TypographyVariantTypes;
  children?: any;
  href?: string;
  title?: string;
  typographyStyle?: UITypographyStyle;
  htmlFor?: string;
  iconStyle?: UIIconStyle;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;
}
