


// ==========================
// THEME TOGGLE SCRIPT
// ==========================

// Select the toggle button and the <body>
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Run on page load: check if theme is saved in localStorage
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.innerHTML = '<i class="uil uil-sun"></i>'; // Sun icon in dark mode
} else {
  body.classList.remove("dark");
  toggleBtn.innerHTML = '<i class="uil uil-moon"></i>'; // Moon icon in light mode
}

// Toggle theme on button click
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleBtn.innerHTML = '<i class="uil uil-sun"></i>'; // Switch to sun
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.innerHTML = '<i class="uil uil-moon"></i>'; // Switch to moon
    localStorage.setItem("theme", "light");
  }
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// show or hide FAQ answers
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    // Close all other FAQs
    faqs.forEach(f => {
      if (f !== faq) {
        f.classList.remove("open");
        const icon = f.querySelector(".faq_icon i");
        if (icon) icon.className = "uil uil-angle-down";
      }
    });
    // Toggle the clicked FAQ
    faq.classList.toggle("open");
    const icon = faq.querySelector(".faq_icon i");
    if (icon) {
      icon.className = faq.classList.contains("open")
        ? "uil uil-angle-up"
        : "uil uil-angle-down";
    }
  });
});

// TRANSLATION SCRIPT (Commented Out)
//   function googleTranslateElementInit() {
//   new google.translate.TranslateElement({
//     pageLanguage: 'en',
//     includedLanguages: 'hi',
//     autoDisplay: false
//   }, 'google_translate_element');
// }

// function translateToHindi() {
//   const select = document.querySelector("#google_translate_element select");
//   if (select) {
//     select.selectedIndex = 1; // Hindi
//     select.dispatchEvent(new Event("change"));
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.getElementById("translateBtn");
//   if (btn) {
//     btn.addEventListener("click", translateToHindi);
//   }
// });


