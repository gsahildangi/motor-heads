import Background from './Components/Background/Background'
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {

  let heroData = [
    { text1: "Explore", text2: "what moves you" },
    { text1: "Uncover", text2: "your next obsession" },
    { text1: "Lose yourself in", text2: "what you love" },
    { text1: "Fuel", text2: "your curiosity" },
    { text1: "Follow", text2: "your passions" },
    // { text1: "Embrace", text2: "what excites you" },
    // { text1: "Discover", text2: "your next favorite thing" },
    // { text1: "Get lost in", text2: "what you love" },
    // { text1: "Experience", text2: "the things you adore" },
    // { text1: "Satisfy", text2: "your curiosity" }
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  // useEffect(()=> {
  //   //  console.log("hy");
  //    const interval = setInterval(() => {
  //         //  console.log("hy from inside");
  //         setHeroCount((prevCount) => {return prevCount===4?0:prevCount+1} )
  //     },3000);  

  //     return () => clearInterval(interval);
  //  },[])


  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App