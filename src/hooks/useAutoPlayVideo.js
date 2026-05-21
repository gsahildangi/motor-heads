import { useCallback, useEffect, useRef, useState } from 'react'

const IDLE_MS = 4000
const SCROLL_TOP_THRESHOLD = 80

export function useAutoPlayVideo(heroRef) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [heroInView, setHeroInView] = useState(true)
  const idleTimerRef = useRef(null)

  const clearIdleTimer = useCallback(() => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current)
      idleTimerRef.current = null
    }
  }, [])

  const stopVideo = useCallback(() => {
    clearIdleTimer()
    setIsVideoPlaying(false)
  }, [clearIdleTimer])

  const startIdleTimer = useCallback(() => {
    clearIdleTimer()
    idleTimerRef.current = setTimeout(() => {
      setIsVideoPlaying(true)
    }, IDLE_MS)
  }, [clearIdleTimer])

  useEffect(() => {
    const heroEl = heroRef.current
    if (!heroEl) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting && entry.intersectionRatio >= 0.55
        setHeroInView(visible)

        if (!visible) {
          stopVideo()
        }
      },
      { threshold: [0, 0.55, 1] },
    )

    observer.observe(heroEl)
    return () => observer.disconnect()
  }, [heroRef, stopVideo])

  useEffect(() => {
    const onScroll = () => {
      stopVideo()

      if (heroInView && window.scrollY < SCROLL_TOP_THRESHOLD) {
        startIdleTimer()
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [heroInView, stopVideo, startIdleTimer])

  useEffect(() => {
    if (!heroInView) return

    startIdleTimer()
    return clearIdleTimer
  }, [heroInView, startIdleTimer, clearIdleTimer])

  return { isVideoPlaying, stopVideo, heroInView }
}
