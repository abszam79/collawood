import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "The New Digital Agency...",
      "in Artificial Intelligence...",
      "Just for you..."],
      typeSpeed: 100,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
