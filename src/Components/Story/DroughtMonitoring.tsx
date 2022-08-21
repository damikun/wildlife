import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

 export default function DroughtMonitoring(){

    useEffect(() => {
        PageViews.trackPageView('Monitoring zvery v období sucha');
    }, [])

    return <>

        <Helmet>
            <title>Monitoring zvery v období sucha</title>
            <meta
                name="description"
                content="Monitoring zvery v období sucha"
            />
            <meta name="author" content="Dalibor Kundrat" />
            <meta
                name="keywords"
                content="vysoka zver, sucho, jelene, jelene sucho, jelene kukurica"
            />
            <meta
                property="og:title"
                content="Monitoring zvery v období sucha"
            />
            <meta 
                property="og:description" 
                content="Leto 2022 sebou priniesolo obdobie sucha. Rozhodol som sa práve počas največsich teplotných extrémov monitorovať vybrané územie a chovanie jelenej zvey." 
            />
            <meta
                property="og:image"
                content="https://damikun.github.io/wildlife/og_image_monitoring_sucha.png"
            />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg">

            <h1 className="text-xl font-semibold">Monitoring zvery v období sucha</h1>

            <p>Leto 2022 sebou priniesolo obdobie sucha. Rozhodol som sa práve počas največsich teplotných extrémov monitorovať vybrané územie a chovanie jelenej zvery.<span className="text-sm ml-1">(Výsledky krátko zhodnotím na konci textu)</span></p>
        
            <p>Na vybranom mieste už vyše mesiaca niesu zaznamenané zrážky ak zanedbám jeden až dva prípady a nameraných 0.5mm v najblizsej mernej stanici. To napovedá, že v oblasti je extrémne sucho.</p>
            <p>Lokalitu dobre poznám no naposledy som ju monitoroval v zime, keď sa tam nachádzalo cca 20KS jelenej zvery a odhadom asi 50kusov srnčej. Jelene tu prezimovali v čriede od mladších až po staršie kusy. Lane tu, ale v zime k pozorovaniu neboli. Populácia srnčie zvery bola na veľkosť okolitých lesíkov obrovská a koncentrovala sa na jedno miesto.</p>
            <p>Osobne som predpokladal, že jelene sa v tejto lokacii štandardné v lete nevyskytujú, možno tak sporadicky no pestrosť potravy ma presvedčila o opaku. Taktiež je nutne poznamenať, že som narazil na dva automatické rozosievače potravy umiestnené rovno pred posedmi, ale k tomu sa radčej nevyjadrujem.</p>

            <p>Jelene tu majú v okolí lesíkov k dispozícii repkove, kukuričné a pšeničné pole. Obzvlášť kukurica poskytuje potravu bohatú na vodu, nakoľko rastie aj počas povrchového sucha a nema tendenciu vysychať</p>
            
            <p>V skorých ranných hodinách pozorujem v repke pravidelne niekoľko kusov jeleňov. Pred východom slnka sa premiestňujú na kukuričné pole, kde opäť s nadčenim jedia, čo vidia.</p> 

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("7n2amztsbnprp89/08.webp")} alt="Ranne jelene kukurica"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("2ute8sk1oi39nzh/35.webp")} alt="Ranne jelene kukurica"/>

            <p>Nefotím a nepribližujem sa za každú cenu. Pozorujem ich správanie a ktorým smerom sa vyberu.</p>

            <p>Asi po 40minútach pomaly smerujú dolu k okraju lesa. Miesto kam idú poznám. Plánujem, že sa sem vrátim.</p>

            <h4 className="font-semibold"># Podvecer</h4>

            <p>O piatej s obrovským časovým predstihom sa vraciam na kukuričné pole. Chcel som sa totiž na mieste rozhodnúť podľa slnka a smeru vetra kam sa zašijem.</p>

            <p>Volím vyvyšene stanovisko neďaleko miesta, kde ráno zaliezli do lesa. V batohu mám jedlo a hlavne vodu. Vravím si tak toto je aj namna priveľa 31 v tieni</p>

            <p>Asi o 18:00 sa objavuje na horizonte paroh. Sám tomu neverím. Je to voľáko priskoro. Za asi 5 minút už vidím cca 8KS jeleňov vychádzajúcich z ležoviska na kukuričné pole.</p>
            
            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("4hgzbovvshflg0h/07.webp")} alt="Skora jelenia dvojica"/>

            <div className="w-full justify-center content-center">
                <iframe
                    className="w-full h-80 md:h-96 xl:h-128"
                    src="https://www.youtube.com/embed/qk9LT7qp3hA" 
                    title="Starsie jelene predvecerom" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />    
            </div>
            
            <p>Idú, ako na promenáde zvolil som si dobre no postupne asi do 30min jeden po druhom zas vchádzajú do lesa. Prešli z ľavá do práva. V prvom rade by som poznamenal, že v takom čase a teplotách jelene vonku štandardné neuvidíte. Terén a smer pohybu napovedá, že proste boli smädné a nakoľko večšina mlák, behnisk a rýh je úplne vyschla, nemajú veľa možnosti kam chodiť piť.</p>

            <p>Čakám či neprídu ďalšie no do večera je pole prázdne, vrátim sa, teda ráno.</p>

            <h4 className="font-semibold"># Rano</h4>

            <p>Je 5:00 a ja prichádzam na kopec. V repke vidieť mladšie jelene, ktoré zachádzajú do lesa. Po príchode na kukuričné pole pozorujem ďalšie kusy a takmer identicky scenár ako naposledy. Jelene zalezú na to iste miesto.</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("ladqczb5a8xti6b/12.webp")} alt="Mlady jelen v repkovom poli"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("8hmp380aedzjzf0/25.webp")} alt="Ranne jelene"/>

            <p>Rozhodujem sa, že pred večerom pôjdem bližšie obhliadnuť miesto, kde zaliezajú s vedomím, že môžu niekde v okolí polihavat a vymýšľam stratégiu, ako sa neprezradiť v opačnom prípade by som ich na niekoľko dni mohol stratiť z dohľadu a hľadať ich po celom okolí nebudem.</p>

            <h4 className="font-semibold"># Podvecer</h4>

            <p>Opäť cca. pred 6tou večer prichádzam na kukuričné pole a sadám si do trávnatej ryhy na okraji poľa a lesa. Je neskutočne teplo...  Sedmokrásky v okolí zanechávajú príjemnú arómu a ja zobem zrno, ktoré tu nadivoko rastie ako prežitok z minulých rokov.</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("s5e6upvpn84v3i7/39.webp")} alt="Ranne jelene"/>
            
            <p>Dnes vyšla vysoká pomerne neskoro. Ako prvé to boli jelenice jedna dokonca s tohtoročným jelenčaťom, ktoré bolo už pekne odrastene.</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("sxqgvju72ix5gbk/37.webp")} alt="Skora jelenia dvojica"/>

            <p>Jelene sa ukázali až pred 9tou večer, keď som sa pomaly vracal späť</p>

            <p>Cestou som ešte natrafil na srnu, ktorá akurát kŕmila mladé srnča, a tak polhodinu čakam až ho dokŕmi, aby som ich zbytočne neplašil nakoľko su neďaleko cesty kade kráčam</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("yoftod9605zlaey/38.webp")} alt="Srna a srnca"/>

            <p>Tu je potrebné zdôrazniť, že vyrušenie by mohlo mať pri takomto teplom počasí za následok úhyn mláďatá nasledkom dehydratácie. Srnčatá sú prvý mesiac uplne závislé na <i className="italic">"cicani"</i> a vyrušena srna sa niekedy koly bezpečiu vráti až na ďalšie krmenie, čo môže byť na druhy deň ráno alebo na obed.</p>
            
            <h4 className="font-semibold"># Ďalší deň večer</h4>

            <p>Prichádzam na rovnaké miesto. Pohodlie v ryhe z predošlého dna nebolo ideálne, tak padá rozhodnutie, že sa vyvalím priamo v kukurici. Hľadám dostatočne vysoké rastliny, ktoré ma zakryjú z každej strany a čakám na západ slnka.</p>

            <div className="flex flex-col md:flex-row md:space-x-2 flex-nowrap overflow-hidden md:justify-between">
                <LoadableImage  className="rounded-sm shadow-sm h-96 xl:h-128 object-cover rotate-0" src={GetUri("amr0aqrlqcismro/40.webp")} alt="Stanovisko v kukurici"/>
                <LoadableImage  className="rounded-sm shadow-sm h-96 xl:h-128 object-cover" src={GetUri("0x72e00hm0wwgiu/50.webp")} alt="Obdobie sucha"/>
            </div>

            <p>Čas ubieha pomaly a ja premýšľam. Je 8 večer. Som smädný a hladný všetko, čo som si zobral som zmastil a vravím si, že tomu dám max. 15 minút a pôjdem. Nebudem tu za každú cenu.</p>

            <p>Po 15minútach velím na odchod zdvíham hlavu a hneď ju dávam nazad dole, keď zbadám, že asi 15m predomnou je niekoľko jeleňov. Fascinujúce občas som niečo cítil no nebolo ich zo začiatku vôbec počuť a už vôbec vidieť.</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("s5ddq192rxj77in/10.webp")} alt="Jelen detail kukurica"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("jfp1n5dgvt8hp2o/42")} alt="Jelen zerie kukuricu"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("1acvwnnpf06iszx/43.webp")} alt="Jelen a lan v kukurici"/>

            <p>Robím par záberov, dokonca začujú uzávierku a chvíľu krútia hlavou a pozorujú ma. Mam maskovanie nevedia ma identifikovať navyše polyhavam... Netrvá to dlho a zase sú ponorené do prežúvania kukurice. Vôbec sa s tým neserú zožerú celú spodnú časť rastliny. Potichu sedím a len počúvam chrumkanie občas zavanie ich prenikavý pach.</p>

            <div className="w-full justify-center content-center">
                <iframe
                    className="w-full h-80 md:h-96 xl:h-128"
                    src="https://www.youtube.com/embed/ShIkUNKeZMk" 
                    title="Jelene v kukuricnom poli" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />    
            </div>

            <p>Asi po hodine posedavania sa začali pomaly presúvať do stredu poľa a ja môžem v kľude po okraji lesa odísť preč.</p>

            <p>Takto som ich monitoroval ešte ďalšie 2 dni. Niektoré jedince som si pomenoval, pretože som ich stretával pravidelne iné boli v daný deň nováčikmi. Vidieť je všetko staré, mladé jelene, lane aj čerstvý tohtoročný vrh. Občas sa aj poriadny divak ukáže.</p>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("wytkrsr5vqy95rl/17.webp")} alt="Starsi jelen v kukurici"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("iaee3es4daazxia/63_wildlife_kundrat.webp")} alt="Korunove jelene kukurica"/>

            <LoadableImage  className="rounded-sm shadow-sm" src={GetUri("ht90fk9wy4q37uc/jelenia_zver_sucho_kukurica.webp")} alt="Mlady jelen kukurica"/>

            <p>Pre zhrnutie uvediem, že jelene v tomto letnom období migrujú z vyšších položených lesov do miest s vyssiou koncentráciou výživnej potravy. Na bežných miestach výskytu teraz jelene takmer nespozorujete. Ryhy su suché, na hrebeni neďalekej hory teraz nenájdete kvapku vody. V zime som tam pozoroval čriedy o veľkosti 20-50KS pri každom výjazde.</p>

            <p>Ďalšou zaujímavosťou je fakt, že extrémne sucho a vyschle zdroje vody vytvárajú čriedy jeleňov v lete. Niečo podobne, ako je možné pozorovať v zime. Jelene tak ostávajú v bliskosti vodného zdroja v nizzsie položených miestach. Čriedy sú sprievodný jav sucha proste ak je malo vody sú na mieste, kde voda je. Za iných podmienok by predpokladám nevznikli. Možno maximálne koly nadmernej potrave.</p>

            <p>Srnčia zver bola v kukurici pozorovana minimálne, ba až vôbec. Ta je omnoho viac aktívna práve v repke. Sporadicky sa objavila i v kukurici, no preferovala trávnaté časti na okraji poľa.</p>

            <p>Poškodenie úrody kukuričného poľa je enormne. Do konca leta tipujem viac než 30-40 percent rastlín úplne poškodia. V tomto prípade ide o pole s rozlohou niekoľko hektárov. V podstate všade sú k videniu poškodené rastliny, okúsi a podobne.</p>

            <p>Ja som, ale na strane jeleňov a nech im chuti :)</p>
        </div>
    </>
}