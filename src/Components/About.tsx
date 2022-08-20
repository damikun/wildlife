import clsx from 'clsx';
import { Helmet } from 'react-helmet';
import { GetUri } from '../Constants';
import LoadableImage from './UI/LodableImage';
import { HomeNavigation } from './Story/Story';
//@ts-ignore
import { useEffect, SuspenseList } from 'react';
import { PageViews } from '@piwikpro/react-piwik-pro';

export default function About() {

  useEffect(() => {
    PageViews.trackPageView('About');
  }, [])

  return (<>
    <Helmet>
        <title>Kto je Dalibor Kundrat</title>
        <meta
            name="description"
            content="Kto je Dalibor Kundrat"
        />
        <meta 
            name="author" 
            content="Dalibor Kundrat" 
        />
        <meta
            name="keywords"
            content="dalibor kundrat"
        />
    </Helmet>

    <Container>
        <HomeNavigation/>
        
        <div className='flex justify-center'>
          <div className='pt-8 px-5 md:pt-10 m-5 text-white max-w-6xl w-full'>
            <div className="space-y-5 text-base lg:text-lg">
              <p>Foteniu Wildlife sa venujem, pretože každa fotka má príbeh. Príroda ma neustále v niečom vyškolí.</p>

              <p>Život je o zažitkoch a príroda vám ich vie nadeliť koľko ste ochotný prijať, no musíte ju rešpektovať. Precestoval som množstvo veľkomest, no kľud a slobodu tam nenájdete.</p>

              <p>Stretnuť ma môžete na horách, v lese ba aj podzem občas zaleziem :)</p>

              <p>Je to v prvom rade záľuba profesne som zo sveta IT.</p>

              <p>Okrem Wildlife fotim na horách, pri skalnom lezení a iných vylomeninách.</p>

              <p className='font-semibold'>Dalibor</p>

              <SuspenseList  revealOrder={"forward"}>
                <div className='flex flex-col mx-auto space-y-2'>
                  <SuspenseList  revealOrder={"together"}>
                    <div className='flex w-full space-x-2 overflow-hidden '>
                      <LoadableImage tabnum={0} className="rounded-sm w-1/3" src={GetUri("ibbfuv2e0m3u56w/about_01.webp")} alt="Watzman"/>

                      <LoadableImage tabnum={1} className="rounded-sm w-1/3" src={GetUri("vybzndca93bpy7c/about_03.webp")} alt="Tatry"/>

                      <LoadableImage tabnum={2} className="rounded-sm w-1/3" src={GetUri("6zxkiti3x3q2doe/about_06.webp")} alt="Hory"/>
                    </div>

                    <div className='flex w-full space-x-2 overflow-hidden '>
                      <LoadableImage tabnum={3} className="rounded-sm w-1/3" src={GetUri("n44vr9dnih57f05/About_10.webp")} alt="Sopecne hory"/>

                      <LoadableImage tabnum={4} className="rounded-sm w-1/3" src={GetUri("eol6itffu7ed2eb/About_11.webp")} alt="Rakusko"/>

                      <LoadableImage tabnum={5} className="rounded-sm w-1/3" src={GetUri("50qyk775swms89v/About_12.webp")} alt="Iceland"/>
                    </div>

                    </SuspenseList>

                    <SuspenseList  revealOrder={"together"}>
                      <div className='flex flex-col space-y-2 w-full'>
                        <LoadableImage tabnum={6} className="rounded-sm" src={GetUri("w5vrs7lal0qoo7j/about_04.webp")} alt="Tatry"/>

                        <LoadableImage tabnum={7} className="rounded-sm" src={GetUri("xf5gxx0bkky2ix6/about_05.webp")} alt="Ladopad"/>

                        <LoadableImage tabnum={8} className="rounded-sm" src={GetUri("9otxzeibfl7ex8z/about_07.webp")} alt="Hory"/>
                      </div>
                    </SuspenseList>
                </div>
              </SuspenseList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}


// ----------------------------------

type ContainerProps = {
  children:React.ReactNode
}

function Container({children}:ContainerProps){
  return <div className={clsx(
    "bg-black snap-mandatory h-screen",
    "scrollbarhide scrollbarhide2",
    "border-0 focus:border-0 outline-none focus:outline-none",
    "focus-within:outline-none overflow-y-scroll")}>
    {children}
  </div>
}