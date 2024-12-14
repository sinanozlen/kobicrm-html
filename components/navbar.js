const NavbarHtml = `
<div id="root" class="mx-0 px-0 w-full">
    <!-- Yazılar ve indirim bilgileri alt kısmı -->
    <div class="bg-blue-900 py-2 w-full">
        <div class="flex justify-between items-center px-4">
            <h6 class="text-white text-lg font-bold">İLK GÖNDERİNİZİ 10 TL İNDİRİMLİ OLUŞTURUN! İNDİRİM KODUNUZ: NUA2781</h6>
            <div class="flex space-x-4">
                <a class="text-white hover:underline" href="#">English</a>
                <a class="text-white hover:underline" href="#"><i class="fa fa-sign-in"></i> Giriş Yap</a>
            </div>
        </div>
    </div>

    <!-- Ana içerik (Logo) -->
    <div class="header my-5 flex justify-between items-center px-4">
        <a href="/">
            <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="w-45 h-10">
        </a>
    </div>

   <!-- Menü kısmı -->
<nav id="menu" class="bg-gray-100 border-t border-gray-300 w-full">
    <div class="flex justify-between items-center px-4 w-full">
        <!-- Ev simgesi sol tarafta -->
        <div class="flex items-center">
            <a href="./" class="text-blue-600 hover:text-blue-800">
                <i class="fa fa-home mr-2"></i>
            </a>
        </div>

        <!-- Menü öğeleri ortada -->
        <div class="flex space-x-8 flex-grow justify-center">
            <a class="text-black hover:underline" href="./about.html">Hakkımızda</a>
            <a class="text-black hover:underline" href="./contact.html">İletişim</a>
            <a class="text-black hover:underline" href="./misyon_vizyon.html">Misyonumuz ve Vizyonumuz</a>
            <a class="text-black hover:underline" href="./pricing.html">Fiyatlar</a>
        </div>

        <!-- Kullanıcı Menüsü sağ tarafta -->
        <div class="flex items-center space-x-4 ml-auto relative">
            <a href="#" class="text-black hover:underline flex items-center" id="userMenuToggle">
                <i class="fa fa-user mr-2"></i> Kullanıcı Adı
            </a>
            <!-- Hesabım ve Çıkış Yap Menüsü (Başlangıçta gizli) -->
            <ul id="userMenu" class="absolute right-0 bg-white shadow-md mt-2 hidden">
                <li><a class="block px-4 py-2 text-blue-900 hover:bg-blue-100" href="#">Hesabım</a></li>
                <li><hr class="border-gray-300"></li>
                <li><a class="block px-4 py-2 text-blue-900 hover:bg-blue-100" href="#">Çıkış Yap</a></li>
            </ul>
        </div>

        <!-- Kayıt Ol kısmı -->
        <a class="text-black hover:underline" href="#"><i class="fa fa-user-plus"></i> Kayıt Ol</a>
    </div>
</nav>


    </nav>
</div>

`;

