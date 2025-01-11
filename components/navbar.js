const NavbarHtml = `
<div id="root" class="w-full">
  <!-- Üst Mesaj Banner -->
  <div class="bg-blue-900 py-2 w-full">
    <div class="flex justify-between items-center px-6 text-white text-sm">
      <!-- Mesaj Metni -->
      <span class="text-lg font-bold tracking-wide">
        Mobil uygulamamızı şimdi indirin %20 indirim kazanın
      </span>
      <div class="flex items-center space-x-4">
        <a href="#" class="hover:text-blue-700 dark:hover:text-blue-400">English</a>
        <!-- Dikey Çizgi -->
        <span class="border-l border-white h-4 mx-2"></span>
        <a href="/login.html" class="hover:text-blue-700 dark:hover:text-blue-400">Giriş Yap</a>
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
<div class="bg-gray-100 dark:bg-gray-800 w-full shadow-sm">
  <div class="container mx-auto px-6 py-3 flex justify-between items-center">
    <!-- Sol: Anasayfa ve Diğer Bağlantılar -->
    <div class="flex items-center space-x-6">
      <!-- Anasayfa -->
      <a href="/" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
        <i class="fa fa-home text-lg"></i>
      </a>

      <!-- Hakkımızda -->
      <a href="/about.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
       <span class="ml-2">Hakkımızda</span>
      </a>
       <!-- Hizmetlerimiz -->
      <a href="/services.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
      <span class="ml-2">Hizmetlerimiz</span>
      </a>
      <!--Fiyatlar -->
      <a href="/pricing.html" class="flex items-center text-gray-900 dark:text-white font-medium hover:text-blue-700 dark:hover:text-blue-400 transition duration-300">
        
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