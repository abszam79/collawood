import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "Le nouveau modèle...",
      "de la Menuiserie Collaborative...",
      "en Région Parisienne..."],
      typeSpeed: 100,
      loop: true
    });
  }
}

loadDynamicBannerText();

export { loadDynamicBannerText };


