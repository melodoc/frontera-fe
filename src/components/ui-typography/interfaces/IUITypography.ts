import { TypographyVariantTypes } from "../types";
import { IUITypographyStyle } from "./IUITypographyStyle";

export interface IUITypography {
  variant: TypographyVariantTypes;
  children?: any;
  href?: string;
  title?: string;
  typographyStyle?: IUITypographyStyle;
  htmlFor?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLElement>) => void;
  onInput?: (event: React.ChangeEvent<HTMLElement>) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLElement>) => void;
}
