import { light } from '@inovanti/tokens'
import 'styled-components'

type CustomTheme = typeof light

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

export type Colors = keyof typeof light.colors
export type FontSizes = keyof typeof light.fontSizes
export type FontWeights = keyof typeof light.fontWeights
export type LineHeights = keyof typeof light.lineHeights
export type Radii = keyof typeof light.radii
export type Spaces = keyof typeof light.space
