import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Background from '../Components/Background/Background'
import CarsSection from '../Components/CarsSection/CarsSection'
import Hero from '../Components/Hero/Hero'
import { HERO_IMAGES } from '../constants/heroAssets'
import { useAutoPlayVideo } from '../hooks/useAutoPlayVideo'
import { usePreloadImages } from '../hooks/usePreloadImages'
import { lockScroll, scrollToCars, unlockScroll } from '../utils/scrollToCars'

const heroData = [
  { text1: 'Explore', text2: 'what moves you' },
  { text1: 'Uncover', text2: 'your next obsession' },
  { text1: 'Lose yourself in', text2: 'what you love' },
  { text1: 'Fuel', text2: 'your curiosity' },
  { text1: 'Follow', text2: 'your passions' },
]

const HomePage = () => {
  const location = useLocation()
  const heroRef = useRef(null)
  const [heroCount, setHeroCount] = useState(0)
  const { isVideoPlaying, stopVideo } = useAutoPlayVideo(heroRef)

  usePreloadImages(HERO_IMAGES, heroCount)

  useEffect(() => {
    lockScroll()
    return () => unlockScroll()
  }, [])

  useEffect(() => {
    if (location.state?.scrollTo !== 'explore-cars') return

    stopVideo()
    const timer = setTimeout(() => {
      scrollToCars()
      window.history.replaceState({}, '')
    }, 100)

    return () => clearTimeout(timer)
  }, [location.state, stopVideo])

  useEffect(() => {
    if (isVideoPlaying) return

    const interval = setInterval(() => {
      setHeroCount((prev) => (prev === 4 ? 0 : prev + 1))
    }, 3000)

    return () => clearInterval(interval)
  }, [isVideoPlaying])

  const handleExploreClick = () => {
    stopVideo()
    scrollToCars()
  }

  return (
    <>
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <Background
          playStatus={isVideoPlaying}
          heroCount={heroCount}
          images={HERO_IMAGES}
        />
        <div className="relative z-10 h-full">
          <Hero
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            onSlideChange={(index) => {
              stopVideo()
              setHeroCount(index)
            }}
            showText={!isVideoPlaying}
            onExploreClick={handleExploreClick}
          />
        </div>
      </div>
      <CarsSection />
    </>
  )
}

export default HomePage
