export const lineHeights = {
  '3': '.75rem', /* 12px */
  '4': '1rem', /* 16px */
  '5': '1.25rem', /* 20px */
  '6': '1.5rem', /* 24px */
  '7': '1.75rem', /* 28px */
  '8': '2rem', /* 32px */
  '9': '2.25rem', /* 36px */
  '10': '2.5rem', /* 40px */
  'none': '1;',
  'tight': '1.25',
  'snug': '1.375',
  'normal': '1.5',
  'relaxed': '1.625',
  'loose': '2'
}

export type LineHeightsType = keyof typeof lineHeights

