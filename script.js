// Dark Mode Toggle
const toggleBtn = document.getElementById("modeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing Effect
const roles = ["Web Developer", "App Developer", "Programmer"];
let i = 0, j = 0, isDeleting = false;

function typeWriter() {
  let current = roles[i];
  let text = isDeleting ? current.substring(0, j--) : current.substring(0, j++);

  document.querySelector(".typing").textContent = text;

  if (!isDeleting && j === current.length + 1) {
    isDeleting = true;
    setTimeout(typeWriter, 800);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeWriter, 300);
  } else {
    setTimeout(typeWriter, isDeleting ? 100 : 200);
  }
}
typeWriter();

  const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button when user scrolls down 300px
  window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollBtn.style.opacity = "1";
      scrollBtn.style.visibility = "visible";
    } else {
      scrollBtn.style.opacity = "0";
      scrollBtn.style.visibility = "hidden";
    }
  };

  // Scroll back to top when clicked
  scrollBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Fade in About section on scroll
  const aboutSection = document.querySelector(".about-section");

  window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight - 100) {
      aboutSection.classList.add("visible");
    }
  });
// Animate skill bars when About section comes into view
const skills = document.querySelectorAll(".skill-fill");

window.addEventListener("scroll", () => {
  const aboutTop = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (aboutTop < windowHeight - 100) {
    skills.forEach(skill => {
      skill.style.width = skill.getAttribute("style").match(/\d+%/)[0]; // read width from inline style
    });
  }
});
// Fade-in Project Cards on scroll
const projectCards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
  projectCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      card.classList.add("visible");
    }
  });
});
// Modal functionality
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImg");
const captionText = document.getElementById("caption");

document.querySelectorAll(".overlay-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const imgSrc = btn.closest(".project-card").querySelector("img").src;
    const title = btn.closest(".project-card").querySelector("h3").textContent;
    modal.style.display = "flex";
    modalImg.src = imgSrc;
    captionText.textContent = title;
  });
});

document.querySelector(".close").onclick = () => {
  modal.style.display = "none";
};
// Project filtering
const filterBtns = document.querySelectorAll(".filter-btn");
const allprojectCards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    allprojectCards.forEach(card => {
      if (filter === "all" || card.dataset.tech === filter) {
        card.style.display = "block";
        setTimeout(() => card.classList.add("visible"), 50); // fade-in
      } else {
        card.style.display = "none";
        card.classList.remove("visible");
      }
    });
  });
});
// Fade-in footer
const footer = document.querySelector(".footer");
window.addEventListener("scroll", () => {
  const footerTop = footer.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (footerTop < windowHeight - 50) {
    footer.classList.add("visible");
  }
});
 AOS.init({
    duration: 1000,   // Animation duration in ms
    once: true,       // Only animate once
    easing: 'ease-in-out'
  });
// Contact Form Validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  // Validate Name
  const name = document.getElementById("name");
  const nameError = name.nextElementSibling;
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    valid = false;
  } else {
    nameError.textContent = "";
    nameError.style.display = "none";
  }

  // Validate Email
  const email = document.getElementById("email");
  const emailError = email.nextElementSibling;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    emailError.style.display = "block";
    valid = false;
  } else {
    emailError.textContent = "";
    emailError.style.display = "none";
  }

  // Validate Message
  const message = document.getElementById("message");
  const messageError = message.nextElementSibling;
  if (message.value.trim().length < 10) {
    messageError.textContent = "Message must be at least 10 characters";
    messageError.style.display = "block";
    valid = false;
  } else {
    messageError.textContent = "";
    messageError.style.display = "none";
  }

  // If valid, simulate success
  if (valid) {
    alert("✅ Message sent successfully!");
    form.reset();
  }
});
