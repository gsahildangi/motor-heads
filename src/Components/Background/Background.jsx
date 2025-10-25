import video2 from '../../assets/video2.mp4'
import image1 from '../../assets/image1.jpg'
import image2 from '../../assets/image2.jpg'
import image3 from '../../assets/image3.jpg'
import image4 from '../../assets/image4.jpg'
import image5 from '../../assets/image5.jpg'

const Background = ({ playStatus, heroCount }) => {

    const bgClasses = "fixed top-0 left-0 w-screen h-screen object-cover -z-10 animate-fadeIn";

    if (playStatus) {
        return (
            <video className={bgClasses} autoPlay loop muted>
                <source src={video2} type='video/mp4' />
            </video>
        )
    }
    else if (heroCount === 0) {
        return <img src={image1} className={bgClasses} alt="" />
    }
    else if (heroCount === 1) {
        return <img src={image2} className={bgClasses} alt="" />
    }
    else if (heroCount === 2) {
        return <img src={image3} className={bgClasses} alt="" />
    }
    else if (heroCount === 3) {
        return <img src={image4} className={bgClasses} alt="" />
    }
    else if (heroCount === 4) {
        return <img src={image5} className={bgClasses} alt="" />
    }
}

export default Background