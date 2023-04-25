import * as React from 'react'
import { parseCSSVar } from '../utils/helpers'

export default function useTheme() {
  const [theme, setTheme] = React.useState<{
    [key: string]: string | number
  } | null>(null)

  React.useEffect(() => {
    if (!theme) {
      const target = window ?? globalThis

      const filterCssVars: (x: string) => boolean = (name: string): boolean =>
        name.startsWith('--')

      const getCssRules: (def: string[], rule: CSSStyleRule) => string[] = (
        def: string[],
        rule: CSSStyleRule
      ): string[] =>
        (def =
          rule.selectorText === ':root'
            ? [...def, ...Array.from(rule.style).filter(filterCssVars)]
            : def)

      const getCssStyleSheets = (
        acc: string[],
        sheet: CSSStyleSheet
      ): string[] =>
        (acc = [...acc, ...Array.from(sheet.cssRules).reduce(getCssRules, [])])

      const styleSheets: CSSStyleSheet[] = Array.from(
        target.document.styleSheets
      ).filter(
        (sheet) =>
          sheet.href === null || sheet.href.startsWith(target.location.origin)
      )

      const rootVarsList: any[] = styleSheets.reduce(getCssStyleSheets, [])

      const cssVars = parseCSSVar(
        target.document.documentElement,
        ...rootVarsList
      )

      const colorTheme: { [key: string]: string | number } = cssVars
      console.log(' colorTheme==>', colorTheme)
      setTheme(colorTheme)
    }
  }, [theme])

  return theme as { [key: string]: string | number }
}
