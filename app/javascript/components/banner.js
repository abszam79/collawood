import Typed from 'typed.js';

function loadDynamicBannerText() {
  const bannerText = document.getElementById('banner-typed-text');
  if (bannerText) {
    new Typed('#banner-typed-text', {
      strings: [
      "The new Digital Agency in Paris ...",
      "Just for you ..."],
      typeSpeed: 200,
      loop: true
    });
  }
}

export { loadDynamicBannerText };
