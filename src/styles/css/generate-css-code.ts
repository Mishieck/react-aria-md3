export type LayerStyles = [selector: string, styles: Record<string, string>];

export const createCssBaseLayer = (styles: Array<LayerStyles>) =>
  `@layer base {\n${styles
    .map(
      ([selector, styles]) =>
        `  ${selector}{\n${Object.entries(styles)
          .map(([property, value]) => `    ${property}: ${value};`)
          .join('\n')}\n  }`
    )
    .join('\n')}\n}\n`;
