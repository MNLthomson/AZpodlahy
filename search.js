document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultsBox = document.getElementById("searchResults");

  // 🔹 Mapování klíčových slov na produkty/služby
  const keywords = {
    "laminát": { type: "product", key: "lamilat", label: "Laminátové podlahy" },
    "vinyl": { type: "product", key: "vinyl", label: "Vinylové podlahy" },
    "koberec": { type: "product", key: "koberec", label: "Koberce" },
    "koberce": { type: "product", key: "koberec", label: "Koberce" },
    "pvc": { type: "product", key: "pvc", label: "PVC podlahy" },
    "marmoleum": { type: "product", key: "marmoleum", label: "Marmoleum" },
    "dřevo": { type: "product", key: "drevo", label: "Dřevěné podlahy" },
    "korek": { type: "product", key: "korek", label: "Korkové podlahy" },
    "sokl": { type: "product", key: "sokl", label: "Schody a sokly" },

    "pokládka": { type: "service", key: "pokladka", label: "Pokládka podlah" },
    "renovace": { type: "service", key: "renovace", label: "Renovace" },
    "čištění": { type: "service", key: "cisteni", label: "Čištění" },
    "broušení": { type: "service", key: "brouseni", label: "Broušení" },
  };

  // 🔹 Hlavní funkce vyhledávání
  function searchWebsite() {
    const query = searchInput.value.toLowerCase().trim();
    resultsBox.innerHTML = "";

    if (!query) return;

    // Najdi shody
    const matches = Object.keys(keywords).filter((word) =>
      query.includes(word)
    );

    if (matches.length === 0) {
      resultsBox.innerHTML = `<p class="no-results">Nic nebylo nalezeno.</p>`;
      return;
    }

    // Zobraz seznam výsledků
    matches.forEach((word) => {
      const item = keywords[word];
      const div = document.createElement("div");
      div.classList.add("result-item");
      div.textContent = item.label;

      div.addEventListener("click", () => {
        if (item.type === "product") {
          if (typeof showProduct === "function") {
            showProduct(item.key);
          } else {
            console.log("Zobrazuji produkt:", item.key);
          }
        } else if (item.type === "service") {
          if (typeof showService === "function") {
            showService(item.key);
          } else {
            console.log("Zobrazuji službu:", item.key);
          }
        }
        resultsBox.innerHTML = "";
        searchInput.value = item.label;
      });

      resultsBox.appendChild(div);
    });
  }

  // Eventy
  searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchWebsite();
  });

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      searchWebsite();
    }
  });

  searchInput.addEventListener("input", searchWebsite);
});
