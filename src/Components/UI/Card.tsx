import clsx from 'clsx';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { imageCacheCtx } from '../../Utils/Providers';
import SuspenseImg from '../../Utils/SuspenseImage';
import  {Suspense, useCallback, useContext, useMemo, useTransition} from 'react';

type CardProps = {
  name:string
  to?:string
  isReady:boolean
  thumb?:string
}

export default function Card({name,isReady,to,thumb}:CardProps){

  const navigate = useNavigate();

  //@ts-ignore
  const [_, startTransition] = useTransition({
      busyDelayMs: 2000,
  });

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {

        e.preventDefault();
        e.stopPropagation();
        
        startTransition(() => {
            navigate(to??"")
        });
    },
    [to, navigate],
  )

  const transitionWrapper = useMemo(() => {
    return {duration:0.3, ease:"easeInOut"}
  }, [])
  
  const imgCacheCtx = useContext(imageCacheCtx);
  
  var content = useMemo(() => {
    return  <motion.div
    className={clsx("flex w-52 h-52 xl:w-60 xl:h-60 border border-white m-2 rounded-md shadow-sm",
    "items-center justify-center content-center justify-items-center text-3xl lg:text-5xl",
    "shadow-white font-bold cursor-pointer relative overflow-hidden select-none",
    isReady ? "text-white":"text-white opacity-20 cursor-not-allowed")}>
      <div className='z-0 opacity-100'>{name}</div>
      <Suspense fallback={<></>}>
        <motion.div
          initial={{opacity:0.5}}
          whileHover={{scale:1.05, opacity:1}}
          whileTap={{scale:1.05, opacity:1}}
          transition={transitionWrapper}
          className='overflow-hidden absolute' >
            <SuspenseImg
              onLoad={()=>{}}
              cache={imgCacheCtx?.cache}
              alt={name}
              className='fill overflow-hidden'
              src={thumb}
            />     
        </motion.div>
      </Suspense>
      
    </motion.div>
  }
  , [name,isReady,thumb,imgCacheCtx?.cache,transitionWrapper])

  if(to){
    return <Link onClick={handleClick} to={to}>
    {content}
  </Link>  
  }else{
    return <>{content}</> 
  }

}