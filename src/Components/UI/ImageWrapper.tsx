import React from "react";
import clsx from "clsx";
import Spinner from "./Spinner";
import { useMemo, useRef } from "react";
import { imageCacheCtx } from "../../Utils/Providers";
import SuspenseImg  from "../../Utils/SuspenseImage";
import { useOnScreen } from "../../Hooks/useOnScreen";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Suspense, useCallback, useContext, useEffect, useState } from "react";

type ImageWrapperProps = {
    onScreen?: (state:boolean,id:string) => void
    tabnum:number;
    src:string;
    alt?:string | undefined,
    id?:string
    blur?:boolean
    className?:string
}

const variantsWrapper = {
    visible: {opacity:1},
    hidden: {opacity:0.6}
}

const variantsImage = {
    visible: {scale:1.15},
    hidden: {scale:1},
}

const transitionWrapper = {duration:0.3, ease:"easeInOut"}

const transitionImage = {duration:8, delay:0, ease:"circOut"}

export default React.memo(ImageWrapper)

function ImageWrapper({src,alt,id,blur,tabnum,onScreen,className}:ImageWrapperProps){
  
    const ref = useRef(null);

    // This is used by animation with strict trashold defining image on viewport
    const [isOnScreen] = useOnScreen(ref);

    // This is used to preload image with dofferent trashhold as animations
    const [isIntersecting, disposeObserver] = useOnScreen(ref,0);

    const isReduced = useReducedMotion();

    const isOnScreenMemorised = useMemo(() => isReduced && isOnScreen? {} : isOnScreen?"visible":"hidden", [isOnScreen, isReduced])

    const imageStyleMemorised = useMemo(() => `xl:object-cover object-contain w-screen h-screen overflow-hidden md:pb-16 bg-black ${(blur || !isReduced)?? isOnScreen ?"blur-none":"blur-sm"}`, [isOnScreen,isReduced,blur])

    const [render,setRender] = useState(false);

    const imgCacheCtx = useContext(imageCacheCtx);

    useEffect(() => {
      if(isIntersecting && !render){
        setRender(true)
        disposeObserver()
      }
    }, [isIntersecting,render,disposeObserver])

    const [animate,setAnimate] = useState(false);

    const memorised = useCallback(
      (state: boolean, id: string) => {
        onScreen && onScreen(state,id)
      },
      [onScreen],
    )
    
    useEffect(() => {
      if(id && isOnScreen && animate){
        memorised(isOnScreen,id);
      }

    }, [isOnScreen, memorised,id,animate])

    const handleOnImageReady = useCallback(
      () => {
        setAnimate(true)
      },
      [setAnimate],
    )
    
    return (
      <div  id={id} 
            ref={ref} 
            tabIndex={tabnum}
            className={clsx("w-full h-full snap-center snap-always",
            "overflow-hidden p-4 border-black select-none",className)}>    
        <motion.div
          animate={isOnScreenMemorised}
          variants={variantsWrapper}
          transition={transitionWrapper}
          exit={{opacity:0}}
          className='rounded-lg overflow-hidden w-full h-full'>
         <Suspense fallback={<Spinner/>}>
            <AnimatePresence>
              {
                render &&  <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{duration:1}}>
                    <SuspenseImg
                      onLoad={handleOnImageReady}
                      hide={!animate}
                      cache={imgCacheCtx?.cache}
                      animate={isOnScreenMemorised}
                      variants={variantsImage}
                      transition={transitionImage}
                      className={imageStyleMemorised}
                      alt={alt}
                      src={src}/> 
                </motion.div>
                }
              </AnimatePresence>
            </Suspense>   
        </motion.div>
      </div>
    )
  }  