import { GetUri } from "../../Constants";

export default function BatmanNightMonitoring(){

    return <div className="space-y-5 text-base lg:text-lg">

        <h1 className="text-xl font-semibold">Nočny odchyt netopierov</h1>

        <p>Na stretnutí ochrany prírody a krajiny v kopytovskej doline sa jeden večer uskutočnil nočný odchyt netoprieov v spolupraci s <a target="_blank" rel="noreferrer" className="italic text-gray-400 hover:text-blue-300" href="https://www.netopiere.sk">netopiere.sk</a> </p>
    
        <p>Jedna sa o formu monitoringu, kde sa tieto cicavce zachytávajú pomocou špeciálnej sieti v mieste ich večerného výskytu. </p>
            
        <p>V tomto prípade boli siete rozmiestnené v tvare pisanemna <i>"L"</i> po obvode malého jazera.</p>
        
        <br/>
        <img className="rounded-sm" src={GetUri("4xbbiheomgqnmtm/IMG_9423.jpg")} alt="Rozmiestnenie sieti"/>

        <p>Netopiere vo večerných hodinách vyrážajú na lov. Po rozmiestneni sieti a vzdialeniu sa na cca. 10m od odchytovej zóny zapíname echolokátor pre ultrazvukový záznam.</p>

        <p>K tomu dnes slúži obyčajný telefón s externým analyzátorom a aplikácia, ktorá následne nameraný signál spracuje.</p>

        <p>Spracovaný signál je možné sledovať v reálnom čase a taktiež počúvať ninekolko-násobné spomalenie a transormaciu do nášho zvukového spektra.</p>

        <br/>
        <img className="rounded-sm" src={GetUri("a05sf2adh0ibqq1/IMG_9228.jpg")} alt="Analyzator ultrazvukoveho spektra"/>

        <p>Každý z druhov sa vyznačuje špecifickým zvukom a frekvenciou, ktorú používa počas letu.</p>

        <p>Je nutne poznamenať, že ultrazvukové spektrum používajú pre let a s nim spojenú orientáciu nie pre bežné prejavy a komunikáciu.</p>

        <p>Aplikácia dokonca, po krátkej dobe záznamu napovie aké druhy netopierov zachytila.</p>

        <p>Cca. Po 30 minútach čakania ultrazvuk zaznamenal prelet nekolkych kusov, zapíname čelovky a mierime k odchytovym sieťam.</p>

        <br/>
        <img className="rounded-sm" src={GetUri("kqmwl8ye1j94uqd/IMG_9231.jpg")} alt="Odchyteny netopier"/>

        <p>Netopiere prelietavaju častokrát v skupine. Aj v našom prípade došlo k odchytu niekoľko kusov rovnakého druhu za krátky čas.</p>

        <p>Zachyt postupne odoberáme pomocou kožených rukacivc zo sieti. Je nutne zvýšiť pozornosť nakoľko majú pomerne ostré zuby a často reagujú kusanim a škriekanim</p>

        <p>Po uvoľnený zo sieti sa zisťuje pohlavie a vývojové štádium. Sledujú sa tiež defekty a neprirodzený vývoj či poškodenie krídel.</p>

        <br/>
        <img className="rounded-sm" src={GetUri("s5tmkjkx8y9jzuj/IMG_9356.jpg")} alt="Odchyteny netopier"/>

        <img className="rounded-sm" src={GetUri("ujdqfv1uiyehchs/IMG_9328.jpg")} alt="Odchyteny netopier"/>

        <img className="rounded-sm" src={GetUri("uaxbqidprl3so2o/IMG_9358.jpg")} alt="Odchyteny kridlo"/>

        <img className="rounded-sm" src={GetUri("px7kf6qjmy37jcv/IMG_9366.jpg")} alt="Odchyteny netopier"/>

        <img className="rounded-sm" src={GetUri("9hjcozgirt6rulj/IMG_9373.jpg")} alt="Odchyteny netopier"/>

        <img className="rounded-sm" src={GetUri("ep8rdxa572wlz1n/IMG_9396.jpg")} alt="Odchyteny netopier"/>

        <p>Monitoring trvá 2-3h a s pribúdajúcim časom intenzita preletov klesá, preto balíme, sadáme do aut a vraciame sa do lampu dať si pivo a späť.</p>

    </div>
}