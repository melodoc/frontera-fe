import classnames from 'classnames';
import { useMemo, createElement } from 'react';

import { ClassBuilder } from 'services/class-builder';

import { UITypographyProps } from './interfaces';
import style from './ui-typography.module.scss';

export const UITypography: React.FC<UITypographyProps> = ({
  variant,
  children,
  href,
  title,
  typographyStyle,
  htmlFor,
  iconStyle,
  onClick,
  onBlur,
  onFocus,
  onInput,
  onKeyPress
}) => {
  const renderVariant = useMemo(() => {
    switch (variant) {
      case 'h1':
      case 'h2':
      case 'h3':
      case 'h4':
      case 'h5':
      case 'a':
      case 'span':
        return variant;
      case 'body1':
      case 'label':
      case 'body2':
      case 'subtitle1':
      case 'caption':
      default:
        return 'p';
    }
  }, [variant]);

  const classBuilder: ClassBuilder = new ClassBuilder();
  const fontClasses = classnames(style.button, {
    [style.typography__uppercase]: typographyStyle?.uppercase,
    [style.typography__weight_normal]: typographyStyle?.fontWeight === 'normal',
    [style.typography__weight_bold]: typographyStyle?.fontWeight === 'bold',
    [style.typography__weight_bolder]: typographyStyle?.fontWeight === 'bolder',
    [style.typography__icon_storage]: iconStyle?.icon === 'storage',
    [style.typography__icon_chevron_down]: iconStyle?.icon === 'chevronDown',
    [style.typography__icon_user]: iconStyle?.icon === 'user'
  });

  const classes = useMemo(() => {
    return classBuilder
      .append(style.typography)
      .append(fontClasses)
      .append(
        typographyStyle?.color === 'secondary' ? style.typography__color_secondary : style.typography__color_primary
      )
      .append(typographyStyle?.marginBottom ? style.typography__margin : undefined)
      .build();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typographyStyle?.uppercase]);

  return createElement(
    renderVariant,
    {
      className: classes,
      style,
      htmlFor,
      onInput,
      onClick,
      onFocus,
      onBlur,
      onKeyPress,
      href,
      title,
      'aria-describedby': 'aria-describedby'
    },
    children
  );
};
