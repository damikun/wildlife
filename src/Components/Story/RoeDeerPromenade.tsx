import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

export default function RoeDeerPromenade(){

    useEffect(() => {
        PageViews.trackPageView('Srnčia promenáda');
    }, [])
    
    return <>

        <Helmet>
            <title>Srnčia promenáda</title>
            <meta
                name="description"
                content="Srnčia promenáda"
            />
            <meta 
                name="author" 
                content="Dalibor Kundrat" 
            />
            <meta
                name="keywords"
                content="srncia jar, srncia zver, srnec, srna, srny promenada, srnec jar"
            />
            <meta
                property="og:title"
                content="Srnčia promenáda"
            />
            <meta 
                property="og:description" 
                content="Je jar, obdobie keď sa srnám naštartuje gravidita aby mohli v Máji rodiť mladé srnčatá. U srncov dorastá parožie no stále ho majú v lyku, onedlho začnu vytĺkať" 
            />
            <meta
                property="og:image"
                content="https://damikun.github.io/wildlife/og_image_srncia_promenada.png"
            />
            <meta property="og:type" content="article" />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg">

            <h1 className="text-xl font-semibold">Srnčia promenáda</h1>

            <p>Je jar, obdobie keď sa srnám naštartuje gravidita aby mohli v Máji rodiť mladé srnčatá. U srncov dorastá parožie no stále ho majú v lyku, onedlho začnu vytĺkať.</p>

            <p>Odkrytá snehová prikrývka už nekomplikuje vyhľadávanie potravy. Pôda je premočená a lepí sa na ratice. Pri pozorovaní to pobaví.</p>

            <p>Som na budúcom repkovom poli. Zver sa stále drží v menších čriedach a je úplne pokojná.</p>
        
            <br/>
            <LoadableImage className="rounded-sm" src={GetUri("6dznan5k1o4d4rs/promenada_03.webp")} alt="Srncia zver promenada"/>

            <LoadableImage className="rounded-sm" src={GetUri("frw5iye4khot25j/promenada_02.webp")} alt="Srncia zver promenada"/>

            <LoadableImage className="rounded-sm" src={GetUri("dvm3j6h0qwk2rc2/promenada_01.webp")} alt="Srnec"/>

            <LoadableImage className="rounded-sm" src={GetUri("45k49nsfkg9j9a0/promenada_04.webp")} alt="Srna a srnec"/>

            <LoadableImage className="rounded-sm" src={GetUri("hupcdaus68eisls/promenada_05.webp")} alt="Srnky"/>     
        </div>
    </>
}