import { useEffect } from 'react'

/** Warm-cache the next slide so transitions feel instant without loading every image upfront. */
export function usePreloadImages(images, activeIndex) {
  useEffect(() => {
    if (!images.length) return

    const nextIndex = (activeIndex + 1) % images.length
    const img = new Image()
    img.src = images[nextIndex]
  }, [images, activeIndex])
}
