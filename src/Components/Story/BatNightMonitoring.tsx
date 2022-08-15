import { GetUri } from "../../Constants";
import { Helmet } from 'react-helmet';

export default function BatNightMonitoring(){

    return <>

        <Helmet>
            <title>Nočny odchyt netopierov</title>
            <meta
                name="description"
                content="Nočný odchyt netopierov"
            />
            <meta 
                name="author" 
                content="Dalibor Kundrat" 
            />
            <meta
                name="keywords"
                content="netopiere, nočný odchyt, ultrazvuk, vek netopiera, ochrana netopierov, netopiere.sk, odchytové siete"
            />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg">

            <h1 className="text-xl font-semibold">Nočný odchyt netopierov</h1>

            <p>Na stretnutí ochrany prírody a krajiny v kopytovskej doline sa jeden večer uskutočnil nočný odchyt netoprieov v spolupráci s <a target="_blank" rel="noreferrer" className="italic text-gray-300 hover:text-blue-300" href="https://www.netopiere.sk">netopiere.sk</a> </p>
        
            <p>Jedna sa o formu monitoringu, kde sa tieto cicavce zachytávajú pomocou špeciálnej sieti (nárazova sieť) v mieste ich večerného výskytu. Hlavná aktivita je niekde medzi 20-23h (plávajúca)</p>

            <p>V tomto prípade boli siete rozmiestnené v tvare pisanemna <i>"L"</i> po obvode malého lesného jazera. Oblasť kde lovia možno označiť ako <i className="italic">lovny biotop</i>. Práve lesné oblsati sú z hľadiska monitoringu zaujímavé, nakoľko môžu byť domovom vzácnych druhov.</p>

            <br/>
            <img className="rounded-sm" src={GetUri("4xbbiheomgqnmtm/IMG_9423.jpg")} alt="Rozmiestnenie sieti"/>

            <p>Po rozmiestneni sieti a vzdialeniu sa na cca. 10m od odchytovej zóny, zapíname analyzátor pre ultrazvukový záznam.</p>

            <p>K tomu dnes slúži obyčajný telefón s externym  <a target="_blank" rel="noreferrer" className="italic text-gray-300 hover:text-blue-300" href="https://www.bat-man.sk/ultrazvukovy-detektor-na-netopiere-wildlife-acoustic-echo-meter-touch-2--ios/">detektorom a aplikácia</a> , ktorá následne nameraný signál spracuje.</p>

            <p>Spracovaný signál je možné sledovať v reálnom čase a taktiež počúvať niekolko-násobné spomalenie a transormáciu do nášho zvukového spektra. Nazvime to <i className="italic">zvukovy preklad</i>. To všetko sa deje počas letu netopiera.</p>

            <br/>
            <img className="rounded-sm" src={GetUri("a05sf2adh0ibqq1/IMG_9228.jpg")} alt="Analyzator ultrazvukoveho spektra"/>

            <p>Každý z druhov sa vyznačuje špecifickým zvukom a frekvenciou (20-110khz), ktorú používa. Je nutne poznamenať, že ultrazvukové spektrum používajú pre let a s nim spojenú orientáciu nie pre bežné prejavy a komunikáciu (sociálne prejavy)</p>

            <p>Aplikácia dokonca, po krátkej dobe záznamu napovie, aké druhy netopierov zachytila. Skúsení pozorovatelia, to dokonca niekedy vedia odhadnúť na základe zvukoveho prekladu alebo frekvenčného čísla. Je nutné brať do úvahy určitú mieru chybovosti, a preto sa všetko vyhodnocuje aj dodatočne.</p>

            <p>Svetla sme zhasli no v kľude sa bavíme. Netopiere nás vnímajú a pri prelete sa nám vyhnú. Cca. po 30 minútach čakania detektor zaznamenal prelet nekolkych kusov, zapíname čelovky a mierime k odchytovym sieťam.</p>

            <br/>
            <img className="rounded-sm" src={GetUri("kqmwl8ye1j94uqd/IMG_9231.jpg")} alt="Odchyteny netopier"/>

            <p>Netopiere prelietavaju častokrát v skupine. Aj v našom prípade došlo k odchytu niekoľko kusov rovnakého druhu za krátky čas.</p>

            <p>Zachyt postupne odoberáme pomocou kožených rukacivc zo sieti. Je nutne zvýšiť pozornosť nakoľko majú pomerne ostré zuby a často reagujú kusanim a škriekanim.</p>

            <p>Po uvoľneni zo siete sa zisťuje pohlavie a vývojové štádium. Sledujú sa tiež defekty a neprirodzený vývoj či poškodenie krídel.</p>

            <p>V tomto prípade bolo odchytených niekoľko netopierov druhu <i className="italic">Myotis</i></p>

            <br/>
            <img className="rounded-sm" src={GetUri("s5tmkjkx8y9jzuj/IMG_9356.jpg")} alt="Odchyteny netopier"/>

            <img className="rounded-sm" src={GetUri("ujdqfv1uiyehchs/IMG_9328.jpg")} alt="Odchyteny netopier"/>

            <img className="rounded-sm" src={GetUri("uaxbqidprl3so2o/IMG_9358.jpg")} alt="Odchyteny netopier kridlo"/>
            <br/>
            V krídle môžete pozorovať pôvodné prsty (hrubé čiary) a jemné cievy ktorými v blanách prúdi netopierom krv. Používajú to aj na chladenie krvného obehu v teplých dňoch, keď maváju krídlami naprázdno.
            <br/>
            <img className="rounded-sm" src={GetUri("px7kf6qjmy37jcv/IMG_9366.jpg")} alt="Odchyteny netopier"/>

            <img className="rounded-sm" src={GetUri("9hjcozgirt6rulj/IMG_9373.jpg")} alt="Odchyteny netopier"/>

            <img className="rounded-sm" src={GetUri("ep8rdxa572wlz1n/IMG_9396.jpg")} alt="Odchyteny netopier"/> 
            <p>Monitoring trvá 2-3h a s pribúdajúcim časom intenzita preletov klesá, preto balíme, sadáme do aut a vraciame sa do campu dať si pivo a späť.</p>

        </div>
    </>
}