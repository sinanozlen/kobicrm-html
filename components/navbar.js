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
<div class="bg-white w-full shadow-sm py-8">
  <div class="container mx-auto flex justify-left items-left">
    <!-- Logo -->
    <a href="/" class="text-left">
      <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="h-12 w-auto">
    </a>
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

