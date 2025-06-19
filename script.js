document.addEventListener('DOMContentLoaded', () => {
  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // --- Scroll to Projects section (via .btn) ---
  const heroBtn = document.querySelector('.hero .btn');
  if (heroBtn) {
    heroBtn.addEventListener('click', () => {
      const projectSection = document.getElementById('projects');
      if (projectSection) {
        projectSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Toast Notification (Alert Form) ---
  function showToast(message) {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = message;
      toast.className = "toast show";
      setTimeout(() => {
        toast.className = "toast";
      }, 3000);
    }
  }

  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();

      if (typeof emailjs !== 'undefined') {
        emailjs.sendForm('service_flhk9vk', 'template_e9zmp8e', this)
          .then(function() {
            showToast("✅ Message sent successfully!");
            contactForm.reset();
          }, function(error) {
            showToast("❌ Failed to send message.");
            console.error("EmailJS Error:", error);
          });
      } else {
        showToast("❌ Email service not loaded.");
        console.error("EmailJS library is not loaded.");
      }
    });
  }

  // --- Typing Effect on Name ---
  const nameSpan = document.querySelector('.hero .highlight');
  const nameText = "Mohamad Haidar";
  let index = 0;

  if (nameSpan) {
    function typeEffect() {
      if (index < nameText.length) {
        nameSpan.textContent += nameText.charAt(index);
        index++;
        setTimeout(typeEffect, 150);
      }
    }
    nameSpan.textContent = "";
    typeEffect();
  }

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('section');

  function revealOnScroll() {
    revealElements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  }

  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
  });

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);

  // --- Mobile Navigation Menu Toggle ---
  const hamburgerIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const navLinks = document.getElementById("navLinks");

  // --- Fungsi untuk Animasi Tombol Menu ---
  function animateMenuButton(iconElement, isOpening) {
    if (iconElement) {
      if (isOpening) {
        iconElement.style.transform = 'rotate(180deg) scale(1.1)';
        iconElement.style.transition = 'transform 0.3s ease-out';
      } else {
        iconElement.style.transform = 'rotate(0deg) scale(1)';
        iconElement.style.transition = 'transform 0.3s ease-out';
      }
    }
  }

  function toggleMenu() {
    if (navLinks) {
      navLinks.classList.toggle("active");

      if (hamburgerIcon && closeIcon) {
        if (navLinks.classList.contains("active")) {
          hamburgerIcon.style.display = "none";
          closeIcon.style.display = "inline";
          animateMenuButton(closeIcon, true);
          animateMenuButton(hamburgerIcon, false);
        } else {
          hamburgerIcon.style.display = "inline";
          closeIcon.style.display = "none";
          animateMenuButton(hamburgerIcon, true);
          animateMenuButton(closeIcon, false);
        }
      }
    }
  }

  if (hamburgerIcon) {
    hamburgerIcon.addEventListener('click', toggleMenu);
    hamburgerIcon.addEventListener('keydown', (event) => {
      if (event.key === "Enter" || event.keyCode === 13 || event.key === " ") {
        toggleMenu();
      }
    });
  }

  if (closeIcon) {
    closeIcon.addEventListener('click', toggleMenu);
    closeIcon.addEventListener('keydown', (event) => {
      if (event.key === "Enter" || event.keyCode === 13 || event.key === " ") {
        toggleMenu();
      }
    });
  }

  function handleResize() {
    if (window.innerWidth > 768) {
      if (hamburgerIcon) {
        hamburgerIcon.style.display = "none";
        hamburgerIcon.style.transform = 'rotate(0deg) scale(1)';
      }
      if (closeIcon) {
        closeIcon.style.display = "none";
        closeIcon.style.transform = 'rotate(0deg) scale(1)';
      }
      if (navLinks) navLinks.classList.remove("active");
    } else {
      if (hamburgerIcon && navLinks && !navLinks.classList.contains("active")) {
        hamburgerIcon.style.display = "inline";
        hamburgerIcon.style.transform = 'rotate(0deg) scale(1)';
      }
      if (closeIcon) {
        closeIcon.style.display = "none";
        closeIcon.style.transform = 'rotate(0deg) scale(1)';
      }
    }
  }

  window.addEventListener("resize", handleResize);
  handleResize();

  // --- Lightbox Preview for Certificates ---
  document.querySelectorAll('.certificate-item img').forEach(img => {
    img.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      }
    });
  });

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.id === 'lightbox-img') {
        lightbox.style.display = 'none';
      }
    });
  }

  // --- Project Card Description Expansion ---
  document.querySelectorAll('.project-card-horizontal p').forEach(p => {
    p.addEventListener('click', () => {
      p.classList.toggle('expanded');
    });
  });

  // --- Cursor Light Effect ---
  const light = document.createElement('div');
  light.className = 'cursor-light';
  document.body.appendChild(light);

  document.addEventListener('mousemove', (e) => {
    light.style.left = `${e.clientX}px`;
    light.style.top = `${e.clientY}px`;
  });

  // --- Comment Form (as provided, assuming HTML elements exist) ---
  const commentForm = document.getElementById('comment-form');
  const commentList = document.getElementById('comment-list');

  if (commentForm && commentList) {
    commentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const nameInput = this.name;
      const commentInput = this.comment;

      const name = nameInput ? nameInput.value.trim() : '';
      const comment = commentInput ? commentInput.value.trim() : '';

      if (name && comment) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}:</strong> ${comment}`;
        commentList.prepend(li);
        this.reset();
      } else {
        showToast("Nama dan komentar tidak boleh kosong.");
      }
    });
  }

  // --- Carousel for Certifications ---
  const carouselTrack = document.querySelector('.carousel-track');
  const carouselItems = document.querySelectorAll('.carousel-track .certificate-item');
  const prevButton = document.querySelector('.carousel-button.prev');
  const nextButton = document.querySelector('.carousel-button.next');
  const carouselDotsContainer = document.querySelector('.carousel-dots');

  let currentIndex = 0;
  let itemsPerPage = 3;

  function getItemsPerPage() {
    if (window.innerWidth <= 480) {
      return 1;
    } else if (window.innerWidth <= 768) {
      return 2;
    } else {
      return 3;
    }
  }

  function updateCarousel() {
    itemsPerPage = getItemsPerPage();
    if (carouselItems.length > 0 && carouselTrack) {
      const itemWidth = carouselItems[0].offsetWidth + (parseFloat(getComputedStyle(carouselItems[0]).marginLeft) * 2);
      const offset = -currentIndex * itemWidth;
      carouselTrack.style.transform = `translateX(${offset}px)`;
      updateDots();
    }
  }

  function createDots() {
    if (!carouselDotsContainer) return; // Pastikan container dots ada
    carouselDotsContainer.innerHTML = '';
    const totalPages = Math.ceil(carouselItems.length / itemsPerPage);
    for (let i = 0; i < totalPages; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      dot.dataset.index = i;
      dot.addEventListener('click', () => {
        currentIndex = i * itemsPerPage;
        updateCarousel();
      });
      carouselDotsContainer.appendChild(dot);
    }
    updateDots();
  }

  function updateDots() {
    const dots = document.querySelectorAll('.carousel-dots .dot');
    dots.forEach((dot, idx) => {
      dot.classList.remove('active');
      const activePage = Math.floor(currentIndex / itemsPerPage);
      if (idx === activePage) {
        dot.classList.add('active');
      }
    });
  }

  if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex -= itemsPerPage;
      } else {
        currentIndex = Math.max(0, carouselItems.length - itemsPerPage); // Kembali ke akhir jika di awal
      }
      updateCarousel();
    });

    nextButton.addEventListener('click', () => {
      if (currentIndex < carouselItems.length - itemsPerPage) {
        currentIndex += itemsPerPage;
      } else {
        currentIndex = 0; // Kembali ke awal jika di akhir
      }
      updateCarousel();
    });
  }

  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
    createDots();
  });

  // Inisialisasi carousel saat DOMContentLoaded
  if (carouselItems.length > 0 && carouselTrack && carouselDotsContainer) {
    updateCarousel();
    createDots();
  }

}); // Ini adalah penutup yang benar untuk DOMContentLoaded
