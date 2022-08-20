import './App.css';
import  {useEffect} from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Providers from './Utils/Providers';
import Quartal from './Components/Quartal';
import Story from './Components/Story/Story';
import { ImagesQ1, ImagesQ2 } from './Constants';
import {Navigate, Route, Routes} from 'react-router-dom';

function App() {

  useEffect(() => {
    document.oncontextmenu = () => false;
  }, [])

  return (
    <Providers>
      <Routes>
        <Route path="/2022/Q1" element={<Quartal images={ImagesQ1} name='Q1 2022'/>} />
        <Route path="/2022/Q2" element={<Quartal images={ImagesQ2} name='Q2 2022'/>} />
        <Route path="/Story/*" element={<Story />} />
        <Route path="/AboutMe" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Navigate to={"/"} state={null}/>} />
      </Routes>
    </Providers>
  );
}

export default App;