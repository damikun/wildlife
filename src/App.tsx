import './App.css';
import  {useEffect} from 'react';
import Home from './Components/Home';
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
        <Route path="wildlife/2022/Q1" element={<Quartal images={ImagesQ1} name='Q1 2022'/>} />
        <Route path="wildlife/2022/Q2" element={<Quartal images={ImagesQ2} name='Q2 2022'/>} />
        <Route path="wildlife/Story/*" element={<Story />} />
        <Route path="wildlife/" element={<Home />} />
        <Route path="wildlife/*" element={<Navigate to={"/"} state={null}/>} />
      </Routes>
    </Providers>
  );
}

export default App;