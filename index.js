// navbar
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Header
document.addEventListener('DOMContentLoaded', () => {
  const images = [
    '/assets/img-header.png',
    '/assets/img-header.png',
    '/assets/img-header.png',
  ];

  const texts = [
    {
      title: 'PSI Jakarta Hadir Kerja Untuk Rakyat',
      subtitle: '#PolitikJalanNinjaku',
    },
    {
      title: 'PSI Bersama Rakyat Untuk Perubahan',
      subtitle: '#ArahBaruJakarta',
    },
    {
      title: 'PSI Jakarta Hadir Bergerak Untuk Rakyat',
      subtitle: '#MudaBergerak',
    },
  ];

  const headerImage = document.getElementById('headerImage');
  const sliderTitle = document.getElementById('sliderTitle');
  const sliderSubtitle = document.getElementById('sliderSubtitle');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let currentIndex = 0;

  const updateSlider = () => {
    headerImage.src = images[currentIndex];
    sliderTitle.textContent = texts[currentIndex].title;
    sliderSubtitle.textContent = texts[currentIndex].subtitle;

    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add('bg-gray-500');
        indicator.classList.remove('bg-gray-200');
      } else {
        indicator.classList.remove('bg-gray-500');
        indicator.classList.add('bg-gray-200');
      }
    });
  };

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });

  updateSlider();
});


var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: true,
  },
  loop: true,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});
