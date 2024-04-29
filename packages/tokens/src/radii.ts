export const radii = {
  'rounded-none': '0px',
  'rounded-sm': '0.125rem', /* 2px */
  'rounded': '0.25rem', /* 4px */
  'rounded-md': '0.375rem', /* 6px */
  'rounded-lg': '0.5rem', /* 8px */
  'rounded-xl': '0.75rem', /* 12px */
  'rounded-2xl': '1rem', /* 16px */
  'rounded-3xl': '1.5rem', /* 24px */
  'rounded-full': '9999px',
}

export type RadiiType = keyof typeof radii