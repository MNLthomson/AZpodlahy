// Data pro každou službu
const services = {
  podlahy: {
    title: "Pokládka podlah všech typů",
    text1: "Rozhodujete se o nové podlaze a hledáte profesionální pokládku? Správně provedená instalace podlahové krytiny je zásadní pro dlouhou životnost, pohodlí a vzhled vašeho domova či kanceláře. Naši zkušení podlaháři přistupují ke každé zakázce individuálně, přizpůsobují práci konkrétním podmínkám a požadavkům zákazníka tak, aby výsledek předčil očekávání a podlaha byla nejen krásná, ale i funkční.",
    text2: "Provádíme odbornou pokládku všech typů podlah – od PVC a vinylu, přes plovoucí laminátové podlahy, parkety, masivní dřevo, korek až po koberce či moderní kompozitní materiály. Zajišťujeme kompletní servis od přípravy podkladu, přes přesné vyrovnání a řezání až po finální úpravy a lištování. Všechny postupy volíme tak, aby byla zachována maximální kvalita a odolnost povrchu, a většina podlah je přizpůsobena i pro použití s podlahovým vytápěním.",
    imageBefore: "/images/pokladka-podlah-realizace-pred.JPG",
    imageAfter: "/images/pokladka-podlah-realizace-po.JPG"
  },
  koberce: {
    title: "Pokládka koberců",
    text1: "Rozhodujete se, jak dodat svému interiéru útulnost a pohodlí? Koberce patří mezi nejčastěji volené podlahové krytiny právě díky své hřejivosti, komfortu a široké škále barev i vzorů. Správná pokládka koberce je však klíčová pro jeho dlouhou životnost a perfektní vzhled. Naši odborníci se vždy přizpůsobí konkrétním potřebám a požadavkům zákazníka, aby výsledek odpovídal nejvyšším standardům kvality i estetice.",
    text2: "Nabízíme profesionální pokládku všech typů koberců – metrážových i kobercových čtverců, vhodných pro domácnosti, kanceláře, hotely či komerční prostory. Zajišťujeme kompletní servis od přípravy podkladu, lepení, napínání až po přesné začištění detailů. Díky našim zkušenostem je koberec položen rovnoměrně, bez vlnění a s vysokou odolností proti každodenní zátěži. Většinu koberců je možné kombinovat i s podlahovým vytápěním pro maximální komfort.",
    imageBefore: "/images/pokladka-koberec-realizace-pred.JPG",
    imageAfter: "/images/pokladka-koberec-realizace-po.JPG"
  },
  pvc: {
    title: "Pokládka PVC",
    text1: "Rozhodujete se o vaší nové podlaze? Vámi zvolená podlahová krytina, vás bude inspirovat k vytvoření lepšího životního prostředí vašeho domova. Proto ve všech činnostech naší práce se přizpůsobujeme potřebám a přáním každého zákazníka, aby výsledek naší společné práce byl nad očekávání a co nejvyšší možné kvalitě.",
    text2: "Nabízíme široké spektrum podlahovin PVC s vysokou kvalitou od předních světových výrobců v rozmanitosti dřeva, parket, keramické dlažby až po technické a jednobarevné vzory. V naší nabídce najdete PVC heterogenní (složeno z několika vrstev) homogenní) v celé své tloušťce stejného složení i probarvení). Druhy PVC pro lehkou zátěž, určených pro domácnost, byty, rodinné domy až po silné zátěžové PVC , určené pro kanceláře, školy, komerční výstavbu i lehký průmysl. Většina podlahovin je technicky přizpůsobena pro použití na podlahové topení.",
    imageBefore: "/images/pokladka-pvc-realizace-pred.jpg",
    imageAfter: "/images/pokladka-pvc-realizace-pred.jpg"
  },
  marmoleum: {
    title: "Pokládka marmolea",
    text1: "Rozhodujete se pro přírodní a ekologické řešení podlahy? Marmoleum je vysoce odolná krytina z přírodních surovin, která spojuje dlouhou životnost, snadnou údržbu a moderní vzhled. Aby plně vynikly jeho vlastnosti, je nezbytná odborná pokládka. Naši profesionálové dbají na precizní zpracování a vždy se přizpůsobují potřebám zákazníka i charakteru interiéru, aby výsledek působil elegantně a trvale.",
    text2: "Provádíme odbornou pokládku marmolea v rolích i dílcích, a to do domácností, kanceláří, škol i komerčních prostor. Zajišťujeme kompletní servis od přípravy a vyrovnání podkladu, přes přesné lepení až po detailní zakončení hran a lišt. Marmoleum je navíc vhodné i pro podlahové vytápění a díky naší profesionální instalaci získáte podlahu s vysokou odolností a dlouhou životností.",
    imageBefore: "/images/pokladka-marmoleum-realizace-pred.jpg",
    imageAfter: "/images/pokladka-marmoleum-realizace-po.jpg"
  },
  brouseni: {
    title: "Broušení dřevěných podlah",
    text1: "Máte dřevěnou podlahu, která ztratila svůj původní vzhled? Profesionální broušení je první krok k její obnově a navrácení přirozené krásy dřeva. Naši odborníci využívají moderní technologii, která zaručí rovnoměrné zbroušení povrchu bez poškození a s minimálním prašným zatížením. Každou zakázku přizpůsobujeme konkrétnímu typu dřeva i míře opotřebení.",
    text2: "Nabízíme kompletní broušení všech typů dřevěných podlah – od parket přes prkna až po masivní podlahy. Po vybroušení je možné podlahu ošetřit lakem, olejem či voskem podle přání zákazníka. Díky našim zkušenostem dosáhnete nejen krásného vzhledu, ale také prodloužené životnosti podlahy a lepší odolnosti proti každodennímu zatížení.",
    imageBefore: "/images/brouseni-podlah-realizace-pred.jpg",
    imageAfter: "/images/brouseni-podlah-realizace-po.jpg"
  },
  cisteni: {
    title: "Čištění dřevěných podlah",
    text1: "Chcete, aby vaše dřevěná podlaha zůstala krásná a zdravá co nejdéle? Pravidelné odborné čištění je klíčové pro její dlouhou životnost i zachování původního vzhledu. Naši specialisté používají šetrné, ale účinné prostředky a technologii, která dřevo nepoškodí a zároveň odstraní nečistoty, mastnotu i stopy používání.",
    text2: "Zajišťujeme profesionální čištění všech typů dřevěných podlah v domácnostech i komerčních prostorách. Podlahu vyčistíme, ošetříme a doporučíme následnou údržbu, aby si zachovala svůj přirozený lesk a byla chráněna proti dalšímu opotřebení. Díky pravidelné péči předejdete nutnosti časté renovace a vaše dřevo bude stále působit reprezentativně a útulně.",
    imageBefore: "/images/cisteni-podlah-realizace-pred.jpg",
    imageAfter: "/images/cisteni-podlah-realizace-po.jpg"
  },
  renovace: {
    title: "Renovace dřevěných podlah",
    text1: "Má vaše dřevěná podlaha za sebou roky používání a působí unaveně? Renovace je ideálním řešením, jak jí navrátit krásu, odolnost i funkčnost. Naši odborníci zhodnotí stav podlahy a navrhnou postup, který zajistí perfektní výsledek. Každý detail přizpůsobujeme potřebám zákazníka i typu dřeva, aby byla renovace dlouhodobě efektivní.",
    text2: "Provádíme kompletní renovace dřevěných podlah včetně broušení, tmelení spár, opravy poškozených míst a finální povrchové úpravy lakem, olejem či voskem. Díky naší práci získáte podlahu, která vypadá jako nová a je připravena odolávat každodenní zátěži. Renovací prodloužíte životnost dřeva a navíc dodáte interiéru nový, svěží vzhled.",
    imageBefore: "",
    imageAfter: "after-laminat.jpg"
  },
  udrzba: {
    customHtml: `
          <div class="udrzba-content">
            <h2>ÚDRŽBA PODLAH? NÁVODY NA ÚDRŽBU.</h2>
            <h3>Jak na údržbu podlahy?</h3>
            <p><strong>Váš jednoduchý návod na ošetřování a čištění podlah:</strong> Špatné čističe a ošetřovací produkty nebo postupy mohou Vaši podlahu poškodit nebo trvale zničit...</p>
            
            <h3>Potřebuje podlaha speciální ošetřování?</h3>
            <p>Myslíte si, že ošetřovat či čistit podlahovou krytinu je zbytečné? ...</p>

            <h3>Jak ošetřovat podlahu</h3>
            <p>Menší podlahu je byste si podle návodu dokážete ošetřit sami...</p>

            <h3>Čištění podlahy po ukončení pokládky</h3>
            <p>Po ukončení pokládky a stavebních prací se povrch podlahy čistí od výrobních a montážních nečistot...</p>

            <h3>Běžné denní čištění a údržba podlahy</h3>
            <p>Běžné šamponky nebo příliš agresivní prostředky dokážou rychle znehodnotit ochranný film...</p>

            <h3>Základní čištění</h3>
            <p>Při základním čištění se používají účinnější produkty...</p>

            <h3>Potřebuje vaše podlaha renovaci?</h3>
            <p>Při výrazné podlaze speciální renovace...</p>

            <h3>5 dobrých rad k ošetřování a čištění podlahy</h3>
            <ul>
              <li>Vždy používejte doporučené čističe a prostředky k údržbě dané podlahy.</li>
              <li>Nečistoty odstraňujte pravidelně, aby se nezaryly hluboko do povrchu.</li>
              <li>Při větším znečištění využijte profesionální úklidové služby.</li>
              <li>Podlahu pravidelně kontrolujte a zabraňte jejímu mechanickému poškození.</li>
              <li>Nikdy nepoužívejte agresivní chemické prostředky.</li>
            </ul>
          </div>
        `
  }
};

// Funkce pro zobrazení obsahu
// Funkce pro zobrazení obsahu
function showService(serviceKey) {
  const service = services[serviceKey];
  const contentDiv = document.getElementById("serviceContent");

  if (service.customHtml) {
    // Speciální obsah (údržba)
    contentDiv.innerHTML = service.customHtml;
  } else {
    // Klasický layout
    contentDiv.innerHTML = `
      <div class="left">
        <h2>${service.title}</h2>
        <p>${service.text1}</p>
        <p>${service.text2}</p>
      </div>
      <div class="right">
        <h3>Realizace</h3>
        <div class="images-real>
          <img src="${service.imageBefore.trim()}" alt="Před realizací" title="Před">
          <img src="${service.imageAfter.trim()}" alt="Po realizaci" title="Po">
        </div>"
      </div>
    `;
  }
}

// Načti defaultně první službu
showService('podlahy');