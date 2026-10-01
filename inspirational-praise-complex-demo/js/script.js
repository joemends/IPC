document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menu.textContent = isOpen ? "✕" : "☰";
    });
  }

  document.querySelectorAll(".year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  document.querySelectorAll(".faq button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      if (!panel) return;

      document.querySelectorAll(".faq > div").forEach((item) => {
        if (item !== panel) item.classList.remove("open");
      });

      const isOpen = panel.classList.toggle("open");
      const icon = btn.querySelector("span");
      if (icon) {
        icon.textContent = isOpen ? "−" : "+";
      }
    });
  });

  const lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    const lightImg = lightbox.querySelector("img");

    if (lightImg) {
      document.querySelectorAll(".gallery-grid img").forEach((img) => {
        img.addEventListener("click", () => {
          lightImg.src = img.src;
          lightImg.alt = img.alt;
          lightbox.classList.add("open");
        });
      });
    }

    lightbox.addEventListener("click", (event) => {
      const target = event.target;
      if (target === lightbox || target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("open");
      }
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === current) {
      a.classList.add("active");
    }
  });
});

const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
  whatsappForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const enquiryType = document.getElementById("enquiryType").value;
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "233244848231";

    const whatsappMessage =
      `Hello Inspirational Praise Complex,\n\n` +
      `I would like to make an enquiry.\n\n` +
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Enquiry: ${enquiryType}\n\n` +
      `Message:\n${message}\n\n` +
      `Thank you.`;

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");
  });
}