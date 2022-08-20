import clsx from 'clsx';
import { GetUri } from '../Constants';
import Container from './UI/Container';
import  LandingInfo  from './LadingInfo';
import { Link } from 'react-router-dom';
import ImageWrapper from './UI/ImageWrapper';
import  { useCallback, useEffect} from 'react';
import { PageViews } from '@piwikpro/react-piwik-pro';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type QuartalProps = {
  name :string
  images: string[]
}

export default function Quartal({name,images}:QuartalProps) {

  useEffect(() => {
    document.oncontextmenu = () => false;
  }, [])  

  useEffect(() => {
    PageViews.trackPageView(name);
  }, [])

  return (
    <Container>

      <HomeNavigation/>
            
      <LandingInfo name={name}/>

      <ImageList images={images}/>

    </Container>
  );
}

// --------------------------------

function HomeNavigation(){
  return  <div className={clsx("absolute flex flex-row top-0 left-0",
    "font-semibold text-xl text-gray-200 transition-all",
    "z-40 ml-7 mt-3 duration-200",
    "hover:text-white")}>
    <Link className='flex space-x-2 justify-center items-center' to={"/"}>
      <FontAwesomeIcon icon={faHouse}/>
      <span>Home</span>
    </Link>
  </div>
}

// --------------------------------

type ImageListProps = {
  images: string[]
}

function ImageList({images}:ImageListProps){

  const setId = useCallback((index:number)=>`img_${index+1}`,[])

  return <>
    {images.map((src,index)=>{
      return <ImageWrapper 
      id={setId(index)}
      tabnum={index+1}
      key={index}
      src={GetUri(src)} />
    })}
  </>
}