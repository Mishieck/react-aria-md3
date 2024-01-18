import {
  cssVar,
  sysTypescalePrefix
} from '@/styles/typography/get-typography-theme';
import { SizeLong } from '@/types/size';
import { TypographyProperty, TypographyScale } from '@/types/typography';
import React from 'react';

type HtmlProps = React.HtmlHTMLAttributes<HTMLElement>;

export type TypographyElement =
  | `h${1 | 2 | 3 | 4 | 5 | 6}`
  | 'label'
  | 'p'
  | 'span'
  | 'div';

export type TextProps = HtmlProps & {
  scale?: TypographyScale;
  size?: SizeLong;
  element?: TypographyElement;
  className?: string;
  children?: React.ReactNode;
};

export type ScaleTextProps = Omit<TextProps, 'scale'>;

const typoVar = (
  scale: TypographyScale,
  size: SizeLong,
  property: TypographyProperty
) => cssVar(sysTypescalePrefix(`${scale}-${size}-${property}`));

const styles: Record<TypographyScale, Record<SizeLong, React.CSSProperties>> = {
  body: {
    large: {
      fontSize: typoVar('body', 'large', 'size'),
      fontWeight: typoVar('body', 'large', 'weight'),
      lineHeight: typoVar('body', 'large', 'line-height')
    },
    medium: {
      fontSize: typoVar('body', 'medium', 'size'),
      fontWeight: typoVar('body', 'medium', 'weight'),
      lineHeight: typoVar('body', 'medium', 'line-height')
    },
    small: {
      fontSize: typoVar('body', 'small', 'size'),
      fontWeight: typoVar('body', 'small', 'weight'),
      lineHeight: typoVar('body', 'small', 'line-height')
    }
  },
  display: {
    large: {
      fontSize: typoVar('display', 'large', 'size'),
      fontWeight: typoVar('display', 'large', 'weight'),
      lineHeight: typoVar('display', 'large', 'line-height')
    },
    medium: {
      fontSize: typoVar('display', 'medium', 'size'),
      fontWeight: typoVar('display', 'medium', 'weight'),
      lineHeight: typoVar('display', 'medium', 'line-height')
    },
    small: {
      fontSize: typoVar('display', 'small', 'size'),
      fontWeight: typoVar('display', 'small', 'weight'),
      lineHeight: typoVar('display', 'small', 'line-height')
    }
  },
  headline: {
    large: {
      fontSize: typoVar('headline', 'large', 'size'),
      fontWeight: typoVar('headline', 'large', 'weight'),
      lineHeight: typoVar('headline', 'large', 'line-height')
    },
    medium: {
      fontSize: typoVar('headline', 'medium', 'size'),
      fontWeight: typoVar('headline', 'medium', 'weight'),
      lineHeight: typoVar('headline', 'medium', 'line-height')
    },
    small: {
      fontSize: typoVar('headline', 'small', 'size'),
      fontWeight: typoVar('headline', 'small', 'weight'),
      lineHeight: typoVar('headline', 'small', 'line-height')
    }
  },
  label: {
    large: {
      fontSize: typoVar('label', 'large', 'size'),
      fontWeight: typoVar('label', 'large', 'weight'),
      lineHeight: typoVar('label', 'large', 'line-height')
    },
    medium: {
      fontSize: typoVar('label', 'medium', 'size'),
      fontWeight: typoVar('label', 'medium', 'weight'),
      lineHeight: typoVar('label', 'medium', 'line-height')
    },
    small: {
      fontSize: typoVar('label', 'small', 'size'),
      fontWeight: typoVar('label', 'small', 'weight'),
      lineHeight: typoVar('label', 'small', 'line-height')
    }
  },
  title: {
    large: {
      fontSize: typoVar('title', 'large', 'size'),
      fontWeight: typoVar('title', 'large', 'weight'),
      lineHeight: typoVar('title', 'large', 'line-height')
    },
    medium: {
      fontSize: typoVar('title', 'medium', 'size'),
      fontWeight: typoVar('title', 'medium', 'weight'),
      lineHeight: typoVar('title', 'medium', 'line-height')
    },
    small: {
      fontSize: typoVar('title', 'small', 'size'),
      fontWeight: typoVar('title', 'small', 'weight'),
      lineHeight: typoVar('title', 'small', 'line-height')
    }
  }
};

const createCssStyles = (scale: TypographyScale, size: SizeLong) =>
  styles[scale][size];

const elements = (
  element: TypographyElement,
  props: React.HtmlHTMLAttributes<HTMLElement>,
  children?: React.ReactNode
) => {
  const elements: Record<TypographyElement, React.ReactElement> = {
    h1: <h1 {...props}>{children}</h1>,
    h2: <h2 {...props}>{children}</h2>,
    h3: <h3 {...props}>{children}</h3>,
    h4: <h4 {...props}>{children}</h4>,
    h5: <h5 {...props}>{children}</h5>,
    h6: <h6 {...props}>{children}</h6>,
    p: <p {...props}>{children}</p>,
    label: <label {...props}>{children}</label>,
    span: <span {...props}>{children}</span>,
    div: <div {...props}>{children}</div>
  };

  return elements[element];
};

export const Text = React.forwardRef<HTMLSpanElement, TextProps>(
  (props, ref) => {
    const {
      scale = 'body',
      size = 'medium',
      element = 'p',
      children,
      ...htmlProps
    } = props;

    const elementProps: React.HtmlHTMLAttributes<HTMLElement> & {
      ref?: React.Ref<HTMLSpanElement>;
    } = {
      ...htmlProps,
      ref,
      style: createCssStyles(scale, size)
    };

    return elements(element, elementProps, children);
  }
);

Text.displayName = 'Text';
