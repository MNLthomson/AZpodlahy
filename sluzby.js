

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
    imageAfter: "/images/pokladka-pvc-realizace-po.jpg"
  },
  homogen: {
    title: "Pokládka homogenních podlah",
    text1: "Homogenní podlahy jsou oblíbeným řešením pro prostory s vysokými nároky na odolnost, čistotu a dlouhou životnost. Díky své jednolité struktuře poskytují výbornou mechanickou i chemickou odolnost, snadno se udržují a zachovávají si atraktivní vzhled po mnoho let. Jsou ideální volbou do nemocnic, škol, kanceláří, obchodních i výrobních prostor, ale také do domácností, kde se klade důraz na praktičnost a moderní design.",
    text2: "Provádíme kompletní pokládku homogenních podlah včetně přípravy podkladu, přesného lepení a finálního začištění detailů. Naši zkušení podlaháři dbají na precizní provedení, které zaručuje rovný, pevný a esteticky čistý povrch. Díky profesionální instalaci získáte podlahu s dlouhou životností, vysokou odolností a bezproblémovou údržbou.",
    imageBefore: "/images/pokladka-marmoleum-realizace-pred.jpg",
    imageAfter: "/images/pokladka-marmoleum-realizace-po.jpg"
  },
  drevo: {
    title: "Renovace dřevěných podlah",
    text1: "Máte dřevěnou podlahu, která ztratila svůj původní vzhled? Profesionální broušení je první krok k její obnově a navrácení přirozené krásy dřeva. Naši odborníci využívají moderní technologii, která zaručí rovnoměrné zbroušení povrchu bez poškození a s minimálním prašným zatížením. Každou zakázku přizpůsobujeme konkrétnímu typu dřeva i míře opotřebení.",
    text2: "Nabízíme kompletní broušení všech typů dřevěných podlah – od parket přes prkna až po masivní podlahy. Po vybroušení je možné podlahu ošetřit lakem, olejem či voskem podle přání zákazníka. Díky našim zkušenostem dosáhnete nejen krásného vzhledu, ale také prodloužené životnosti podlahy a lepší odolnosti proti každodennímu zatížení.",
    imageBefore: "/images/renovace-drevo-realizace-pred.JPG",
    imageAfter: "/images/renovace-drevo-realizace-po.JPG"
  },
  cisteni: {
    title: "Čištění dřevěných podlah",
    text1: "Chcete, aby vaše dřevěná podlaha zůstala krásná a zdravá co nejdéle? Pravidelné odborné čištění je klíčové pro její dlouhou životnost i zachování původního vzhledu. Naši specialisté používají šetrné, ale účinné prostředky a technologii, která dřevo nepoškodí a zároveň odstraní nečistoty, mastnotu i stopy používání.",
    text2: "Zajišťujeme profesionální čištění všech typů dřevěných podlah v domácnostech i komerčních prostorách. Podlahu vyčistíme, ošetříme a doporučíme následnou údržbu, aby si zachovala svůj přirozený lesk a byla chráněna proti dalšímu opotřebení. Díky pravidelné péči předejdete nutnosti časté renovace a vaše dřevo bude stále působit reprezentativně a útulně.",
    imageBefore: "/images/cisteni-podlah-realizace-pred.jpg",
    imageAfter: "/images/cisteni-podlah-realizace-po.jpg"
  },
  renovace: {
    title: "Renovace dřevěných teras",
    text1: "Vaše terasa je místem odpočinku a pohody, ale vlivem počasí a používání může časem ztrácet svůj původní vzhled. Renovace dřevěné terasy je ideálním způsobem, jak navrátit povrchu krásu, ochranu a prodloužit jeho životnost. Naši odborníci posoudí stav dřeva a zvolí nejvhodnější postup, aby terasa znovu působila jako nová a odolala náročným venkovním podmínkám.",
    text2: "Provádíme kompletní renovaci dřevěných teras – od čištění a broušení, přes ošetření spár a opravy poškozených částí, až po finální nátěr olejem nebo ochranným prostředkem proti povětrnostním vlivům. Díky našemu profesionálnímu přístupu bude vaše terasa chráněná, esteticky atraktivní a připravená sloužit po mnoho dalších let.",
    imageBefore: "/images/renovace-teras-realizace-pred.png",
    imageAfter: "/images/renovace-teras-realizace-po.png"
  },
  dvere: {
    customHtml: `
          <div class="left">
        <h2>Prodej a montáž dveří</h2>
        <p>Naše firma AZ Podlahářství – od A do Z zastupuje renomovaného polského výrobce POL-SKONE, který se specializuje na interiérové a vchodové dveře, obložkové zárubně a okna.</p>
        <p>Zajišťujeme prodej, zaměření i odbornou montáž po celé České republice.</p>
        <ul>
          <li>Široký výběr moderních i klasických dekorů</li>
          <li>Kvalitní materiály a precizní zpracování</li>
          <li>Profesionální přístup a kompletní servis</li>
          <li>Dveře, obložky i okna přesně na míru</li>
        </ul>
      </div>
      <div class="right">
        <h3>Realizace</h3>
        <div class="images-real">
        <a href="/images/montaz-dveri-pred.jpeg" class="glightbox" data-gallery="services">
          <img src="/images/montaz-dveri-pred.jpeg" alt="Před realizací" title="Před">
        </a>
        <a href="/images/montaz-dveri.jpeg" class="glightbox" data-gallery="services">
          <img src="/images/montaz-dveri.jpeg" alt="Po realizaci" title="Po">
        </a>
        </div>
      </div>
        `
  }
};

// Deklarace globální proměnné, kterou lze z funkce showService přepsat.
let lightbox = null;

// Prvotní inicializace (spouští se při načtení stránky)
document.addEventListener('DOMContentLoaded', () => {
  lightbox = GLightbox({
    selector: '.glightbox'
  });
  // Volání showService('podlahy');
});


// Funkce pro zobrazení obsahu
// Funkce pro zobrazení obsahu
function showService(serviceKey) {
  const service = services[serviceKey];
  const contentDiv = document.getElementById("serviceContent");
  let newHtml;

  // KROK 1: Zničení staré GLightbox instance (pokud existuje)
  if (lightbox && typeof lightbox.destroy === 'function') {
    lightbox.destroy(); // Zruší navázání Lightboxu na staré HTML prvky
  }

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
        <div class="images-real">
        <a href="${service.imageBefore}" class="glightbox" data-gallery="services">
          <img src="${service.imageBefore}" alt="Před realizací" title="Před">
        </a>
        <a href="${service.imageAfter}" class="glightbox" data-gallery="services">
          <img src="${service.imageAfter}" alt="Po realizaci" title="Po">
        </a>
        </div>
      </div>
    `;
  }

  // KROK 2: Vytvoření nové GLightbox instance pro nový obsah
    // Přeuložíme novou instanci do globální proměnné 'lightbox'
    if (typeof GLightbox === 'function') {
        lightbox = GLightbox({
            selector: '.glightbox'
        });
    }


}

// Načti defaultně první službu
showService('podlahy');