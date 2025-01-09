const NavbarHtml = `
<div id="root" class="mx-0 px-0 w-full">
    <div class="bg-blue-600 py-2 w-full">
        <div class="flex justify-between items-center px-6">
            <a href="/" class="text-white text-base font-normal hover:underline text-xl">
                Mobile uygulamamızı şimdi indirin %20 indirim kazanın
            </a>
            <div class="flex space-x-6">
                <a class="text-white hover:underline flex items-center text-sm" href="#">English</a>
                <a class="text-white hover:underline flex items-center text-sm" href="/login.html">
                    Giriş Yap
                </a>
            </div>
        </div>
    </div>
</div>
<style>
  #menu-toggle:checked + #menu {
    display: block;
  }
</style>

<nav class="lg:px-16 px-6 shadow-md flex flex-wrap items-center lg:py-0 py-2 bg-white text-black dark:bg-gray-900 dark:text-white">
  <!-- Logo ve Başlık -->
  <div class="flex-1 flex justify-between items-center">
    <a href="/">
      <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="w-45 h-10">
    </a>
  </div>

  <!-- Menü Toggle -->
  <label for="menu-toggle" class="cursor-pointer lg:hidden block">
    <svg
      class="fill-current text-black dark:text-white"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
    >
      <title>menu</title>
      <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
    </svg>
  </label>
  <input class="hidden" type="checkbox" id="menu-toggle" />

  <!-- Menü -->
  <div class="hidden lg:flex lg:items-center lg:w-auto w-full justify-center" id="menu">
    <nav>
      <ul class="text-center items-center gap-x-5 pt-4 lg:text-lg lg:flex lg:pt-0">
        <li class="py-2 lg:py-0">
          <a href="/about.html" 
           class="text-lg font-medium hover:text-gray-200 text-black dark:text-white dark:hover:text-gray-400">
            Hakkımızda
        </a>
        </li>
        <li class="py-2 lg:py-0">
         <a href="/pricing.html" 
           class="text-lg font-medium hover:text-gray-200 text-black dark:text-white dark:hover:text-gray-400">
            Fiyatlar
        </a>
        </li>
      </ul>
    </nav>
  </div>
</nav>



`;
