import { useEffect, useRef, useState } from 'react'

const mediaClasses =
  'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out'

const Background = ({ playStatus, heroCount, images }) => {
  const videoRef = useRef(null)
  const [videoSrc, setVideoSrc] = useState(null)

  useEffect(() => {
    import('../../assets/video2.mp4').then((module) => {
      setVideoSrc(module.default)
    })
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (playStatus) {
      video.play().catch(() => {})
    } else {
      video.pause()
      video.currentTime = 0
    }
  }, [playStatus])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <img
        key={heroCount}
        src={images[heroCount]}
        className={`${mediaClasses} animate-fadeIn ${
          playStatus ? 'opacity-0' : 'opacity-100'
        }`}
        alt=""
        fetchPriority="high"
        decoding="async"
      />

      {videoSrc && (
        <video
          ref={videoRef}
          className={`${mediaClasses} ${playStatus ? 'opacity-100' : 'opacity-0'}`}
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default Background
