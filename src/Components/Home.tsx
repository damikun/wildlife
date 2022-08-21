import clsx from 'clsx';
import Card from './UI/Card';
import { useEffect } from 'react';
import ThumbQ1 from "../Thumbs/thumb_q1.jpg"
import ThumbQ2 from "../Thumbs/thumb_q2.jpg"
import { LinkWrapper } from './UI/LinkWrapper';
import { PageViews } from '@piwikpro/react-piwik-pro';


export default function Home() {

  useEffect(() => {
    PageViews.trackPageView('Homepage');
}, [])

  return ( <div className={clsx("flex-1 md:flex flex-col bg-black w-screen",
        "md:items-center justify-items-center py-10 mx-auto max-w-9xl",
        "overflow-auto text-center h-screen align-top")}>
    
      <div className={clsx("flex flex-col-reverse lg:flex-row",
        "justify-between w-full my-auto")}>
        <div className='text-white lg:w-1/2 space-y-2 overflow-hidden'>
          <StorySection/>
          <AboutSection/>
        </div>
        
        <div className='flex flex-col lg:w-1/2 overflow-hidden'>
          <QuartalSection/>
        </div>
      </div>
    </div>
  );
}

// -----------------------------

function StorySection(){
  return <div className='flex flex-col'>
  <SectionHeader name='Photo story' desc='#Personal Notes'/>
  <div className={clsx("flex flex-col m-10 h-full md:h-auto",
    "content-center justify-items-center align-middle text-lg",
    "items-center justify-center text-gray-200 space-y-2",
    "overflow-hidden")}>
    <LinkWrapper to="/Story/BatNightMonitoring">Nočny odchyt netopierov</LinkWrapper>
    <LinkWrapper to="/Story/SzopVsTop">Stretnutie ochrany prirody</LinkWrapper>
    <LinkWrapper to="/Story/MorningAfterRain">Ráno po daždi</LinkWrapper>
    <LinkWrapper to="/Story/DroughtMonitoring">Jelenia zver v období sucha</LinkWrapper>
    <LinkWrapper to="/Story/NightWithBears">Noc s medveďmi</LinkWrapper>
    <LinkWrapper to="/Story/RoebuckTherithoryFight">Srnčí súboj na hranici teritória</LinkWrapper>
    <LinkWrapper to="/Story/RoeDeerPromenade">Srnčia promenáda</LinkWrapper>
  </div>
</div>
}

// -----------------------------

function QuartalSection(){
  return <div className='flex flex-col m-auto'>
    <SectionHeader name='Wildlife 2022' desc='© Dalibor Kundrat'/>
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

function AboutSection(){
  return <div className='flex flex-col'>
    <LinkWrapper to='/AboutMe'>
      <SectionHeader name='About me' desc='#Bio'/>
    </LinkWrapper>
  </div>
}

// -------------------------

type SectionHeaderProps = {
 name: string,
 desc:string,
 className?:string
}

function SectionHeader({name,desc,className}:SectionHeaderProps){
  return <div className={clsx("flex flex-col w-fit mx-auto h-20 items-center",
  "justify-items-center justify-center text-white", className)}>
  <div>
    <h1 className='font-bold text-4xl xl:text-5xl'>
      {name}
    </h1>
    <h3 className='font-semibold text-sm md:text-lg text-start -mt-1'>
      {desc}
    </h3>
  </div>
</div>
}