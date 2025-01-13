export function createHead() {
    // Head bölümünü seç
    const head = document.querySelector("head");
  
    // Favicon oluştur ve ekle
    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "./img/favicon.png";
    favicon.type = "image/png";
    head.appendChild(favicon);

  }

 // Menü ve buton referansları
 const userMenuToggle = document.getElementById('user-menu-toggle');
 const userMenu = document.getElementById('user-menu');

 // Menü başlangıçta gizli
 userMenu.classList.add('hidden');

 // Menü butonuna tıklama olayı
 userMenuToggle.addEventListener('click', (e) => {
     e.stopPropagation();
     userMenu.classList.toggle('hidden');
 });

 // Sayfa genelinde başka bir yere tıklanınca menüyü kapatma
 document.addEventListener('click', () => {
     if (!userMenu.classList.contains('hidden')) {
         userMenu.classList.add('hidden');
     }
 });

 // Menü üzerinde tıklama olayını engelleme
 userMenu.addEventListener('click', (e) => {
     e.stopPropagation();
 });
 

  // Dinamik Breadcrumb Oluşturma
  const breadcrumb = document.getElementById("breadcrumb");
  
  // URL Parçalarını Al
  const path = window.location.pathname.split("/").filter(Boolean);
  let breadcrumbHTML = `<ol class="flex items-center whitespace-nowrap">`;
  
  