const NavbarHtml = `
        <!-- Navbar -->
<nav class="bg-blue-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 left-0 w-full z-50 shadow-lg" style="padding: 0.00005rem 0;"> <!-- Yükseklik yarıya düşürüldü, padding ayarlandı -->
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2"> 
    <!-- Logo -->
    <div class="pt-2">
      <img src="img/logo.svg" alt="" />
    </div>
<!-- Anasayfa Menüsü -->
<div class="relative">
  <a href="/index.html" class="py-2 px-4 text-gray-900 hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-brightBlue md:p-0 md:w-auto dark:text-white md:dark:hover:text-brightBlue dark:hover:bg-brightBlueSupLight md:dark:hover:bg-transparent">
    Anasayfa
  </a>      
</div>


    <!-- Kurumsal Menüsü -->
    <div class="relative">
      <button id="menuKurumsal" class="py-2 px-4 text-gray-900 hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-brightBlue md:p-0 md:w-auto dark:text-white md:dark:hover:text-brightBlue dark:hover:bg-brightBlueSupLight md:dark:hover:bg-transparent">
        Kurumsal
      </button>
      <div id="dropdownKurumsal" class="absolute left-0 mt-2 hidden w-44 bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li><a href="about.html" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">Hakkımızda</a></li>
          <li><a href="/misyon_vizyon.html" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">Misyonumuz ve Vizyonumuz</a></li>
          
          <li><a href="/contact.html" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">İletişim</a></li>
        </ul>
      </div>
    </div>

    <!-- Hizmetler Menüsü -->
    <div class="relative">
      <button id="menuHizmetler" class="py-2 px-4 text-gray-900 hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-brightBlue md:p-0 md:w-auto dark:text-white md:dark:hover:text-brightBlue dark:hover:bg-brightBlueSupLight md:dark:hover:bg-transparent">
        Hizmetler
      </button>
      <div id="dropdownHizmetler" class="absolute left-0 mt-2 hidden w-44 bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">Bulut Hizmeti</a></li>
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">Masaüstü Hizmeti</a></li>
          <li>
            <!-- Yeni Dropdown -->
            <div class="relative">
              <button id="doubleDropdownButton" type="button" class="flex items-center justify-between w-full px-4 py-2 hover:bg-blue-600 dark:hover:bg-black dark:hover:text-black">
                Tanıtım Hizmetleri
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div id="doubleDropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li><a href="#" class="block px-4 py-2 hover:bg-blue-300 dark:hover:bg-blue-600 dark:text-blue-600 dark:hover:text-blue-600">Reklam</a></li>
                  <li><a href="#" class="block px-4 py-2 hover:bg-blue-300 dark:hover:bg-blue-600 dark:text-blue-600 dark:hover:text-blue-600">Web Sitesi</a></li>
   
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Uygulamalar Menüsü -->
    <div class="relative">
      <button id="menuUygulamalar" class="py-2 px-4 text-gray-900 hover:bg-blue-600 md:hover:bg-transparent md:border-0 md:hover:text-brightBlue md:p-0 md:w-auto dark:text-white md:dark:hover:text-brightBlue dark:hover:bg-brightBlueSupLight md:dark:hover:bg-transparent">
        Uygulamalar
      </button>
      <div id="dropdownUygulamalar" class="absolute left-0 mt-2 hidden w-44 bg-white rounded-lg shadow-lg dark:bg-gray-700">
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">CRM</a></li>        
          <li><a href="#" class="block px-4 py-2 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white">Fatura</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>

      `;
