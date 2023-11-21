import { dark } from "@inovanti/tokens"

export function getColors() {
  return Object.keys(dark.colors)
}

export function getSizes() {
  return Object.keys(dark.space)
}