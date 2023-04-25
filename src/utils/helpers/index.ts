import { CssStyleClass } from '@fortawesome/fontawesome-svg-core'

export const isEven = (num: number | string): boolean => {
  const number = typeof num === 'string' ? parseInt(num) : num

  return number % 2 === 0
}

export const parseCSSVar = (
  element: HTMLElement,
  ...props: string[]
): { [key: string]: string | number } => {
  const computedStyle = window.getComputedStyle(element)

  const parsedValues: { [key: string]: string | number } = {}

  props.forEach((prop: any) => {
    const formatted = prop.replace('--', '')
    const rawValue = computedStyle.getPropertyValue(`--${formatted}`)
    const strippedValue = rawValue.replace('px', '')
    const parsedValue = parseFloat(strippedValue)
    const key = formatted.replace(/-([a-z])/g, (g: any) => g[1].toUpperCase())
    parsedValues[key] = Number.isNaN(parsedValue)
      ? rawValue.trim()
      : parsedValue
  })

  return parsedValues
}

export const toKebabCase = (str: string) =>
  str.replace(
    /[A-Z]+(?![a-z])|[A-Z]/g,
    ($, ofs) => (ofs ? '-' : '') + $.toLowerCase()
  )
