import clsx from 'clsx';
import { useEffect } from 'react';
import SzopkVsTop from './SzopkVsTop';
import NightWithBears from './NightWithBears';
import RoeDeerPromenade from './RoeDeerPromenade';
import MorningAfterRain from './MorningAfterRain';
import RupicapraTatrica from './RupicapraTatrica';
import DroughtMonitoring from './DroughtMonitoring';
import BatNightMonitoring from './BatNightMonitoring';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import RoebuckTherithoryFight from './RoebuckTherithoryFight';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Navigate, Route, Routes } from 'react-router-dom';

export default function Story() {

  useEffect(() => {
    document.oncontextmenu = () => false;
  }, [])

  return (<Container>

      <HomeNavigation/>
            
      <Content/>

    </Container>
  );
}

// --------------------------------

function Content(){
  return <div className='flex justify-center'>
    <div className='pt-8 px-5 md:pt-10 m-5 text-white max-w-6xl w-full'>
      <Routes>
        <Route path="/RupicapraTatrica" element={<RupicapraTatrica/>} />
        <Route path="/BatNightMonitoring" element={<BatNightMonitoring/>} />
        <Route path="/SzopVsTop" element={<SzopkVsTop/>} />
        <Route path="/MorningAfterRain" element={<MorningAfterRain/>} />
        <Route path="/DroughtMonitoring" element={<DroughtMonitoring/>} />
        <Route path="/NightWithBears" element={<NightWithBears/>} />
        <Route path="/RoebuckTherithoryFight" element={<RoebuckTherithoryFight/>} />
        <Route path="/RoeDeerPromenade" element={<RoeDeerPromenade/>} />

        <Route path="/BatmanNightMonitoring" element={<Navigate to={"/BatNightMonitoring"}/>} />
        
      </Routes>
    </div>
  </div>
}

// --------------------------------

export function HomeNavigation(){
  return  <div className={clsx("flex flex-row top-0 left-0",
    "font-semibold text-xl hover:text-gray-300 transition",
    "text-gray-200 ml-5 duration-200 sticky p-3 md:p-5 lg:P-7",
    "hover:text-white bg-black")}>
    <Link className='flex space-x-2 justify-center items-center' to={"/"}>
      <FontAwesomeIcon icon={faHouse}/>
      <span>Home</span>
    </Link>
  </div>
}

// ----------------------------------

type ContainerProps = {
  children:React.ReactNode
}

function Container({children}:ContainerProps){
  return <div className={clsx(
    "bg-black snap-mandatory h-screen",
    "scrollbarhide scrollbarhide2",
    "border-0 focus:border-0 outline-none focus:outline-none",
    "focus-within:outline-none overflow-y-scroll")}>
    {children}
  </div>
}