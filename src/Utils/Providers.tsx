import { MotionConfig } from "framer-motion";
import LayoutProvider from "./LayoutProvider";
import React, { Suspense, useMemo, useState } from "react";
import { HashRouter as Router } from "react-router-dom";

type ProvidersProps = {
  children: React.ReactNode;
}

interface Resource<Payload> {
  read: () => Payload;
}

type imageCacheCtxType = {
  cache: Map<string, any>;
  add: (src:string, resource:Resource<any>) => void
  get:(src:string)=>Resource<any>
}

export const imageCacheCtx = React.createContext<imageCacheCtxType | null>(null);

export default function Providers({children}:ProvidersProps){

  const [protectedCache,setProtectedCache] = useState(new Map<string, any>());

  const state = useMemo(() => {

    return {
      cache: protectedCache,
      add: (src:string, resource:any)=> {
        setProtectedCache( new Map<string, any>([...protectedCache, [src,resource]]))
      },
      get:(src:string)=>{
        return protectedCache.get(src);
      }

    } as imageCacheCtxType

  }, [protectedCache])

  return (
      <MotionConfig reducedMotion='user'>
        <imageCacheCtx.Provider value={state}>
          <Router>
            <LayoutProvider>
              <Suspense fallback={null}>
                {children}
              </Suspense>
            </LayoutProvider>
          </Router>
        </imageCacheCtx.Provider>
      </MotionConfig>
  )
}