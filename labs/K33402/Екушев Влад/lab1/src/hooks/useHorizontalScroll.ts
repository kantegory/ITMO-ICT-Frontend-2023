import { useRef, useEffect } from 'react'
import { useThrottle } from '@react-hook/throttle'

export const useHorizontalScroll = <T extends HTMLElement = HTMLElement>() => {
  const elRef = useRef<T>(null)
  const [left, setLeft] = useThrottle(elRef.current?.scrollLeft || 0, 10, true)

  useEffect(() => {
    const el = elRef.current
    if (el) {
      const onWheel = (e: WheelEvent) => {
        if (e.deltaY === 0) return
        if (
          !(el.scrollLeft === 0 && e.deltaY < 0) &&
          !(
            el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 &&
            e.deltaY > 0
          )
        ) {
          e.preventDefault()
        }

        setLeft(el.scrollLeft + e.deltaY)
      }
      el.addEventListener('wheel', onWheel, { passive: true })
      return () => el.removeEventListener('wheel', onWheel)
    }
  }, [setLeft])

  useEffect(() => {
    elRef.current?.scrollTo({
      left,
      behavior: 'smooth',
    })
  }, [left])

  return elRef
}
