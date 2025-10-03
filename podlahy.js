// Data pro každou službu
    const products = {
      lamilat: {
        title: "Laminátové plovoucí podlahy",
        text1: "Laminátové podlahy jsou oblíbenou volbou díky své odolnosti, jednoduché pokládce a široké nabídce dekorů. Věrně imitují dřevo, kámen nebo dlažbu a jsou cenově dostupnější než přírodní materiály. Díky moderním technologiím mají velmi realistický vzhled a dlouhou životnost.",
        titleVyhody: "Výhody laminátových podlah:",
        vyhoda1: "Široká nabídka dekorů a barev.",
        vyhoda2: "Vysoká odolnost proti poškrábání a opotřebení.",
        vyhoda3: "Snadná údržba a jednoduchá instalace plovoucím způsobem.",
        vyhoda4: "Výborný poměr cena / výkon.",
        imageProduct: "/images/podlahy/podlahy-lamilat.jpg"
      },
      vinyl: {
        title: "Vinylové podlahy",
        text1: "Vinylové podlahy nabízí krásné a exkluzivní vzory. Můžeme vybírat z mnoha vzorníků a barev. Vinylové podlahy věrně napodobují vzor dřeva, kamene, dlaždiček i korku. Díky technologii 3D embosování mají plastický vzhled a jsou odolné vůči vlhkosti i mechanickému zatížení.",
        titleVyhody: "Výhody vinylových podlah:",
        vyhoda1: "Nabízejí nepřeberné množství barev a moderní vzhled.",
        vyhoda2: "Snadná údržba, pokládka a výměnitelnost dílců.",
        vyhoda3: "Vhodné pro alergiky, mají tepelně izolační vlastnosti.",
        vyhoda4: "Odolné i proti pádům předmětů.",
        imageProduct: "/images/podlahy/podlahy-vinyl.png"
      },
      drevo: {
        title: "Dřevěné plovoucí podlahy",
        text1: "Dřevěné podlahy přinášejí do interiéru přírodní krásu a jedinečný charakter. Každý kus dřeva má svou vlastní kresbu a barvu, což dodává interiéru exkluzivitu. Dřevo je přírodní materiál s dlouhou životností a možností renovace broušením.",
        titleVyhody: "Výhody dřevěných podlah:",
        vyhoda1: "Přirozený vzhled a originální struktura dřeva.",
        vyhoda2: "Možnost opakované renovace.",
        vyhoda3: "Dlouhá životnost při správné péči.",
        vyhoda4: "Přírodní a ekologický materiál.",
        imageProduct: "/images/podlahy/podlahy-drevene-plovouci.jpg"
      },
      trivrstve: {
        title: "Třívrstvé podlahy",
        text1: "Třívrstvé podlahy patří mezi oblíbené dřevěné krytiny, které kombinují krásu přírodního dřeva s vysokou stabilitou. Jsou tvořeny třemi vrstvami – nášlapná vrstva je z pravého dřeva, střední a spodní vrstva zajišťují pevnost a odolnost proti kroucení. Díky této konstrukci si podlaha uchovává svůj přirozený vzhled a je méně náchylná na změny vlhkosti a teploty.",
        titleVyhody: "Výhody třívrstvých podlah:",
        vyhoda1: "Přírodní vzhled a možnost výběru z různých dřevin.",
        vyhoda2: "Vysoká rozměrová stabilita díky vrstvené konstrukci.",
        vyhoda3: "Možnost renovace přebroušením.",
        vyhoda4: "Vhodné i pro podlahové vytápění.",
        imageProduct: "/images/podlahy/trivrstve-podlahy.jpg"
      },
      marmoleum: {
        title: "Marmoleum - Přírodní linoleum",
        text1: "Marmoleum je přírodní podlaha vyrobená z obnovitelných surovin, jako je lněný olej, juta a pryskyřice. Je ekologická, zdravotně nezávadná a zároveň velmi odolná. Skvěle se hodí do domácností i veřejných prostor díky své trvanlivosti a antistatickým vlastnostem.",
        titleVyhody: "Výhody marmolea:",
        vyhoda1: "100% přírodní a ekologická podlaha.",
        vyhoda2: "Velmi dlouhá životnost a vysoká odolnost.",
        vyhoda3: "Antistatické a antibakteriální vlastnosti.",
        vyhoda4: "Snadná údržba a moderní design.",
        imageProduct: "/images/podlahy/podlahy-marmoleum.png"
      },
      pvc: {
        title: "PVC podlahy",
        text1: "PVC podlahy jsou cenově dostupným a univerzálním řešením pro všechny typy interiérů. Díky široké nabídce vzorů a barev napodobují dřevo, dlažbu i kámen. Jsou odolné vůči vodě a nenáročné na údržbu, což je činí ideální volbou pro kuchyně a koupelny.",
        titleVyhody: "Výhody PVC podlah:",
        vyhoda1: "Široká nabídka dekorů za výhodnou cenu.",
        vyhoda2: "Odolné vůči vlhkosti a snadno se čistí.",
        vyhoda3: "Příjemný došlap a komfort při chůzi.",
        vyhoda4: "Vhodné i do prostor s vysokou zátěží.",
        imageProduct: "/images/podlahy/podlahy-pvc.png"
      },
      koberec: {
        title: "Koberce",
        text1: "Koberce přinášejí do interiéru útulnost, teplo a komfort. Jsou k dispozici v mnoha barvách, vzorech a materiálech, což umožňuje vytvořit jedinečný design. Navíc tlumí hluk a poskytují příjemný povrch pro chůzi naboso.",
        titleVyhody: "Výhody koberců:",
        vyhoda1: "Měkký a komfortní povrch.",
        vyhoda2: "Široká nabídka barev, vzorů a typů.",
        vyhoda3: "Tlumí kročejový hluk a zlepšují akustiku místnosti.",
        vyhoda4: "Pocit tepla a útulnosti.",
        imageProduct: "/images/podlahy/podlahy-koberec.jpg"
      },
      sokl: {
        title: "Schody a soklové lišty",
        text1: "Schody a soklové lišty jsou nezbytnou součástí každé podlahy, protože zajišťují estetické zakončení a funkčnost celého interiéru. Soklové lišty zakrývají dilatační spáry a chrání stěny, zatímco schody musí být odolné a bezpečné.",
        titleVyhody: "Výhody schodů a soklových lišt:",
        vyhoda1: "Estetické zakončení podlahy.",
        vyhoda2: "Ochrana stěn proti poškození.",
        vyhoda3: "Široká nabídka materiálů a barev.",
        vyhoda4: "Bezpečnostní a funkční řešení pro každý interiér.",
        imageProduct: "/images/podlahy/podlahy-schody.jpg"
      }
    };

    // Funkce pro zobrazení obsahu produktu
    function showProduct(productKey) {
      const product = products[productKey];
      const contentDiv = document.getElementById("productContent");

      contentDiv.innerHTML = `
        <div class="left">
          <h2>${product.title}</h2>
          <p>${product.text1}</p>
          <h3>${product.titleVyhody}</h3>
          <ul>
            <li>${product.vyhoda1}</li>
            <li>${product.vyhoda2}</li>
            <li>${product.vyhoda3}</li>
            <li>${product.vyhoda4}</li>
        </div>
        <div class="right">
          <img src="${product.imageProduct}" alt="Detail 1">
        </div>
      `;
    }

    // Zobrazí defaultně první produkt
    showProduct('lamilat');