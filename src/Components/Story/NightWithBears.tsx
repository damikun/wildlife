import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

 export default function NightWithBears(){

    useEffect(() => {
        PageViews.trackPageView('Noc s medveďmi');
    }, [])

    return <>
        <Helmet>
            <title>Noc s medveďmi</title>
            <meta
                name="description"
                content="Noc s medveďmi"
            />
            <meta name="author" content="Dalibor Kundrat" />
            <meta
                name="keywords"
                content="medved, liptov medvede, fotenie medvede, video medvede"
            />
        </Helmet>
        <div className="space-y-5 text-base lg:text-lg">

            <h1 className="text-xl font-semibold">Noc s medveďmi</h1>

            <p>Už dlhšiu dobu mám vyhliadnutych niekoľko nových miest, kde by som chcel pozorovať medvede. V okolí hlavného hrebeňa nízkych tatier sú v podstate všade.</p>

            <p>Beriem bicykel a mierim do hory. Na mape mám niekoľko miest, ktoré si chcem prejsť a lepšie spoznať.</p>

            <p>Jedno z miest je aj <i>"Marusova"</i> Postupujem zo začiatku po zvážnici neskôr je to lesný chodník. Po ceste ma potešia lezecké sektory malé športové skaly odistene borhakmi. Predstavujem si, čo by urobil spolulezec ak by ho nečakane navštívil maco. Asi by musel mať grigri a vytiahnuť sa za mnou... Možno len priveľa rozmýšľam...</p>

            <p>Po Krátkej dobe sa chodník strati a ja kráčam aj s bajkom potokom, ktorý ústí na malú horskú lúku. Ta vyzerá ako z iného obdobia lopúchy o veľkosti stolov a porast miestami vyše hlavy. Ach načo som sa tu vybral na bicykli? Hneď si odpovedám slapat 15km pešo by sa mi sem nechcelo a času som ušetril až až.</p>

            <p>Prechádzam na ďalšiu lúku, kde miestne združenie práve buduje nový posed. Poloha je luxusná čudujem sa, že ho tu dodnes nemali. Nakoľko tu nenachádzam miesto, kde by som mohol bezpečne bivakovať volí presun na inú lokalitu asi 10km vzdialenú.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("sti8qi9c2004k3j/44.webp")} alt="Vyhlad na horskom chodniku"/>

            <p>Cestou natrafím na nejaké to varovanie priamo na zvážnici :)</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("niialgqr7zxq6n9/48.webp")} alt="Medvedie hovno"/>

            <p>10km v tunajšom teréne znamená "hore, dole, hore" nič, čo by som si užíval.</p>

            <p>Prichádzam na ďalšiu horskú lúku, kde som už v minulosti bol je tu posed s ideálnym výhľadom na všetky strany. Dá mi dostatok bezpečia cez noc.</p>

            <p>Naposledy som tu fotil jelene so zaujímavým sfarbením.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("40pqhkohgwb2pyy/26.webp")} alt="Zimno-letne sfarbenie mladeho jelena"/>

            <p>Pomaly začína zapadať slnko ja dojedám večeru a pripravujem sa, že možno niečo aj odfotím. Príroda maľuje nádherné farby.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("objf9ei6d3ksll0/49.webp")} alt="Vyhlad z horskej luky"/>

            <h4 className="font-semibold"># Po zotmení</h4>

            <p>Ako prvé vidím srnčiu. Ta, ale po chvíli hľadí do ľavá a uteká preč. Vravím si asi ide nejaký poľovník alebo niekto kto zablúdil? Už po minúte zisťujem, čo ich vyplašilo. Bol to maco.</p>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("36gvd0qa74qzriw/medved_kundrat.webp")} alt="Mlady medved"/>

            <LoadableImage className="rounded-sm shadow-sm" src={GetUri("nat80pdjgpi6mbe/maco_liptov_kundrat.webp")} alt="Maco video"/>

            <p>Je po 9 večer slnko už zapadlo, a to je ich čas. Fotiť sa nedá tak nahrávam aspoň krátke video, aby som si to spätne vedel pripomenúť a zanalyzovať. Aj, keď bude zrnité, vôbec nevadí.</p>

            <p>Maco postupne prichádza bližšie do môjho zorného poľa, neskôr ma dokonca aj zevetri a odbehne do neďalekej mladiny zkade onedlho vybehne späť na lúku.</p>

            <div className="w-full justify-center content-center">
                <iframe
                    className="w-full h-80 md:h-96 xl:h-128"
                    src="https://www.youtube.com/embed/HlMtZfrMCYE" 
                    title="Liptovsky maco" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />    
            </div>

            <p>Je pol desiatej a nastala tma. Mesiac je niekde schovaný nevidno absolútne nič. Len počuť medveďa, ktorého som natáčal, ako robí v okolí hluk. Ja idem spať</p>

            <p>Budím sa po polnoci na brechot srnčej. V okolí posedu počujem pohyb. Vyťahujem čelovku a svietim si v inak úplnej tme.</p>

            <p>V okolí sa napchávajú 4 medvede, úplne ignorujú svetlo hlavu majú dolu a idú ako kosačky.</p>

            <p>Budím sa o 3 ráno, keď začína byt šero. Pred štvrtou už svitá a vtáky pospevujú. Medvede už nevidieť, akoby sa po nich zľahla zem. Ani srnčia ani jelene.</p>

            <p>Ráno je hluché no nevadí. O 5 ráno balím veci a spúšťam sa po zvážnici dole do údolia k miestnej vajcovke, ktorou používajú, ako termanly prameň a jazierko.</p>

            <p>Máčam nohy, otužujem sa a jem nejaké zvyšky, čo my ostali z večere. Dávam si do cieľu sem ešte niekoľko krát prísť...</p>

        </div>
    </>
}