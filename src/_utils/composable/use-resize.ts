import { type Ref, onBeforeUnmount, onMounted } from 'vue'
import { resizeObserverManager } from 'vueuc'

export function useOnResize(
  elRef: Ref<HTMLElement | null>,
  onResize: ((entry: ResizeObserverEntry) => void) | undefined
): void {
  // it needn't be reactive since it's for internal usage
  if (onResize) {
    onMounted(() => {
      const { value: el } = elRef
      if (el) {
        resizeObserverManager.registerHandler(el, onResize)
      }
    })
    onBeforeUnmount(() => {
      const { value: el } = elRef
      if (el) {
        resizeObserverManager.unregisterHandler(el)
      }
    })
  }
}
