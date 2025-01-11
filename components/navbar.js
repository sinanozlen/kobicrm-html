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
        <a href="#" class="hover:underline">English</a>
        <!-- Dikey Çizgi -->
        <span class="border-l border-white h-4 mx-2"></span>
        <a href="/login.html" class="hover:underline">Giriş Yap</a>
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
<div class="bg-gray-100 w-full shadow-sm">
  <div class="container mx-auto px-6 py-3 flex justify-between items-center">
    <!-- Sol: Anasayfa İkonu -->
    <div class="flex items-center space-x-4">
      <a href="/" class="flex items-center text-gray-900 font-medium hover:text-blue-700 transition duration-300">
        <i class="fa fa-home text-lg"></i> <span class="ml-2"></span>
      </a>
    </div>

    <!-- Orta: Hakkımızda ve Fiyatlar -->
    <div class="hidden lg:flex items-center space-x-4">
      <a href="/about.html" class="flex items-center text-gray-900 font-semibold hover:text-blue-700 transition duration-300">
        Hakkımızda
      </a>
      <!-- Dikey Çizgi -->
      <span class="border-l border-gray-400 h-5 mx-2"></span>
      <a href="/pricing.html" class="flex items-center text-gray-900 font-semibold hover:text-blue-700 transition duration-300">
        Fiyatlar
      </a>
    </div>

    <!-- Sağ: Giriş Yap ve Hesap Oluştur -->
    <div class="flex space-x-4">
      <a href="/login.html" class="flex items-center text-gray-900 font-semibold hover:text-blue-700 transition duration-300">
        Giriş Yap
      </a>
      <span class="border-l border-gray-400 h-5 mx-2"></span>
      <a href="/register.html" class="flex items-center text-gray-900 font-semibold hover:text-blue-700 transition duration-300">
        Hesap Oluştur
      </a>
    </div>
  </div>
</div>




`;