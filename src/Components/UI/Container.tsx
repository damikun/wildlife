import clsx from 'clsx';
import  { useCallback, useEffect, useRef} from 'react';
import { useKeyDownHold } from '../../Hooks/useKeyHold';

type ContainerProps = {
    children: React.ReactNode;
    scrollable?: boolean
}
  
export default function Container({children,scrollable=true}:ContainerProps){
  
    const ref = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      if(ref!= null){
         ref?.current?.focus();
      }
    }, [ref])
  
    const keyHold = useKeyDownHold(ref);  
  
    const handleKeyDownGlob = useCallback(
      (e:React.KeyboardEvent<HTMLDivElement>) => {
        if(keyHold){
          e.preventDefault();
          e.stopPropagation();
        }
      },
      [keyHold],
    )
    
    return (
        <div onKeyDown={handleKeyDownGlob} tabIndex={0} ref={ref} className={clsx(
            "snap-y bg-black snap-mandatory scroll-smooth h-screen",
            "first:pt-4 pt-10 pb-10 px-4 md:px-6 lg:px-10 xl:px-12",
            "scrollbarhide scrollbarhide2 pointer-events-auto",
            "border-0 focus:border-0 outline-none focus:outline-none",
            "focus-within:outline-none",
            scrollable && "overflow-y-scroll")}>
            {children}
        </div>
    )
}