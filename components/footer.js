const FooterHtml = `
   <footer class="bg-gray-950 text-white py-6">
      <div class="container mx-auto flex flex-wrap justify-between items-center space-y-8 md:space-y-0">
         <!-- Sol Kısım - QR Kod ve Uygulama İndirme -->
         <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <h1 class="text-lg lg:text-2xl font-semibold">
               Uygulamayı indirin ve şirketinizi her yerden yönetin!
            </h1>
            <div class="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
               <!-- QR Kod -->
               <div class="bg-gray-800 p-4 rounded-lg shadow-md">
                  <img src="./img/qr.svg" alt="QR Code" class="w-[120px] h-auto object-contain" />
               </div>
               <!-- App Store ve Play Store -->
               <div class="flex flex-col items-center lg:items-start space-y-4 mt-4 lg:mt-0">
                  <a href="#"><img src="./img/appstore.svg" alt="App Store" class="w-[160px] h-auto" /></a>
                  <a href="#"><img src="./img/playstore.svg" alt="Play Store" class="w-[160px] h-auto" /></a>
               </div>
            </div>
         </div>

         <!-- Sağ Kısım - CRM ile İlgili Görsel -->
         <div class="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img src="./img/footerokey.png" alt="CRM Illustration" class="max-w-full lg:max-w-[690px] rounded-lg shadow-md" />
         </div>
      </div>

      <!-- Alt Menü -->
      <div class="mt-12 border-t border-gray-700 pt-6">
         <div class="container mx-auto flex flex-wrap justify-between items-start space-y-6 md:space-y-0">
            <!-- Sol Kısım - KobiCRM ve Sosyal Medya -->
            <div class="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
               <p class="text-2xl font-bold text-white">KOBİCRM</p>
               <ul class="flex space-x-4">
                  <li><a href="#" class="text-white hover:text-gray-400 text-xl"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="#" class="text-white hover:text-gray-400 text-xl"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="#" class="text-white hover:text-gray-400 text-xl"><i class="fab fa-youtube"></i></a></li>
                  <li><a href="#" class="text-white hover:text-gray-400 text-xl"><i class="fab fa-twitter"></i></a></li>
               </ul>
            </div>

            <!-- Sağ Kısım - Menü -->
            <div class="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm lg:text-base justify-center items-center text-center">
   <ul class="space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">Hizmetlerimiz</a></li>
      <li><a href="./pricing.html" class="text-gray-400 hover:text-white">Fiyatlar</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Entegrasyon & API</a></li>
   </ul>
   <ul class="space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">Kullanım Şartları</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Gizlilik Politikası</a></li>
      <li><a href="#" class="text-gray-400 hover:text-white">Çerez Politikası</a></li>
   </ul>
   <ul class="space-y-2">
      <li><a href="#" class="text-gray-400 hover:text-white">Yardım Merkezi</a></li>
      <li><a href="./about.html" class="text-gray-400 hover:text-white">Hakkımızda</a></li>
      <li><a href="./contact.html" class="text-gray-400 hover:text-white">İletişim</a></li>
   </ul>
</div>

         </div>
      </div>
   </footer>
`;
