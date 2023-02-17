import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

export default function IFoundTheDog(){

    useEffect(() => {
        PageViews.trackPageView('Pes priatel človeka');
    }, [])
    
    return <>

        <Helmet>
            <title>🐕 Libor</title>
            <meta
                name="description"
                content="Pes Libor - Problematika tulavých zvierat"
            />
            <meta 
                name="author" 
                content="Dalibor Kundrat" 
            />
            <meta
                name="keywords"
                content="tulavy pes, tulave zviera, polovnicky pes"
            />
            <meta
                property="og:title"
                content="Pes, priateľ človeka"
            />
            <meta 
                property="og:description" 
                content="Pes, priateľ človeka - Problematika tulavých zvierat" 
            />
            <meta property="og:type" content="article" />
        </Helmet>

        <div className="space-y-5 text-base lg:text-lg text-justify">
        
            <h1 className="text-xl md:text-2xl font-bold">🐶 Libor</h1>
            
            <LoadableImage className="rounded-sm" src={GetUri("h3tyvjvmtcxkvll/liborko.webp")} alt="Libco"/>

            <br/>
            
            <h2 className="text-lg font-semibold">V skratke:</h2>

            <div className="flex flex-col">
                <TimelineItem order={1} name="Našiel som psa">Vyhladovaný, zamotaný tulák</TimelineItem>
                <TimelineItem order={2} name="Psia trauma">Brani sa kontaktu, upnutiu no inak je to maznák</TimelineItem>
                <TimelineItem order={3} name="Problém útulkov">Problém nájsť útulok, komunikácia s útulkami</TimelineItem>
                <TimelineItem order={4} name="Útulok">Útulok chce bezdôvodne psa utratiť</TimelineItem>
                <TimelineItem order={5} name="Druhá šanca">Presun psa do dočasnej starostlivosti</TimelineItem>
                <TimelineItem order={6} name="Výchova">Pes nemá návyky. Učí sa povelom a chovaniu</TimelineItem>
                <TimelineItem order={7} name="Stratil sa">Silvestrovsky útek</TimelineItem>
                <TimelineItem order={8} name="Našiel sa">Keď nik neveril tak sa našiel</TimelineItem>
            </div>

            <br/>

            <HeaderSection id="1">🔎 Našiel som psa</HeaderSection>

            <p>Jeden podvečer pri návrate z fotenia nachádzam na okraji lesa nakosť vyhladovaného psa.</p>

            <LoadableImage className="rounded-sm" src={GetUri("pwqu395qnsjyhts/Libor.webp")} alt="Libor pri najdeni"/>

            <p>Okolo krku ma drôtené lanko, je zamotaný... Pokus dať mu to dole je neúspešný reaguje obranné, točí sa dookola a motá sa ešte viac... Je vystrašený, nedôverčivý... Psíka nechávam na mieste a vyberám sa po jedlo. Po tme sa vraciam späť a za pomoci jedla ho čiastočne vymotám a beriem sebou...</p>

            <LoadableImage className="rounded-sm" src={GetUri("mjgromiidhikcl5/Libor2.webp")} alt="Libor prve jedlo"/>
            
            <p>Hrýzol, keď som mu dával dole to, čo za sebou ťahal... Vidím, že sa bál a mám, preto pochopenie... Mimo priameho kontaktu je kľudný a len postava a po cca. 2h si ľahne na provizórny pelech a spi.</p>

            <br/>

            <HeaderSection  id="2">😱 Psia trauma</HeaderSection>

            <p>Nasledujúce dni zisťujem, že pes si musel niečím prejsť... Ľudia túlavé zviera častokrát nenahlásia, nepomôžu a keď sa pes chova inak, najradšej by ho nechali odstreliť...</p>

            <p>Privolaný veterinár s mojou pomocou zisti, že psík nieje čipovaní a informuje o nutnosti karantény po dobu 14dni. No žiadne bližšie vyšetrenie sa nekoná.</p>

            <LoadableImage className="rounded-sm" src={GetUri("nzx02j9qcwclk5g/libor3.webp")} alt="Libor provizorny pelech"/>

            <p>Psík sa nechce nechať upnúť. Na oblasť krku a zadku reaguje obranné. Viem v akom stave som ho našiel a mám, preto pochopenie...</p>

            <p>Nenútim mu to z čoho ma traumu a chodím s nim navolno aj na dlhé prechádzky 10-15km odomňa sa nevzdiali...</p>
            
            <p>Postupne začina naberať na váhe no je to beh na dlhú trať.</p>
            <br/>
           
            <HeaderSection id="3">⚠️ Problematika túlavých zvierat</HeaderSection>


            <p>Od prvého dňa som kontaktoval okolité PZ a obce nakoľko sa môže jednať o zatúlaného psa z okolia. K psovi sa nik nehlásil...</p>

            <p>Pomaly zisťujem aká je problematika útulkov. Obec mala o psa postarané (mnou) a z 5 oslovených útulkov sa ozvali len dva so slovami, že sú plne a nič neberú. Ty, čo majú povinnosť zobrať nezdvíhajú telefón a je to jeden začarovaný kruh.</p>

            <p>Po vyše týždni tlačím na starostu, že problém musíme riešiť nakoľko nie som miestny a potreboval som odísť no, čo bude so psom?</p>

            <p>Z okolia počúvam <i className="italic">"Načo si ho sem bral...</i>  A podobne <i className="italic">"Drísty"</i>, ktoré nemajú žiadnu pridanú hodnotu akurát bezvýznamné hundranie a zrkadlo na povahu ľudí...</p>

            <p>Po niekoľkých telefonátoch a dňoch sa podarí vybaviť útulok pomocou hygieny a ten psa preberie (fakturuje obci prebratie a kilometre)</p>

            <LoadableImage className="rounded-sm" src={GetUri("olirt00lctzs04w/libor_odchyt.webp")} alt="Libor presun do utulku"/>
            <br/>

            <HeaderSection id="4">🔒 Nemenovaný útulok</HeaderSection>


            <p>Pre niekoho by to útulkom skončilo no mňa zaujímalo, čo s nim je a pri predani útulku som veril, že nájde nový domov.</p>

            <p>Stránky útulku hrde vravia <i className="italic font-semibold">"My nechcene psi neutrácame"</i>. Moja predstava a realita bola, ale úplne odlišná.</p>

            <p>Po 3 týždňoch som navštívil útulok, že psa pôjdem venčiť a pozriem, ako sa mu darí, poprípade zistím aký je postup, pretože to všetko je premena nová skúsenosť.</p>

            <LoadableImage className="rounded-sm" src={GetUri("tqraasm403gnpf3/libor_utulok.webp")} alt="Libor v utulku"/>

            <p>Pracovníčka spomína, že oni adoptujú psíkov pre deti a do zahraničia. Nechápem úplne, ako si to mám vysvetliť, ale v ten moment to hádžem za hlavu...</p>

            <p>Po vstupe do útulku breše 240 psov na malom pozemku. Je to neopísateľný pocit.  Všetky akoby hovorili <i className="italic">"Chcem ísť preč, vezmeš si ma?"</i>.</p>

            <p>Onedlho prichádzame k psovi a ako jediný snáď nebreše ani ho nieje vidieť... Je skrytý v búdke a neche ani vyjsť von.</p>

            <p>Takého ho nespoznávam. Kde je ten pes, ktorý sa teší, otravoval, bol tvrdohlavý? Vidím vystrašeného psa, ktorého lákame na konzervu s mäsom, aby vôbec vyšiel von. Takto sa nebál ani, keď som ho ja našiel...</p>

            <br/>
            
            <p>Po vyše 2 týždňoch prichádzam opäť. Psík ma v koterci minimálne 5 hovien na 2m2 a cely zadok špinavý (zaschnute kusy hliny a hovien)..</p>
         
            <LoadableImage className="rounded-sm" src={GetUri("zyy9tex7pj55uio/libor_utulok2.webp")} alt="Libor vencenie utulok"/>

            <p>Pri návrate mi pracovníčka vraví.. <i className="italic">"Nabudúce radšej dopredu dajte vedieť, že prídeťe... Máme v pláne ho dať utratiť... </i>Vysvetľuje to, čo vraveli aj naposledy, že oni adoptujú psíkov pre deti a do zahraničia. A on je už starší psík...</p>

            <p>Odpovedám, že chápem, že si ho tam nik nevšimne pri tom množstve psov no poukazujem, že on nieje ani pripusteny k adopcii... Nieje ani na stránkach, neexistuje...</p>

            <p>Zamyslel som sa, že vlastne všetky psy v útulku boli zdravé a stránky častokrát ukazujú záchranné psy hrobárovi z lopaty no také tam veru neboli... V ten moment som vedel, že som mu nijak nepomohol...</p>

            <p>Ako ste si všimli nemenujem konkrétny útulok... Prečo ?? Pretože boli jediné, ktorí ho vtedy vzali, pretože nato môže doplatiť len ich zvyšných vyše 200 psov, ktoré, zato nemôžu a sú tam umiestnené. Business za odchyt sa, ale nemá robiť... Inak to neplní účel OZ, ktorí hlásajú a za ktorí dostávajú dary od ľudí...</p>

            <p>Ak by ubehol rok a viac možno by som to pochopil, ale po mesiaci po umiestnený to ma ozaj mrzelo, pretože premena to bol ten pes, ktorého som našiel na pokraji síl.</p>
            <br/>

            <HeaderSection id="5">🤞 Druhá šanca</HeaderSection>


            <p>Nenapadá ma nič iné, ako opäť skúsiť niekoho kontaktovať a pokúsiť sa mu nájsť nový domov. Inak som mu nijak nepomohol.</p>

            <p>Kontaktujem inde OZtko, ktorí nemajú útulok a sú výlučne na <i className="italic">"Dočaskach"</i> (O psy sa starajú dobrovoľníci u seba doma).. Vysvetľujem situáciu a súhlasia, že mu spoločné nájdeme nový domov v ČR. Pokiaľ sa mu nenájde domov bude umná v docaske.</p>

            <p>Ešte večer pred prevzatím volám do pôvodného útulku nech ho ráno nachystajú na odvoz, že ho vyzdvihnem...</p>

            <p>Pri prevzatí dostávam do rúk veterinárny preukaz s dátumom, že pes bol očkovaní a čipovaný deň pred prevzatím (keď som im volal, že poň prídem)... To samozrejme malo byt urobené v čase, keď ho prijali a nie mesiac po.</p>

            <p>Hneď prvý deň prichádza hnackovanie, neskôr krv v stolici a ide sa k vetrinarke na inekcie.</p>

            <p>S odstupom času a niekolkzch druhoch jedla a granúl končíme u hypoalergennych, po ktorých ma konečne trávenie v poriadku...</p>
            <br/>

            <HeaderSection id="6">🏋️ Výchova</HeaderSection>

            <p>Pes bez návykov sa učí základným povelom a chovaniu a hlavne nečurať na všetko, čo vidí...</p>

            <p>Netrvá to dlho a pes sa rýchlo adaptuje problémy s upnutim sú fuč, už nečurá pýta sa na potrebu, je verným spoločníkom pri dlhých prechádzkach lesom.</p>

            <p>Nakoľko fotím, leziem a trackujem stal sa mojim stalym parťakom. Vlastne ani ho nieje kam odložiť...</p>

            <LoadableImage className="rounded-sm" src={GetUri("bopjo64h3txn2st/luka.webp")} alt="Libor luka"/>

            <LoadableImage className="rounded-sm" src={GetUri("gnpfzwxjgem2gls/libor_ta3.webp")} alt="Libor hory"/>

            <br/>

            <HeaderSection id="7">❌ Stratil sa</HeaderSection>

            <p>Ubehol čas a pes sa socializoval. S prichádzajúcim Silvestrom padol plán vyhnúť sa ohňostrojom, útekom vysoko a ďaleko od toho treskotu na hrebeň hory.</p>

            <p>Pes v spoločnosti harajucej fény... Ani jeden z psov sa nevzdialil a cely čas pobehovali, pohoda večer.</p>
            
            <LoadableImage className="rounded-sm" src={GetUri("4pla3x2dx640g7q/libor_silvester.webp")} alt="Libor silvester"/>

            <SubHeaderSection>📅 1.1.2023 00:00</SubHeaderSection>

            <p>Je polnoc, v diaľke počuť ohňostroje... 💣🎆  Slabo no aj to stačilo, aby sa Libor vyplašil...</p>

            <p>Hľadáme ho, unavený to vzdávam okolo 03: 00 ráno. Čelovka sa vybila, mobil takmer tiež. </p>

            <p>Od rana hľadám v okolí, vyberám sa pomaly lesom dole no pesa nikde...</p>

            <p>Poobede sa vrátim sadnem k PC a podľa mapy určujem miesta, kde by mohol zbehnúť. Kontaktujem obce, aby ma informovali ak by sa pes ukázal.</p>

            <SubHeaderSection>📅 2.1.2023</SubHeaderSection>

            <p>Vstávam obúvam bežecké body. Úplne naľahko v batohu nudzovka a vyberám sa hore na hrebeň, že to skúsim prebehnúť...</p>

            <p>Som desiatky metrov od hlavného hrebeňa miesta, kde sa stratil. Plán bol zbehnuť na opačnú stranu do doliny.... No v tom prichádza telefonát, že ho zachytila fotopasca...</p>

            <LoadableImage className="rounded-sm" src={GetUri("y876lupxde7fpu5/fotopasca.webp")} alt="Fotopasca"/>

            <p>Smer cca. 10km po hlavnom hrebeni... Chodí po vlčích chodníkoch, kde ma partia z lesoochranarskeho združenia fotopasce...</p>

            <p>Utekám po hrebeni, na mieste, kde som mal odbočiť do neďalekého sedla (kde je fotopasca) stretávam miestneho poľovníka...</p>

            <p>Ukazuje mi fotky, že ho pred  2h míňal v žľabe. Skutočne je to on... Ukazuje na dolinu a opisuje miesto, kde sa stretli...</p>

            <LoadableImage className="rounded-sm" src={GetUri("4qqguq5otpgwykt/polovnik.webp")} alt="Polovnik"/>

            <p>Tunajšie doliny niesť žiadna sranda. Strmé kopce, mnohé sú slepé a na vrchu sneh a ľad.</p>

            <p>Cestou natrafím na stopy, ktoré potvrdzujú miesto, kde sa s nim míňal poľovník.</p>

            <p>Prichádzam na hranicu lesa nad obcou Kríže, kde su chaty a pýtam sa chatárov či tu nevideli pobehovať psa... Skutočne tu pred 1-2h pes pobehoval...</p>

            <p>Prešiel veľkú časť pohoria. Pohyboval sa po vlčích chodníkoch a po zbehnuti som stratil info... Prišla tma a deň sa skončil...</p>

            <p>Bol som od neho 1-2h časovo no nepodarilo sa... Večer vytváram trojuholník oblasti kam môže podľa terénu ísť...</p>

            <p>Pridávajú sa super ľudia, že pôjdu ráno hľadať so mnou a každý pôjde jeden smer... Okolité obce prisľúbili, že ho vyhlásia v rozhlase...</p>

            <SubHeaderSection>📅 3.1.2023</SubHeaderSection>

            <p>Vyrážame do obce Kríze, kde bol videní naposledy. Je to dosť od ruky prichádzame a začíname prehľadávať okolie... Vyberám sa k vedľajšej obci cez kopec...</p>

            <p>Odvčera ho nik nehlási... Je obed každý to pomaly vzdáva... Som v obci Livov rozprávam sa s miestnymi poľovníkmi a vlastne som to už vzdal.</p>

            <p>V tom príde telefonát, že ho videli u lesa nad obcoc kde bol aj vcera podvecer... Ja volám poľovníkovi z Krížov nech tam zabehne...</p>
            <br/>

            <HeaderSection id="8">🎉 Našiel sa!</HeaderSection>

            <p>Treba veriť do poslednej chvíle aj tak sa stalo. Bol samozrejme hladný... Kosť, ktorú mu hodili nechcel nechať a malinko si aj povrcal.</p>

            <p>Po naložení do auta len ležal a po príchode ho hneď vyplo a prespal cely zvyšok dna...</p>
            
            <br/>

            <LoadableImage className="rounded-sm" src={GetUri("n4ercvpfjzheljp/libor_sneh.webp")} alt="Libor sneh"/>

            <LoadableImage className="rounded-sm" src={GetUri("t77zefsdiiqmomz/libor_ta3_2.webp")} alt="Libor na snehu"/>

            <LoadableImage className="rounded-sm" src={GetUri("t6elvl55dbcl3tv/libor_sneh2.webp")} alt="Libor na snehu"/>

            <LoadableImage className="rounded-sm" src={GetUri("k6wx11qsx0tolx4/libor_cergov.webp")} alt="Libor na snehu"/>


        </div>
    </>
}


//-------------------------------------------

type HeaderSectionProps = {
    children:string
    id?:string | undefined
}

function HeaderSection({children,id}:HeaderSectionProps){
    return <h2 id={id} className="font-bold h-10 bg-gray-400 items-center flex rounded-md px-5 text-black sticky top-5 z-10">
        {children}
    </h2>
}

//-------------------------------------------

type SubHeaderSectionProps = {
    children:string
}

function SubHeaderSection({children}:SubHeaderSectionProps){
    return <h4 className="font-bold h-6 items-center flex rounded-md text-base w-44">
        {children}
    </h4>
}

//-------------------------------------------

type TimelineItemProps = {
    order:number
    name:string
    children:string
}

function TimelineItem({order,children,name}:TimelineItemProps){

    const handleClickScroll = () => {
        const element = document.getElementById(order.toString());
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return <div onClick={handleClickScroll} className="h-14 cursor-pointer flex flex-row space-x-10 items-center flex-nowrap group">

        <div className="flex relative h-14 select-none">
            <div className="w-0.5 h-14 bg-white whitespace-pre absolute left-3"/>
            <div className="w-6 h-6 bg-white absolute top-3 rounded-full overflow-hidden items-center flex">
                <div className="m-auto text-sm text-black text-center leading-none justify-center z-10">
                    {order}
                </div>
            </div>
        </div>
        
        <div className="my-auto flex flex-row relative text-base space-x-3 md:space-x-5 items-center">
            <div className="font-semibold text-center flex flex-nowrap whitespace-pre">{name}</div>
            <div>⮞</div>
            <div className="text-gray-200 group-hover:underline whitespace-pre-wrap">{children}</div>
        </div>
    </div>
}