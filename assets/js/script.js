document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById('hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');

  hamburgerBtn.addEventListener('click', function () {
    mobileMenu.classList.toggle('hidden');
  });
});

// Function to start counters when user scrolls to success-metrics section
function startCountersOnScroll() {
  // Get the success-metrics section
  var successMetricsSection = document.querySelector('.success-metrics');

  // Calculate the position of success-metrics section
  var successMetricsSectionPosition = successMetricsSection.offsetTop - window.innerHeight;

  // Function to start counters
  function startCounters() {
      var counters = document.querySelectorAll('.counter');
      var speed = 2000; // The lower the number, the faster the counter increases

      counters.forEach(counter => {
          var target = +counter.getAttribute('data-target-value');
          var count = 0;

          var updateCounter = setInterval(() => {
              count++;
              counter.innerText = count;

              if (count === target) {
                  clearInterval(updateCounter);
              }
          }, speed / target);
      });
  }

  // Check if user has scrolled to success-metrics section
  function checkScroll() {
      if (window.scrollY > successMetricsSectionPosition) {
          startCounters();
          window.removeEventListener('scroll', checkScroll);
      }
  }

  // Event listener for scroll
  window.addEventListener('scroll', checkScroll);
}

// Call the function to start counters when user scrolls to success-metrics section
startCountersOnScroll();



new Swiper('.swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {                       
      delay: 3000,  
  },
  pagination: {                      
      el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


document.addEventListener('DOMContentLoaded', function() {
  const filterButtons = document.querySelectorAll('.filter-button');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterValue = button.textContent.toLowerCase();
  
      const portfolioItems = document.querySelectorAll('.portfolio-item');
  
      portfolioItems.forEach(item => {
        const itemCategories = item.querySelector('span').textContent.toLowerCase();
  
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });
  
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
          const offset = 88;
          const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      }
  });
});


