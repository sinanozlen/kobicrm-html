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
  