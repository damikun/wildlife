import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

export default function RupicapraTatrica(){

    useEffect(() => {
        PageViews.trackPageView('Kamzík tatranský');
    }, [])
    
    return <>

        <Helmet>
            <title>Kamzík vrchovský tatranský</title>
            <meta
                name="description"
                content="Fotoreport kamzík tatranský"
            />
            <meta 
                name="author" 
                content="Dalibor Kundrat" 
            />
            <meta
                name="keywords"
                content="kamzík tatranský,rupicapra rupicapra tatrica,kamzik tatry,tatra chamois"
            />
            <meta
                property="og:title"
                content="Kamzík vrchovský tatranský"
            />
            <meta 
                property="og:description" 
                content="Fotoreport zachytávajúci kamzíka tatranského nad Wahlenbergovym plesom Furkotskej doliny." 
            />
            <meta property="og:type" content="article" />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg">

            <LoadableImage className="rounded-sm " src={GetUri("3e4kkh4jtxvwnkn/kamzik_tatransky_11.webp")} alt="Kamzik tatransky"/>

            <h1 className="text-xl font-semibold">Kamzík vrchovský tatranský</h1>

            <p><i className="italic text-gray-300">Tatra chamois</i> alebo <i className="italic text-gray-300">Rupicapra rupicapra tatrica</i> je označenie <b className="semi-bold">Kamzíka Tatranského</b>.</p>

            <p>Vyberám sa do Furkotskej doliny ponad <i className="italic">Wahlenbergovo pleso</i> (2150mnm).  Prichádzam podvečer a dávam si výšľap cca. 600 výškových nad Solisko, a rozkladam bivak aby som skoro ráno ušetril čas.</p>

            <p>V noci fúka a teplota cca. 1°C. Vietor mení pocitovku a počas noci preváram vodu a hádžem ju v petke do spacaku nech zbytočne nemrznem.</p>
        
            <p>Vstávam o 5:00, balím a vyberam sa do vrchnej časti doliny. Cestou vidím prvého kamzíka vysoko nadomnou na skalnom útese. Vravím si, že snaď takto vysoko nebudú všetky, no najbližšie 2km nevidieť nič živé. V doline je uplne ticho len v dialke počuť vodopád.</p>

            <p>Verím do posledného momentu, prinajhoršom to hodim cez hrebeň do vedľajšej doliny a bude z toho VHT.</p>

            <p>Nakoniec, ponad plesom vidieť 13 kamzíkov. Postupne ich fotím pri východe slnka.</p>

            <br/>

            <div className="w-full justify-center content-center">
                <iframe 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/9B0WauCZGDo" 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>

            <br/>
            
            <LoadableImage className="rounded-sm" src={GetUri("fn9ja05wyxvk0p5/kamzik_tatransky_02.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("zy3wyzxwvrusugl/kamzik_kundrat_detail.webp")} alt="Kamzik tatransky detail"/>

            <LoadableImage className="rounded-sm" src={GetUri("vdhvp8v736yi2tq/kamzik_tatransky_01.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("qnlxr1jof5oq1k1/kamzik_tatransky_05.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("99x0tyzwmzrf7pd/kamzik_tatransky_08.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("jwdp3gjdmnu8dxk/kamzik_tatransky_09.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("wmjjlw66sxszpv5/kamzik_tatransky_04.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("62cmqhfs7mndk24/kamzik_tatransky_07.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("ucasnkvnpjmdsn3/kamzik_tatransky_03.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("9wo7yb7qdv17urd/kamzik_tatransky_06.webp")} alt="Kamzik tatransky"/>

            <LoadableImage className="rounded-sm" src={GetUri("iuf4394a0yu6nry/kamzik_tatransky_12.webp")} alt="Kamzik tatransky"/>
        </div>
    </>
}