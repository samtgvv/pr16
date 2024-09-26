"use strict";
let phone = document.querySelector(".phone");
let catalog = document.querySelector(".catalog");

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        phone.classList.add("show");
      } else {
        phone.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

observer.observe(catalog);