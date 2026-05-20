import { useEffect, useState } from 'react'

const bgClasses =
  'fixed inset-0 w-full h-full object-cover z-0 animate-fadeIn'

const Background = ({ playStatus, heroCount, images }) => {
  const [videoSrc, setVideoSrc] = useState(null)

  useEffect(() => {
    if (!playStatus || videoSrc) return

    import('../../assets/video2.mp4').then((module) => {
      setVideoSrc(module.default)
    })
  }, [playStatus, videoSrc])

  if (playStatus) {
    if (!videoSrc) {
      return (
        <img
          src={images[heroCount]}
          className={bgClasses}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
      )
    }

    return (
      <video
        className={bgClasses}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    )
  }

  return (
    <img
      src={images[heroCount]}
      className={bgClasses}
      alt=""
      fetchPriority="high"
      decoding="async"
    />
  )
}

export default Background
