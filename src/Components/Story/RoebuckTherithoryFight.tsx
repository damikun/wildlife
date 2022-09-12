import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

 export default function RoebuckTherithoryFight(){

    useEffect(() => {
        PageViews.trackPageView('Srnčí súboj na hranici teritória');
    }, [])
    
    return <>
        <Helmet>
            <title>Srnčí súboj na hranici teritória</title>
            <meta
                name="description"
                content="Srnčí súboj na hranici teritória"
            />
            <meta name="author" content="Dalibor Kundrat" />
            <meta
                name="keywords"
                content="srnči súboj, srnce, srnce bitka, roebuck fight, srnčie teritorium, zvedavy srnec"
            />
            <meta
                property="og:title"
                content="Srnčí súboj na hranici teritória"
            />
            <meta 
                property="og:description" 
                content="Najprv si vzájomne porovnávajú parožie a obaja predpokladajú, že to druhy vzdá a boj nebude. Tentokrát sa stretli rovnocenní súperi a skočia si do vlasov" 
            />
            <meta
                property="og:image"
                content="https://damikun.github.io/wildlife/og_image_srnci_suboj.png"
            />
            <meta property="og:type" content="article" />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg">

            <h1 className="text-xl font-semibold">Srnčí súboj na hranici teritória</h1>

            <p> Je začiatok leta. V miestom revíri sa to už zelená. Navonok suché lúky ožili a miesta, na ktoré sa dnes vyberám nebudú za dva mesiace jednoducho priechodne.</p>

            <p> Slnko už zapadá a teste pod hrebeňom stretávam jelene. Majú zimno/letny melir, ešte úplne nezhodili no prevláda už ta letná srst</p>

            <p> Fotiť sa zrovna nedajú, pozadie je nezaujimave a preto sa oto ani nepokúšam a sledujem, ako pomaly odchádzajú k lesu. Vyberám sa na vedľajšiu lúku. Je to kúsok lesom tam plánujem dať bivak a ráno uvidím, čo vyšpekulujem.</p>
            
            <p> Pred miestom, kde zvážnica ústí na lúku spomalím a zbadám srnca. Pasie sa v kľude na okraji.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("s1g3gjqe8c8ns2q/20.webp")} alt="Srnec na hranici teritoria"/>

            <p> Vyťahujem foťák a robím par záberov, keď zrazu naň začne pobrechavat ďalší srnec, ktorého síce počujem, ale nevidím.</p>

            <p> Behom par minút sú obaja na bojisku a schyľuje sa k rituálu, vyzve a boju na hranici srnčieho teritória.</p>

            <p> Najprv si vzájomne porovnávajú parožie a obaja predpokladajú, že to druhy vzdá a boj nebude. Tentokrát sa stretli rovnocenní súperi a skočia si do vlasov</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("i74su0a33mhkrdh/22.webp")} alt="Srnec na hranici teritoria"/>

            <p> Boj ma len jedného víťaza. Je fascinujúce sledovať cely rituál hovoriť niekomu tento zážitok bez videa by bolo k neuvereniu.</p>

            <div className="w-full justify-center content-center">
                <iframe
                    className="w-full h-80 md:h-96 xl:h-128"
                    src="https://www.youtube.com/embed/kA5M_OPrx0s" 
                    title="Srnci suboj na hranici teritoria" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />    
            </div>
            
            <p> Po súboji sa presúvam do neďalekého lesíka, ktorý je fľak na vrchu hrebeňa. Natiahnem hamacu a počuvam les. O 23:00 začána vlči orchester. Z nedalekej hory sa postupne ozyva zavyjanie a prenaša sa z lava do prava. Odhadujem to na dve početne svorky možno aj 15ks. Po kratkej dobe les utichne a ja zaspávam. Zobúdzam sa až ráno o piatej.</p>

            <p> Hneď z rana z hamaky sledujem na lúke jelene a srnčiu zver. Jeleň ma deformovane parožie, ale možno ešte niečo z toho narastie možno zhodil ľavú a pravú stranu s veľkým oneskorením aj to sa stáva.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("ccagu32r1zbleua/51.webp")} alt="Srnec na hranici teritoria"/>

            <p> Zaujme ma, ale srnec, ktorý ma nevie identifikovať a považuje ma za svojho a vyzýva ma k boju.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("s4uo48wgkgtua8v/23.webp")} alt="Srnec na hranici teritoria"/>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("wna1wk5zb0n31l4/21.webp")} alt="Srnec na hranici teritoria"/>

            <p> Nejakú dobu tam poskakuje a pózuje, čo mne vôbec neprekáža:)</p>

            <div className="w-full justify-center content-center">
                <iframe
                    className="w-full h-80 md:h-96 xl:h-128"
                    src="https://www.youtube.com/embed/JC6J9_R0J10" 
                    title="Zvedavy srnec" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />    
            </div>
        </div>
    </>
}