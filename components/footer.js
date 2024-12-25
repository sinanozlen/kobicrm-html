const FooterHtml = `
   <footer class="bg-gray-950 text-white py-6">
    <div class="container mx-auto flex flex-wrap justify-between items-center space-y-8 md:space-y-0">
        <!-- Sol Kısım - QR Kod ve Uygulama İndirme -->
        <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h1 class="text-xl md:text-2xl font-semibold">
                Uygulamayı indirin ve şirketinizi her yerden yönetin!
            </h1>
            <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                <!-- QR Kod -->
                <div class="bg-gray-800 p-4 rounded-lg shadow-md">
                    <img src="./img/qr.svg" alt="QR Code" class="max-w-[120px] h-auto object-contain" />
                </div>
                <!-- App Store ve Play Store -->
                <div class="flex flex-col items-center md:items-start space-y-4">
                    <a href="#"><img src="./img/appstore.svg" alt="App Store" class="max-w-[160px] h-auto" /></a>
                    <a href="#"><img src="./img/playstore.svg" alt="Play Store" class="max-w-[160px] h-auto" /></a>
                </div>
            </div>
        </div>

        <!-- Sağ Kısım - CRM ile İlgili Görsel -->
        <div class="w-full md:w-1/2 flex justify-end">
            <img src="./img/footerokey.png" alt="CRM Illustration" class="max-w-[690px] rounded-lg shadow-md" />
        </div>
    </div>

    <!-- Alt Menü -->
    <div class="mt-12 border-t border-gray-700 pt-6">
        <div class="container mx-auto flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
            <!-- Sol Kısım - KobiCRM ve Sosyal Medya -->
            <div class="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
                <a href="/">
                    <img src="./img/kobicrm-logo.png" alt="KobiCRM Logo" class="max-w-[150px] h-auto">
                </a>
                <ul class="flex space-x-6 mt-4">
                    <li><a href="#" class="text-blue-400 hover:text-blue-500 text-2xl"><i class="fab fa-facebook"></i></a></li>
                    <li><a href="#" class="text-pink-400 hover:text-pink-500 text-2xl"><i class="fab fa-instagram"></i></a></li>
                    <li><a href="#" class="text-red-500 hover:text-red-600 text-2xl"><i class="fab fa-youtube"></i></a></li>
                    <li><a href="#" class="text-blue-300 hover:text-blue-400 text-2xl"><i class="fab fa-twitter"></i></a></li>
                </ul>
            </div>

            <!-- Sağ Kısım - Menü -->
            <div class="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 gap-4 text-base">
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Hizmetlerimiz</a></li>
                    <li><a href="./pricing.html" class="text-gray-400 hover:text-white">Fiyatlar</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Entegrasyon & API</a></li>
                </ul>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Kullanım Şartları</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
                    <li><a href="#" class="text-gray-400 hover:text-white">Çerez Politikası</a></li>
                </ul>
                <ul>
                    <li><a href="#" class="text-gray-400 hover:text-white">Yardım Merkezi</a></li>
                    <li><a href="./about.html" class="text-gray-400 hover:text-white">Hakkımızda</a></li>
                    <li><a href="./contact.html" class="text-gray-400 hover:text-white">İletişim</a></li>
                </ul>
            </div>
        </div>
    </div>
</footer>

`;
