const NavbarHtml = `
<div id="root" class="mx-0 px-0 w-full">
  <!-- Mobil Uygulama Mesajı -->
  <div id="mobile-app-banner" class="bg-blue-600 py-2 w-full fixed top-0 left-0 right-0 z-50">
    <div class="flex justify-between items-center px-6">
      <a href="/" class="text-white text-base font-normal hover:underline text-xl">
        Mobile uygulamamızı şimdi indirin %20 indirim kazanın
      </a>
      <div class="flex space-x-6">
        <a class="text-white hover:underline flex items-center text-sm" href="#">English</a>
        <a class="text-white hover:underline flex items-center text-sm" href="/login.html">Giriş Yap</a>
      </div>
    </div>
  </div>

<!-- Logo ve Bağlantılar -->
  <div id="logo-section" class="bg-white py-2 w-full fixed left-0 right-0 z-40">
    <div class="flex justify-between items-center px-6">
      <!-- Sol tarafta Home ikonu ve logo -->
      <div class="flex items-center space-x-4">
        <a href="/" class="flex items-center text-gray-800 hover:text-blue-600">
       <a href="/" class="flex justify-center items-center text-gray-800 hover:text-blue-600 hover:border-b-2 hover:border-blue-600">
  <img src="./img/home-button.png" alt="Home Button" class="h-6 w-6">
</a>


         
        <a href="/">
          <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="w-45 h-8">
        </a>
      </div>
      <!-- Sağda "Kayıt Ol" bağlantısı -->
     <a href="/login" class="text-lg font-bold text-blue-600 hover:border-b-2 hover:border-blue-600">
  Kayıt Ol
</a>

    </div>
  </div>

  <!-- Telefon ve Mail Bilgileri -->
  <div id="contact-info" class="bg-dark py-2 w-full fixed left-0 right-0 z-30" style="backdrop-filter: blur(10px);">
    <div class="flex justify-center items-center space-x-8 text-sm text-gray-600">
      <div class="flex items-center">
        <i class="fas fa-phone-alt text-blue-600 mr-2"></i>
        <span>Bize Ulaşın:</span>
        <a href="tel:+905555555555" class="text-blue-600 hover:underline ml-1">
          +90 555 555 55 55
        </a>
      </div>
      <div class="flex items-center">
        <i class="fas fa-envelope text-blue-600 mr-2"></i>
        <span>Email:</span>
        <a href="mailto:info@kobicrm.net" class="text-blue-600 hover:underline ml-1">
          info@kobicrm.net
        </a>
      </div>
    </div>
  </div>

  <!-- Navbar -->
  <nav id="navbar" class="lg:px-16 px-6 shadow-md flex items-center justify-between lg:justify-center py-2 bg-white text-black dark:bg-gray-900 dark:text-white fixed left-0 right-0 z-20" style="backdrop-filter: blur(10px);">
    <!-- Menü Toggle (Mobil için) -->
    <label for="menu-toggle" class="cursor-pointer lg:hidden block absolute top-2 right-4">
      <svg class="fill-current text-black dark:text-white" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input class="hidden" type="checkbox" id="menu-toggle" />

    <!-- Menü -->
    <div id="menu" class="hidden lg:flex lg:items-center lg:w-auto w-full lg:justify-center justify-start">
      <ul class="flex flex-col lg:flex-row items-center lg:gap-x-5 gap-y-2 lg:gap-y-0 pt-4 lg:pt-0">
        <li>
          <a href="/about.html" class="text-lg font-medium hover:text-gray-200 text-black dark:text-white dark:hover:text-gray-400">Hakkımızda</a>
        </li>
        <li>
          <a href="/pricing.html" class="text-lg font-medium hover:text-gray-200 text-black dark:text-white dark:hover:text-gray-400">Fiyatlar</a>
        </li>
      </ul>
    </div>
  </nav>
</div>
`;

// Dinamik Pozisyonlama
document.addEventListener("DOMContentLoaded", () => {
  const mobileBanner = document.getElementById("mobile-app-banner");
  const logoSection = document.getElementById("logo-section");
  const contactInfo = document.getElementById("contact-info");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  const adjustPositions = () => {
    const bannerHeight = mobileBanner.offsetHeight;
    const logoHeight = logoSection.offsetHeight;
    const contactHeight = contactInfo.offsetHeight;

    logoSection.style.top = `${bannerHeight}px`;
    contactInfo.style.top = `${bannerHeight + logoHeight}px`;
    navbar.style.top = `${bannerHeight + logoHeight + contactHeight}px`;
  };

  // Menü Toggle için görünürlük kontrolü
  menuToggle.addEventListener("change", () => {
    if (menuToggle.checked) {
      menu.classList.remove("hidden");
      menu.classList.add("block");
    } else {
      menu.classList.remove("block");
      menu.classList.add("hidden");
    }
  });

  adjustPositions();
  window.addEventListener("resize", adjustPositions);
});

