import { inovantiDefaultTheme, space } from "@inovanti/tokens"

export function getColors() {
  return Object.keys(inovantiDefaultTheme)
}

export function getSizes() {
  return Object.keys(space)
}