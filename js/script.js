// Genel işlev için fonksiyon
function handleMenuHover(menuButtonId, dropdownId) {
  const menuButton = document.getElementById(menuButtonId);
  const dropdownMenu = document.getElementById(dropdownId);
  let timeoutId;

  menuButton.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.remove("hidden");
    // Diğer menüler kapanacak
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
      if (menu !== dropdownMenu) {
        menu.classList.add("hidden");
      }
    });
  });

    // Fare butondan ayrıldığında
  menuButton.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 300); // Menü 300ms sonra kapanır
  });

  // Fare menü üzerine geldiğinde
  dropdownMenu.addEventListener("mouseenter", () => {
    clearTimeout(timeoutId);
  });

  // Fare menüden ayrıldığında
  dropdownMenu.addEventListener("mouseleave", () => {
    timeoutId = setTimeout(() => {
      dropdownMenu.classList.add("hidden");
    }, 300); // Menü 300ms sonra kapanır
  });
}

// Menüleri başlat
handleMenuHover('menuKurumsal', 'dropdownKurumsal');
handleMenuHover('menuHizmetler', 'dropdownHizmetler');
handleMenuHover('menuUygulamalar', 'dropdownUygulamalar');
handleMenuHover('doubleDropdownButton', 'doubleDropdown'); // Yeni menü için

