import { useEffect } from "react";
import { Helmet } from 'react-helmet';
import { GetUri } from "../../Constants";
import LoadableImage from '../UI/LodableImage';
import { PageViews } from "@piwikpro/react-piwik-pro";

export default function RupicapraTatrica(){

    useEffect(() => {
        PageViews.trackPageView('Pes priatel človeka');
    }, [])
    
    return <>

        <Helmet>
            <title>Pes, priateľ človeka</title>
            <meta
                name="description"
                content="Pes, priateľ človeka - Problematika tulavých zvierat"
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

        <div className="space-y-5 text-base lg:text-lg">
            
            //Todo Cover
            {/* <LoadableImage className="rounded-sm " src={GetUri(".webp")} alt="Kamzik tatransky"/> */}

            <h1 className="text-xl font-semibold">Pes, priateľ človeka</h1>

            {
                //Nik neocení mimoriadnu genialitu vášho rozhovoru tak ako váš pes.
                //Najväčší strach, ktorý psy poznajú je, že sa nevrátite domov, keď ste šli von bez nich.
                //Poškrabte psa a máte prácu na plný úväzok.
                //Ak máte psa, máte priateľa a čím chudšieho dostanete, tým bude lepší.
                //Úsmev psa je v chvoste.
                //Pes je šiestym zmyslom pre človeka.
                //„Prišiel k tomu ako pes ku kosti.“
            }
            
            <h2>Nasiel som psa</h2>

            <p>Jeden podvecer pri navrate nachadzam na okraji lesa nakost vyhladovaneho psa. Okolo krku ma drotene lanko na konci ktoreho je zamotane voditko.</p>

            <p>Pokus dat mu to dole je neuspesny reaguje obranne toci sa dookola a mota sa este viac. Nieje utocny len sa boji...Sadam k nemu a vyse 20 min na seba len tak cumime a vravim mu: "Ja ta tu nenecham"</p>

            <p>Je vystraseny, nedvovercivi nerozumiem co sa stalo. Nemam pri sebe nic co by som mu dal a pokusy vyslobodit ho su neuspesne.</p>

            <p>Psika nechavam na mieste a vyberam sa po jedlo. Po tme sa vraciam spat a za pomoci jedla ho ciastocne vymotam a s provizornym voditkom odchadzame do bezpecia.</p>

            <p>Hrizol, ked som mu daval dole to co za sebou tahal no nepanikarim... Vidim ze sa bal... snazim sa pochopit cim si mohol prejst.</p>

            <p>Mimo okolia krku a zadku je kludny a len postava a po cca. 2h si lahne na provizorny pelech a spi.</p>


            <h2>Trauma</h2>

            <p>Nasledujuce dni zistujem ze psik si musel prejst peklom a taktiez ze uz pred vyse tyzdnom a pol ho videli vo vedlajsej obci od miesta kde som ho nasiel. Rovnako zistujem ze uz ho prikrmovali na nedalekom druzstve.</p>
            
            <p>Ludia tulave zviera castokrat nenahlasia, nepomozu mu a ked sa chova inak ako by cheli tak by ho najradsej nechali odstrelit...</p>

            <p>Privolany veterinar s mojou pomocou zisti ze psik nieje cipovany a informuje o nutnosti karanteny po dobu 14dni. No ziadne blizsie vysetrenie sa nekona..</p>

            <p>Psik sa nechce nechat upnut. Na oblast krku a zadku reaguje obranne.. Ja preto ale mam pochopenie pretoze viem v akom stave som ho nasiel a nehadzem ho preto do vreca...</p>

            <p>Nenutim mu to z coho ma traumu a chodim s nim navolno aj na dlhe prechadzky 10-15km</p>

           
            <h2>Problematika tulavych zvierat</h2>

            <p>Od prveho dna som kontaktoval okolite PZ nakolko sa moze jednat o zatulaneho durica z okolia.. K psovi sa nik nehlasil ani z okolitych obci..</p>

            <p>Pomaly zistujem aka je problematika utulkov. Obec mala o psa postarane (mnou) a z 5 oslovenych utulkov sa ozvali len dva so slovami ze su plne a nic neberu. Ty co maju povinnost zobrat nezdvihaju telefon a je to jeden zacarovany kruh.</p>

            <p>Po vyse tyzdni tlacim na starostu ze problem musime riesit nakolko niesom miestny a potreboval som odist no co bude so psom?</p>

            <p>Z okolia pocuvam naco si ho sem bral a podobne dristy ktore nemaju ziadnu pridanu hodnotu akurat bezvyznamne hundranie a zrkadlo na povahu ludi...</p>

            <p>Po niekolkych telefonatoch a dnoch sa nam podari vybavit utulok pomocou higeny a ten psika preberie (fakturuje prebratie a kilometre) a ako sa vravi tym by to mohlo skoncit</p>


            <h2>Nemenovany Utulok</h2>

            <p>Pre niekoho by to utulkom skoncilo mna zaujimalo co s nim bude dalej...</p>

            <p>So psom som stravil dva tyzdne. Nasiel som ho mozno v najhorsom a ked som ho predaval do utulku veril som ze najde novy domov.</p>

            <p>Stranky utulku hrde vravia "My nechcene psi neutracame" moja predstava a realita boli ale uplne odlisne..</p>

            <p>Po vyse 2.5 tyzdni som navstivil utulok ze psa pojdem vencit a pozriem ako sa mu dari popripade zistim aky je postup pretoze to vsetko je premna nova skusenost.</p>

            <p>S vencenim nemali problem no este pred vstupom ma upozornuju ze oni adoptuju psikov pre deti a do zahranicia.. Nechapem uplne ako si to mam vsetko vysvetlit ale v ten moment to hazem za hlavu...</p>

            <p>Po vstupe do utulku namna brese 240 psov na malom pozemku.. Je to neopisatelny pocit..  Vsetky akoby hovorili "hej pozri sa namna chcem ist prec vezmes si ma?" Tu si uvedomite co vsetci ty ludia psom urobili...</p>

            <p>Onedlho prichadzame k psovi a ako jediny snad nebrese ani ho nieje vidiet... je skryty v budke a neche ani vynst von..</p>


            <p>Takeho ho nespoznavam.. Kde je ten pes ktory sa tesi, otravoval, bol tvrdohlavy? Vidim vystraseneho psa ktoreho lakame na konzervu s masom aby vobec vysiel von.. Takto sa nebal ani ked som ho ja nasiel...</p>

            <p>Pri prechadzke sa sustredi iba na prirodu, dostava nejaku tu maskrtu a po 2h ho vraciam naspat pretoze mam predsebou este kus cesty no cely cas rozmyslam co som prave zazil..</p>

            <p>Po vyse 2 tyzdnoch prichadzam opat. Tentokrat som sa im ani dopredu nehlasil. Psik ma v koterci minimalne 5 hovien na tych dvoch stvorcovich metroch a cely zadok ma spinavy zaschnute kusy hliny a bohviecoho..</p>

            <p>Tentokrat bol hravejsi boli sme von takmer 3h. Pri navrate my pracovnicka vravi slova ktore ma zarazia</p>

            <p>"Nabuduce radsej dopredu dajte vediet aby ste necestoval zbytocne lebo psik uz nemusi byt." "Dame ho asi utratit.."" Vysvetluje to co vraveli aj naposledy ze oni adoptuju psikov pre deti a do zahranicia. A on je uz starsi psik...</p>

            <p>Odpovedam ze chapem ze si ho tam nik nevsimne pri tom mnozstve psov no poukazuje ze on nieje ani pripusteny k adopcii onom ani nik nevie ani vediet nebude...</p>

            <p>Po odchode z utulku to vomne nezanecha dobry dojem. Cestou stretavam vcelara ktory ma nedaleko ule... Vravi mi, ze neraz nasiel 5-10 mrtvych psov pohodenych nedaleko vcelinov ze skade sa asi vzali...</p>

            <p>Zamyslel som sa ze vlastne vsetky psy v utulku boli zdrave a stranky castokrat ukazuju zachranne psy hrobarovy z lopaty no take tam veru neboli... V ten moment som vedel ze som mu nijak nepomohol...  len som mu predlzil zivot v podmienkach ktore ani psovi neprajem...</p>

            <p>Ako ste si vsimli nemenujem konkretny utulok... Preco ?? Pretoze boli jediny ktory ho vtedy vzali, pretoze nato moze doplatit len tch zvysnych vyse 200 psov ktore zato nemozu a su tam umiestnene.. Busines za odchyt sa ale nema robit a kazdy pes by mal dostat sancu... Inak to neplni ucel ktory hlasaju a za ktory dostavaju dary od ludi...</p>

            <p>Ak by ubehol rok a viac mozno by som to pochopil ale po mesiaci po umiestneni to ma ozaj mrzelo pretoze premna to bol ten pes ktoreho som nasiel na pokraji sil.. </p>


            <h2>Druha sanca</h2>

            <p>Nenapada ma nic ine ako opat skusit niekoho kontaktovat a pokusit sa mu najst novy domov. Inak som mu nijak nepomohol.</p>

            <p>Kontaktujem OZ druha sanca Bardejov, ktory nemaju utulok a su vylucne na "docaskach" kedy sa im o psy staraju dobrovolnici u seba doma s podoborou OZtka...Vysvetlujem situaciu a suhlasia, ze mu spolocne najdeme novy domov v CR.. Pokial sa mu nenajde domov bude umna v docaske. </p>

            <p>Uloha jasna narychlo prepravit psa 150km medzi utulkami. Este vecer pred prevzatim volam do povodneho utulku nech ho rano nachystaju na odvoz ze ho vyzdvihnem...</p>

            <p>Pri prevzati dostavam do ruk veterinarny preukaz s datumom ze pes bol ockovany a cipovany den pred prevzatim (ked som im volal ze pon pridem)... To samozrejme malo byt urobene v case ked ho prijali a nie mesiac po.. koli tomu sa mu nasledne odsunulo vysetrenie nakolo 2x ockovat a odoberat krv po ockovani nema zmysel..</p>

            <p>Hned prvy den prichadza hnackovanie neskor krv v stolici a ide sa k vetrinarke na inekcie. Uz ked som myslel ze bude klud, tak ho potrapilo zdravie..</p>


            <h2>Vychova</h2>

            <p>Zaciname odznovu, pes bez navikov sa uci zakladnym povelom a chovaniu a hlavne necurat na vsetko co vidi...</p>

            <p>Uz naposledy som unho pozoroval vynikajuce stopovacie vlastnosti u vysokej zveri a osobne si myslim ze bol vyuzivany pri dohladavkach ma obdobne chovanie.</p>

            <p>Netrva to dlho a pes sa rychlo adaptuje problemy s upnutim su fuc, uz necura pyta sa na potrebu, je vernym spolocnikom pri dlhych prechadzkach lesom.</p>

            <p>Zistujem ze sa znasa s fenkami a macky nahana do zblaznenia...</p>


            <h2>Osudova chyba</h2>

            <p>Ubehol cas a pes sa socializoval. S prichadzajucim silvestrom padol plan vyhnut sa ohnostrojom utekom na Cergov vysoko a daleko od toho treskotu...</p>

            <p>Krasna tura a prostredie. Dokonca tam nebol sam vecer mu sprijemnovala harajuca sa fenka. Ani jeden so psov sa nevzdialil cely cas pobehovali okolo bol to pohodovy vecer.</p>
            
            <h3>1.1.2023 00:00</h3>

            <p>Je polnoc, sme hore na hrebeni... Sme nad mrakami a v dialke pocut ohnostroje slabo no aj to stacilo aby za tu sekundu sa libor vyplasil.</p>

            <p>Hladame ho, ja az do 03:00 rana, no unaveny to vzdavam, celovka sa vybyla, mobil takmer tiez nema to zmysel rozhodujem sa pokracovat rano a skusit ci sa nevrati na miesto kde sme boli cely den.</p>

            <p>Nepospal som nic mrzelo ma to... Od rana hladam v okoli, vyberam sa pomaly lesom dole a kricim a dufam ze pribehne..</p>

            <p>Poobede sa vratim sadnem k PC a podla mapy urcujem miesta kde by mohol zbehnut. Kontaktujem obce aby ma informovali ak by sa psik ukazal..</p>

            <p>Vecer prichadza sprava ze ho poobede mozno videli v nedalekej obci.. Je uz ale tma a momentalne ho nik nevidi...</p>

            <h3>2.1.2023</h3>

            <p>Vstavam mam otlaky z velkych topanok a obuvam bezecke boty. Uplne nalahko v batohu nudzovka a vyberam sa cez spominanu obec opat hore na hreben ze to skusim.</p>

            <p>Cestou ho pohladam v obci kde bol hlaseny a cestou dostavam telefonat z obecneho uradu ze asi ho vieli.</p>

            <p>Po prichode ukazujem panovi ktory to nahlasil fotku a z fleku vravi "tak to nieje on".</p>

            <p>Tak to uz chodi stastie vystrieda pesimizmus ale aj to malo ma pri behu nakoplo.</p>

            <p>Rozhodujem sa ze ak ho v obci uvidia niekto sa ozve ja vybehnem hore je to posledny den ktory to ma hore zmysel.. Plan je prejst na opacnu stranu hrebena ci nezbehol do dolin...</p>

            <p>Som desiatky metrov od hlavneho hrebena miesta kde sa stratil. O par minut by som to hodil dole cez hreben a v tom prichadza telefonat ze ho zachytila fotopasca od ochranarov.</p>

            <p>Radost... Cca. 10km odomna po hlavnom hrebeni... Chodi po vlcich chodnikoch kde ma partia z lesoochranarskeho zdruzenia fotopasce.. Bol to dobry napad poziadat ich o pomoc.. </p>

            <p>Prislo to v spravny cas inak by som bol zbehol a cesta spat uz nevedie... Utekam po hrebeni cas plynie na mieste kde som planoval odbocit a hodit to do sedla nedaleko miesta kde bol zachyteny fotopascou stretavam miestneho polovnika.</p>

            <p>Je to razcestie dvoch dolin na hrebeni a ukazuje my fotky ze ho pred hodinou minal v zlabe.</p>

            <p>Vraj posobil placho a pokracoval v svojej ceste. Ukazuje my fotky co potvrdzuje ze to je skutocne on.. Minuli sa na par metrov upravuje my trasu inak by som zbehol do doliny kde uz nieje...</p>

            <p>Tunajsie doliny niesu ziadna sranda.. Strme kopce mnohe su slepe na vrchu sneh/lad..</p>

            <p>Po telefone informujem ludi co my pomahaju o novych informaciach a ze pravdepodobne mieri do obce Krize. Ja som nieco cez hodiny behom a vali sa dole strmimi zlabmi..</p>

            <p>Cestou natrafim na stopy, ktore potvrdzuju miesto kde sa s nim minal polovnik. Jeho stopy vedu nahor psie nadol... Euforia....</p>

            <p>Prichadzam na hranicu lesa kde je par chat a pytam sa chatarov ci tu nevideli pobehovat psa a ty vravia ze ano skutocne tu pred 1-2h pes pobehoval...</p>

            <p>Uz ked si myslite ze kocur bol v trube tak sa tak nestalo od tohto momenu sa po Liborovi zlahla zem...</p>

            <p>V obci ho uz nik nevidel. Dolu nezisiel... Posledne miesto boli chatky na hranici hory.... Rozsypal som tam nejake krmivo a miestnych som poziadal nech ma kontaktuju ak by sa ukazal.</p>

            <p>Presiel velku cast cergova. Pohyboval sa po vlcich chodnikoch a po zbehnuti sa ponom zlahla zem.. Prisla tma a ja som to musel zase ukoncit</p>

            <p>Bol som odneho 1-2h casovo no nepodarilo sa... Vecer vytvaram trojuholnik oblasti kam moze podla terenu ist...</p>

            <p>Pridavaju sa super ludia ze pojdu rano hladat somnou a kazdy pojde niektory smer... Okolite obce prislubili ze ho vyhlasia v rozhlase... Donoci pisem spravy a planujem zajtrajsok..</p>

            <h3>3.1.2023</h3>

            <p>Vyrazame do obce Krize kde bol videny naposledy.. Je to dost odruky prichadzame a zaciname prehladavat okolie... ja sa neviem rozhodnut nakoniec po telefonate s miestnym polovnikom sa vyberam k obci Livov cez kopec.. Vraj aj vminulosti ztamad prebehli psy a naopak...</p>

            <p>Odvcera ho nik nehlasi... po Liborovi sa zlahla zem... Hlada ho niekolko ludi...</p>
            
            <p>Je obed a mnohy sa pomali vracaju a koncia... Aj ja to vzdavam som v obci Livov rozpravam sa s miestnymi polovnikmi a vlastne som to uz vzdal. Vyberam sa po hlavnej ceste dole ani neviem ako sa odtal dostat do civilizacie ale neriesim premyslam...</p>

            <p>V to pride telefonat ze ho videli nad obcou krize u lesa... Vomne sa to zase vsetko prebudi... zistujem kdo je v okoli.. Ja som daleko,daleko za kopcom... </p>

            <p>OZtko vola cloveka z krizov nech prinom ostane ja volam polovnikovi z Krizov nech tam doslova uteka a tak sa aj deje...</p>

            <p>Ja si pochvili stopujem pani a ta ma vezie autom na opacnu stranu kopca... Medzi tym uplne stracam prehlad o chate na messenger a jedno auto uz vyrazilo premna... (sorry)</p>


            <p>Nasiel sa!</p>

            <p>Treba verit do poslednej chvile aj tak sa stalo.. Bol samozrejme hladny.... kost ktoru mu hodili nechel nechat a trosku si povrcal..</p>

            <p>Po nasadnuti do auta len lezel a po prichode ho hned vyplo.. Prespal cely zvysok dna...</p>

            <br/>

            //Todo Content
            {/* <LoadableImage className="rounded-sm" src={GetUri("fn9ja05wyxvk0p5/kamzik_tatransky_02.webp")} alt="Kamzik tatransky"/> */}

        </div>
    </>
}