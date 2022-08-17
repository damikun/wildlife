import clsx from 'clsx';
import Card from './UI/Card';
import { Link } from 'react-router-dom';
import ThumbQ1 from "../Thumbs/thumb_q1.jpg"
import ThumbQ2 from "../Thumbs/thumb_q2.jpg"
import { useEffect } from 'react';
import { PageViews } from '@piwikpro/react-piwik-pro';

export default function Home() {

  useEffect(() => {
    PageViews.trackPageView('Homepage');
}, [])

  return (
    <div className={clsx("flex-1 md:flex flex-col bg-black w-screen",
      "md:items-center justify-items-center py-10 mx-auto max-w-9xl",
      "overflow-auto text-center h-screen align-top")}>
  
      <div className='flex flex-col-reverse lg:flex-row justify-between w-full my-auto'>
        <div className='text-white lg:w-1/2 space-y-2'>
          <StoryArea/>
          <AboutArea/>
        </div>
        
        <div className='flex flex-col lg:w-1/2'>
          <QuartalArea/>
        </div>

      </div>
  </div>
  );
}

// -----------------------------

function StoryArea(){
  return <div className='flex flex-col'>
  <div className='flex flex-col w-fit mx-auto mt-5 items-center justify-items-center justify-center'>
    <div>
      <h2 className='text-white font-bold text-4xl xl:text-5xl'>
        Photo story
      </h2>
      <h3 className='text-white font-semibold text-sm md:text-lg text-start -mt-1'>
        #Personal Notes
      </h3>
    </div>
  </div>
  <div className={clsx("flex flex-col m-10 h-full md:h-auto",
    "content-center justify-items-center align-middle text-lg",
    "items-center justify-center text-gray-200 space-y-2")}>
    <LinkWrapper to="/Story/BatNightMonitoring">Nočny odchyt netopierov</LinkWrapper>
    <LinkWrapper to="/Story/SzopVsTop">Stretnutie ochrany prirody</LinkWrapper>
    <LinkWrapper to="/Story/MorningAfterRain">Ráno po daždi</LinkWrapper>
    <LinkWrapper to="/Story/DroughtMonitoring">Monitoring zvery v období sucha</LinkWrapper>
    <LinkWrapper to="/Story/NightWithBears">Noc s medveďmi</LinkWrapper>
    <LinkWrapper to="/Story/RoebuckTherithoryFight">Srnčí súboj na hranici teritória</LinkWrapper>
  </div>
</div>
}

// -----------------------------

type LinkWrapperProps = {
  children:React.ReactNode;
  to:string
}

function LinkWrapper({children,to}:LinkWrapperProps){
  return <Link className='hover:text-white transition duration-200' to={to}>{children}</Link>
}

// -----------------------------

function QuartalArea(){
  return <div className='flex flex-col m-auto'>
    <div className='flex flex-col w-fit mx-auto mt-5 h-20 items-center justify-items-center justify-center'>
      <div>
        <h1 className='text-white font-bold text-4xl xl:text-5xl'>
          Wildlife 2022
        </h1>
        <h3 className='text-white font-semibold text-sm md:text-lg text-start -mt-1'>
          © Dalibor Kundrat
        </h3>
      </div>
    </div>

    <div className={clsx("flex flex-col m-10 h-full md:h-auto",
      "content-center justify-items-center align-middle",
      "md:grid md:grid-cols-2 items-center justify-center",
      "bg-black select-none")}>

      <Card name='Q1' isReady={true} to={"/2022/q1"} thumb={ThumbQ1} />
      <Card name='Q2' isReady={true} to={"/2022/q2"} thumb={ThumbQ2}/>
      <Card name='Q3' isReady={false}/>
      <Card name='Q4' isReady={false}/>
    </div>
  </div>
}

// -------------------------


function AboutArea(){
  return <div className='flex flex-col'>
      <div className='flex flex-col w-fit mx-auto mt-5 items-center justify-items-center justify-center'>
        <LinkWrapper to={"/AboutMe"}>
          <div>
            <h2 className='text-white font-bold text-4xl xl:text-5xl'>
              About me
            </h2>
            <h3 className='text-white font-semibold text-sm md:text-lg text-start -mt-1'>
              #Bio
            </h3>
          </div>
          </LinkWrapper>
        </div>
    </div>
}