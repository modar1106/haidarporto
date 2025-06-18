// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Scroll to Projects section
document.querySelector('.btn').addEventListener('click', () => {
  const projectSection = document.getElementById('projects');
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Alert form
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "toast show";
    setTimeout(() => {
      toast.className = "toast";
    }, 3000);
  }

  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_flhk9vk', 'template_e9zmp8e', this)
      .then(function() {
        showToast("✅ Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function(error) {
        showToast("❌ Failed to send message.");
        console.error("EmailJS Error:", error);
      });
  });

// Typing effect on name
const nameSpan = document.querySelector('.highlight');
const nameText = "Mohamad Haidar";
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    nameSpan.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 150);
  }
}
nameSpan.textContent = "";
typeEffect();

// Scroll reveal animation
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
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease-out";
  });
  revealOnScroll();
});

function toggleMenu() {
  const nav = document.getElementById("navLinks");
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");

  nav.classList.toggle("active");

  if (nav.classList.contains("active")) {
    menuIcon.style.display = "none";
    closeIcon.style.display = "inline";
  } else {
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
}

function handleMenuKey(event) {
  if (event.key === "Enter" || event.keyCode === 13) {
    toggleMenu();
  }
}

// Tambahkan ini untuk menangani perubahan resolusi
function handleResize() {
  const menuIcon = document.getElementById("menuIcon");
  const closeIcon = document.getElementById("closeIcon");
  const nav = document.getElementById("navLinks");

  if (window.innerWidth > 768) {
    // Desktop: reset icon dan menu
    menuIcon.style.display = "none";
    closeIcon.style.display = "none";
    nav.classList.remove("active");
  } else {
    // Mobile: tampilkan menu icon
    menuIcon.style.display = "inline";
    closeIcon.style.display = "none";
  }
}

// Lightbox Preview for Certificates
document.querySelectorAll('.certificate-item img').forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  });
});

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}


// Jalankan sekali saat load
window.addEventListener("load", handleResize);
// Jalankan setiap resize
window.addEventListener("resize", handleResize);

