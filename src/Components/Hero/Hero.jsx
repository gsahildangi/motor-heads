import arrowBtn from '../../assets/arrow_btn.png'
import playIcon from '../../assets/play_icon.png'
import pauseIcon from '../../assets/pause_icon.png'

const Hero = ({heroData, heroCount, playStatus, setPlayStatus, setHeroCount}) => {
    return (
        <div className='mx-auto mt-28 md:mt-38 max-w-6xl w-full px-8 md:px-12 overflow-hidden'> 
            <div className="text-white text-5xl md:text-4xl lg:text-5xl xl:text-6xl font-medium leading-tight">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            
            <div className="flex items-center gap-8 w-fit mt-14 py-1 px-2 pl-7 rounded-full bg-white cursor-pointer hover:scale-105 transition-transform">
                <p className="text-gray-800 text-lg font-medium">Explore More Cars</p>
                <img src={arrowBtn} className="w-12 h-12" alt="Arrow" />
            </div>
            
            <div className="text-white flex justify-between items-center mt-12 w-full">
                <ul className='flex items-center gap-5 list-none'>
                    {[0, 1, 2, 3, 4].map(index => (
                        <li 
                            key={index}
                            onClick={() => setHeroCount(index)} 
                            className={`w-3 h-3 rounded-full cursor-pointer transition-colors ${
                                heroCount === index ? 'bg-orange-600' : 'bg-white'
                            }`}
                        />
                    ))}
                </ul>
                
                <div className="flex items-center gap-6">
                    <img 
                        onClick={() => setPlayStatus(!playStatus)} 
                        src={playStatus ? pauseIcon : playIcon} 
                        className="cursor-pointer w-14 h-14 hover:scale-110 transition-transform"
                        alt='Play/Pause Button'
                    />
                    <p className="text-base text-lg">See the video</p>
                </div>
            </div>
        </div>
    )
}

export default Hero