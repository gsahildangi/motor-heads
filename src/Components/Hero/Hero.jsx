const Hero = ({
  heroData,
  heroCount,
  onSlideChange,
  onExploreClick,
  showText,
}) => {
  return (
    <div className="relative flex h-full flex-col px-8 pb-10 pt-20 md:px-12 md:pb-12 md:pt-24">
      <div
        className={`flex flex-1 flex-col justify-center transition-opacity duration-500 ${
          showText ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="max-w-xl text-3xl font-medium leading-snug text-white sm:text-4xl md:text-[2.35rem]">
          <p>{heroData.text1}</p>
          <p>{heroData.text2}</p>
        </div>
      </div>

      <div className="absolute bottom-10 left-8 md:bottom-12 md:left-12">
        <div className="inline-flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={onExploreClick}
            className="group flex items-center gap-3 rounded-full bg-white px-2 py-2 pl-6 text-gray-900 shadow-lg transition-all hover:bg-orange-50 hover:shadow-xl"
          >
            <span className="text-sm font-semibold md:text-base">
              Explore More Cars
            </span>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-600 text-lg text-white transition-transform group-hover:scale-105">
              →
            </span>
          </button>

          <ul className="flex list-none items-center justify-center gap-3">
            {[0, 1, 2, 3, 4].map((index) => (
              <li key={index}>
                <button
                  type="button"
                  aria-label={`Show slide ${index + 1}`}
                  onClick={() => onSlideChange(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-all ${
                    heroCount === index
                      ? 'scale-125 bg-orange-600'
                      : 'bg-white/70 hover:bg-white'
                  }`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Hero
