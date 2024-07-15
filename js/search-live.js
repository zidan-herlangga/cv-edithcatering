document.addEventListener("DOMContentLoaded", function () {
  // Items array with name and URL
  const items = [
    {
      name: "Paket Pernikahan",
      url: "paket-pernikahan/wedding-package-300.html",
    },
    { name: "Gubukan", url: "gubukan/gubukan.html" },
    { name: "Catalog", url: "catalog/catalog.html" },
    { name: "Menu Box", url: "menubox/menu-box.html" },
    { name: "Galeri", url: "galeri.html" },
    { name: "Dekorasi", url: "dekorasi.html" },
    { name: "Video", url: "video.html" },
    // Add other items similarly
  ];

  const searchInput = document.getElementById("search-input");
  const searchResults = document.getElementById("search-results");
  const noResults = document.getElementById("no-results");

  // Function to update search results based on input value
  function updateSearchResults() {
    const query = searchInput.value.trim().toLowerCase();
    searchResults.innerHTML = "";

    if (query === "") {
      searchResults.style.display = "none";
      noResults.style.display = "none";
      return;
    }

    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    if (filteredItems.length > 0) {
      noResults.style.display = "none";
      searchResults.style.display = "block";
      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href = item.url;
        a.textContent = item.name;
        div.appendChild(a);
        searchResults.appendChild(div);
      });
    } else {
      searchResults.style.display = "block";
      noResults.style.display = "block";

      const div = document.createElement("div");
      div.textContent = `"${query}" Kata tidak ditemukan`;
      div.style.color = "#333";
      searchResults.appendChild(div);
    }
  }

  // Event listener for input changes in search input
  searchInput.addEventListener("input", updateSearchResults);

  // Initialize Feather icons
  feather.replace();
});
