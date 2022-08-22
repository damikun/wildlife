import clsx from "clsx";
import Spinner from "./Spinner";
import SuspenseImage from "../../Utils/SuspenseImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import useOnClickOutside from "../../Hooks/useOnOutsideElementClick";
import React, { Suspense, useCallback, useContext, useMemo, useRef, useState } from "react";

type ModalProps = {
  children:React.ReactNode;
}

type imageModalCtxType = {
  open: (url:string) => void
  close:() => void
}

export const imageDetailCtx = React.createContext<imageModalCtxType>({open:()=>{},close:()=>{}});

export const useImgDetailCtx = () => useContext(imageDetailCtx);

export default function ImageDetailProvider({children}:ModalProps) {

  const [imageId, setImageId] = useState("");
  
  const ctx = useMemo(() => {

    return {
      open: (id:string)=> {
        console.log(id)
        if(id != null && id.length>1){
          setImageId(id);
        }
      },
      close:()=>{
        setImageId("")
      }
    } as imageModalCtxType
  }, [setImageId])


  const handleModalClose = useCallback(
    () => {
      setImageId("")
    },
    [setImageId],
  )

  const $divRef = useRef<HTMLInputElement>(null);
  
  useOnClickOutside($divRef, handleModalClose);

  const render = useMemo(() => imageId != null && imageId.length > 0, [imageId])

  return <imageDetailCtx.Provider value={ctx}>
    <>
    {
      render &&     
      <div className={clsx("p-5 md:p-10 2xl:p-16 absolute w-full h-full",
        "z-50 bg-gray-900 bg-opacity-60 select-none")}>
        <div ref={$divRef} className={clsx("flex w-full h-full relative border border-opacity-50",
        "rounded-md border-gray-700 bg-black overflow-hidden")}>

          <div onClick={handleModalClose} className={clsx("flex absolute w-10 h-10",
          "text-white text-2xl bg-gray-900 bg-opacity-20 hover:bg-gray-800",
          "align-middle leading-none justify-center cursor-pointer",
          "rounded-full right-5 top-5")}>
            <FontAwesomeIcon className="flex mx-auto my-auto" icon={faCircleXmark}/>
          </div>

          <Suspense fallback={<ImageLoadingPlaceholder/>}>
            <SuspenseImage className="flex object-cover mx-auto p-3 md:p-5 rounded" src={imageId}/>
          </Suspense>
        </div>
      </div>
    }
    {children}
    </>
  </imageDetailCtx.Provider>
}


function ImageLoadingPlaceholder(){
  return <div className="w-full h-full whitespace-pre">
    <Spinner/>
  </div>
}
