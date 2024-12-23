const NavbarHtml = `
<div id="root" class="mx-0 px-0 w-full">
    <div class="bg-blue-600 py-2 w-full">
        <div class="flex justify-between items-center px-6">
            <a href="/" class="text-white text-base font-normal hover:underline">
                Mobile uygulamamızı şimdi indirin %20 indirim kazanın
            </a>
            <div class="flex space-x-6">
                <a class="text-white hover:underline text-sm" href="#">English</a>
                <a class="text-white hover:underline flex items-center text-sm" href="/login.html">
                    Giriş Yap
                </a>
            </div>
        </div>
    </div>
</div>
<!-- Menü Çubuğu -->
<nav class="flex items-center justify-between gap-4 px-6 py-4" aria-label="penguin ui menu">
    <a href="/">
        <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="w-45 h-10">
    </a>

    <!-- Desktop Menu -->
    <ul class="hidden items-center gap-4 flex-shrink-0 sm:flex">
        <li>
            <a href="/about.html" class="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white">
                Hakkımızda
            </a>
        </li>
        <li>
            <a href="/pricing.html" class="font-medium text-neutral-600 underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-neutral-300 dark:hover:text-white">
                Fiyatlar
            </a>
        </li>

        <!-- Kullanıcı Fotoğrafı -->
        <li class="relative flex items-center">
            <button id="user-menu-toggle" class="rounded-full">
                <img src="https://penguinui.s3.amazonaws.com/component-assets/avatar-8.webp" alt="User Profile" class="size-10 rounded-full object-cover">
            </button>

           <!-- Kullanıcı Menüsü -->
<ul id="user-menu" class="hidden absolute right-0 top-16 w-48 flex-col overflow-hidden rounded-md border border-neutral-300 bg-white shadow-lg z-50">
  <li class="border-b border-neutral-300">
    <div class="flex flex-col px-4 py-2">
      <span class="text-sm font-medium text-neutral-900">Alice Brown</span>
      <p class="text-xs text-neutral-600">alice.brown@gmail.com</p>
    </div>
  </li>
  <li>
    <a href="#" class="block px-4 py-2 text-sm text-neutral-600 hover:bg-gray-100">Dashboard</a>
  </li>
  <li>
    <a href="#" class="block px-4 py-2 text-sm text-neutral-600 hover:bg-gray-100">Subscription</a>
  </li>
  <li>
    <a href="#" class="block px-4 py-2 text-sm text-neutral-600 hover:bg-gray-100">Settings</a>
  </li>
  <li>
    <a href="#" class="block px-4 py-2 text-sm text-neutral-600 hover:bg-gray-100">Sign Out</a>
  </li>
</ul>
        </li>
    </ul>
</nav>


`;
