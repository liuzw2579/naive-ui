import { type ExtractPropTypes } from 'vue'
import { NScrollbar, type ScrollbarTheme } from '../../_internal/scrollbar'

import { type ThemeProps } from '../../_mixins'

export interface ScrollTo {
  (x: number, y: number): void
  (options: { left?: number, top?: number, behavior?: ScrollBehavior }): void
}

export type ScrollBy = ScrollTo

export interface ScrollbarInst {
  scrollTo: ScrollTo
  scrollBy: ScrollBy
}

export type ScrollbarProps = Pick<
ExtractPropTypes<ThemeProps<ScrollbarTheme>>,
'themeOverrides'
> & {
  size?: number
  xScrollable?: boolean
  trigger?: 'none' | 'hover'
  onScroll?: (e: Event) => void
}
export const scrollbarProps = NScrollbar.props as ScrollbarProps

const Scrollbar = NScrollbar as unknown as (props: ScrollbarProps) => any

export default Scrollbar
