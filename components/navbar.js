const NavbarHtml = `
<div id="root" class="w-full">
  <!-- Üst Mesaj Banner -->
  <div class="bg-blue-900 py-2 w-full">
    <div class="flex justify-between items-center px-6 text-white text-sm">
      <!-- Mesaj Metni -->
      <span class="md:text-lg sm:text-md font-bold tracking-wide hidden sm:block md:block lg:block xl:block">
        Mobil uygulamamızı şimdi indirin %20 indirim kazanın
      </span>
      <span class="text-sm font-bold tracking-wide sm:hidden md:hidden lg:hidden xl:hidden">
        info@kobicrm.net
      </span>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:underline dark">English</a>
        <!-- Dikey Çizgi -->
        <span class="border-l border-white h-4 mx-2"></span>
        <a href="/login.html" class="hover:underline dark">Giriş Yap</a>
      </div>
    </div>
  </div>
</div>


<!-- Logo Bölümü -->
<div class="bg-white w-full shadow-sm py-8 flex">
  <div class="container mx-auto flex justify-left items-left">
    <!-- Logo -->
    <a href="/" class="text-left">
      <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="h-12 w-auto">
    </a>
  </div>
<!-- Hamburger Menü -->
<div class="inset-0 flex justify-end mr-4 mt-1 sm:hidden">
  <button id="hamburger-menu" class="absolute text-gray-600 hover:text-gray-800 p-2 rounded-full">
    <svg
      class="w-8 h-8"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      ></path>
    </svg>
  </button>
  <div
    id="sidebar"
    class="z-50 indent-3  fixed top-0 right-0 w-screen h-screen bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out">
    <div class="flex items-center justify-between p-4 border-b bg-blue-900 text-white">
      <strong class="text-lg font-semibold">KOBİCRM'e Hoş Geldiniz!</strong>
      <button id="close-menu" class="text-gray-600 hover:text-gray-800 p-2 rounded-full">
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
    <div class="p-4">
      <ul class="space-y-6">
      <li class="flex items-center space-x-3 group">
          <i class="fa fa-home text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="/" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            Home
          </a>
        </li>
        <li class="flex items-center space-x-3 group">
          <i class="fa fa-info-circle text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="/about.html" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            Hakkımızda
          </a>
        </li>
        <li class="flex items-center space-x-3 group">
          <i class="fa fa-user-tie text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="/services.html" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            Hizmetlerimiz
          </a>
        </li>
        <li class="flex items-center space-x-3 group">
          <i class="fa fa-lira-sign text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="/pricing.html" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            Fiyatlar
          </a>
        </li>
        <li class="flex items-center space-x-3 group">
          <i class="fa fa-question-circle text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="#" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            Yardım Merkezi
          </a>
        </li>
        <li class="flex items-center space-x-3 group">
          <i class="fa fa-link text-lg text-blue-800 group-hover:scale-110 transition-transform"></i>
          <a href="/contact.html" class="text-gray-700 px-3 py-1 relative after:absolute after:bottom-0 after:left-5 after:right-0  after:h-[1px]  after:bg-blue-900 after:duration-300 hover:after:w-full after:transform after:scale-x-0 after:origin-left after:transition-transform hover:after:scale-x-100">
            İletişim
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>


<!-- Navbar -->
<div class="bg-gray-100 dark:bg-gray-800 w-full shadow-sm justify-center flex">
  <div class="container mx-auto sm:mx-6 px-2 sm:px-6 py-3 flex justify-between text-sm sm:text-sm md:text-base lg:text-lg">
    <!-- Sol: Anasayfa ve Diğer Bağlantılar -->
    <div class="flex items-center space-x-6 sm:space-x-2 md:space-x-4 lg:space-x-6">
      <!-- Anasayfa -->
      <a href="/" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
        <i class="fa fa-home text-lg"></i>
      </a>

      <!-- Hakkımızda -->
      <a href="/about.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300 hidden sm:block">
       <span class="ml-2">Hakkımızda</span>
      </a>
       <!-- Hizmetlerimiz -->
      <a href="/services.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300 hidden sm:block">
      <span class="ml-2">Hizmetlerimiz</span>
      </a>
      <!--Fiyatlar -->
      <a href="/pricing.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300 hidden sm:block">
        
        <span class="ml-2">Fiyatlar</span>
      </a>
    </div>

      

     

   <!-- Sağ: Giriş Yap ve Hesap Oluştur -->
<div class="flex items-center space-x-8">
  <a href="/login.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
    <i class="fas fa-sign-in-alt text-lg mr-2"></i> Giriş Yap
  </a>
  
  <a href="/register.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
    <i class="fas fa-user-plus text-lg mr-2"></i> Hesap Oluştur
  </a>
</div>

  </div>
</div>




`;



//  Hamburger Menü Script Başlangıç 

document.addEventListener("click", (e) => {
  const sidebar = document.getElementById("sidebar");
  if (e.target.closest("#hamburger-menu")) {
    sidebar.classList.toggle("translate-x-full");
  }
  if (e.target.closest("#close-menu")) {
    sidebar.classList.add("translate-x-full");
  }
});

//  Hamburger Menü Script Bitiş 


