import React, { useMemo } from "react";
import clsx from "clsx";
import { imageCacheCtx } from "../../Utils/Providers";
import  SuspenseImg  from "../../Utils/SuspenseImage";
import { useOnScreen } from "../../Hooks/useOnScreen";
import { AnimatePresence, motion } from "framer-motion";
import { Suspense, useCallback, useContext, useEffect, useState, useRef } from "react";

type ImageWrapperProps = {
    onScreen?: (state:boolean,id:string) => void
    tabnum?:number;
    src:string;
    alt?:string | undefined,
    id?:string
    className?:string
}

export default React.memo(LoadableImage)

function LoadableImage({src,alt,id,tabnum=0,className}:ImageWrapperProps){
  
    const ref = useRef(null);

    // This is used to preload image with dofferent trashhold as animations
    const [isIntersecting, disposeObserver] = useOnScreen(ref,0);

    const imgCacheCtx = useContext(imageCacheCtx);

    const [animate,setAnimate] = useState(false);

    const [rendered, setRendered] = useState(false)

    const [isDefaultDelay, setDefaultDelay] = useState(false);

    useEffect(() => {
      if(isIntersecting && !rendered){
        setRendered(true);
      }

      return ()=>{
        disposeObserver();
      }

    }, [isIntersecting,rendered,disposeObserver])
    
    const handleOnImageReady = useCallback(
      () => {
        setAnimate(true)
      },
      [setAnimate],
    )

    useEffect(() => {
      setTimeout(() => {
        setDefaultDelay(true);
      }, 250);
    }, []);


    return (
      <div  id={id} 
            ref={ref} 
            tabIndex={tabnum}
            className={clsx("w-full h-full min-h-40",
            "overflow-hidden select-none",className)}>    
         <Suspense fallback={<ImagePlaceholder animate={true}/>}>
          {rendered && isDefaultDelay?
            <AnimatePresence>
              {
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{duration:1}}>
                    <SuspenseImg
                      onLoad={handleOnImageReady}
                      hide={!animate}
                      cache={imgCacheCtx?.cache}
                      className={`overflow-hidden bg-black w-full h-full`}
                      alt={alt}
                      src={src}/> 
                </motion.div>
                }
              </AnimatePresence>:
            <ImagePlaceholder animate={false}/>
          }
            </Suspense>   
      </div>
    )
  }

  type ImagePlaceholderProps = {
    animate?:boolean
  }

  function ImagePlaceholder({animate}:ImagePlaceholderProps){
    return <div className={clsx("flex w-full bg-gray-500 opacity-10",
    "whitespace-pre h-80 rounded-sm",
    animate && "animate-pulse")}></div>
  }