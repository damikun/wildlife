import clsx from "clsx";
import React from "react";
import Scroller from "./UI/Scroller";
import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import { useOnScreen } from "../Hooks/useOnScreen";

const variantsWrapper = {
    visible: {opacity:1},
    hidden: {opacity:0.2}
}

const variantsText = {
    visible: {scale:1.2},
    hidden: {scale:1},
}

const transitionWrapper = {duration:0.3, ease:"easeInOut"}

const transitionText = {duration:0.4, delay:0.1, ease:"linear"}

const initialOptacity = {opacity:1}

const initialScale = {scale:1.2}

type LandingInfoProps = {
    name?: string
}

function LandingInfo({name}:LandingInfoProps){

    const ref = useRef(null);
    
    const isOnScreen = useOnScreen(ref);

    const isOnScreenMemorised = useMemo(() => isOnScreen  ? "visible":"hidden", [isOnScreen])    
    
    return(
        <motion.div
            key={"landing"}
            ref={ref}
            initial={initialOptacity}
            animate={isOnScreenMemorised}
            variants={variantsWrapper}
            transition={transitionWrapper}
            className={clsx("h-screen bg-black relative snap-start justify-center",
            "align-middle content-center flex overflow-hidden select-none",
            "border-0 focus:border-0 outline-none focus:outline-none",
            "focus-within:outline-none relative")}>

            <motion.div
                initial={initialScale}
                animate={isOnScreenMemorised}
                variants={variantsText}
                transition={transitionText}
                className='flex flex-col my-auto text-right'>
                    
                <h1 className={clsx("text text-7xl md:text-9xl text-white",
                "font-bold font-mono drop-shadow-lg shadow-white opacity-90")}>
                    {name}
                </h1>
    
                <h2 className={clsx("text-white text text-lg md:text-xl",
                "font-mono opacity-50 uppercase")}>
                    © Dalibor Kundrat
                </h2>

                <Scroller/>
            </motion.div>
        </motion.div>
    )
}

export default React.memo(LandingInfo)