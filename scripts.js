const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

const langToggle = document.getElementById("langToggle");

let currentLang = localStorage.getItem("siteLang") || "de";

function setLang(lang) {
  currentLang = lang;

  localStorage.setItem("siteLang", lang);

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-de][data-en]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  if (langToggle) {
    langToggle.textContent = lang === "de" ? "EN" : "DE";
  }
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLang(currentLang === "de" ? "en" : "de");
  });
}

setLang(currentLang);