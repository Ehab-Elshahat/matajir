/** @format */

// NavBar Search input Focus
let searchInput = document.querySelector(".navbar-collapse form input");
let searchHistory = document.querySelector(".search-history");
searchInput.addEventListener("focus", () => {
  searchHistory.style.display = "block";
});
searchInput.addEventListener("blur", () => {
  searchHistory.style.display = "none";
});

// Show Hide Password Field
let passwordField = document.querySelectorAll(".password input");
let showHideIcon = document.querySelectorAll(".password .show-password");
let mobileMenu = document.querySelector(".mobile-menu");
showHideIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    let input = icon.previousElementSibling;
    if (input.type == "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});

// Show hide Menu in Mobile
let mobilTogglerMenu = document.querySelector(".custom-toggler");
let overLay = document.querySelector(".overlay");
mobilTogglerMenu.addEventListener("click", (e) => {
  e.target.classList.toggle("close");
  if (mobilTogglerMenu.classList.contains("close")) {
    console.log("close");
    overLay.classList.add("show");
    mobileMenu.classList.add("open");
  } else {
    console.log("open");
    overLay.classList.remove("show");
    mobileMenu.classList.remove("open");
  }
});

// Product page
// Change Product Photo
let smallPhotos = document.querySelectorAll(".small-photos img");
let largePhoto = document.querySelector(".large-photo img");

smallPhotos.forEach((img) => {
  img.addEventListener("click", () => {
    smallPhotos.forEach((img) => {
      img.classList.remove("active");
    });
    img.classList.add("active");
    let src = img.src;
    largePhoto.src = src;
  });
});

// Chosen Product Color
let colors = document.querySelectorAll(".colors label .checkmark");
let textColor = document.querySelector(".colors .text-color");

colors.forEach((color) => {
  color.addEventListener("click", () => {
    colors.forEach((color) => {
      color.classList.remove("active");
    });
    color.classList.add("active");
    let colorName = color.getAttribute("data-color");
    textColor.textContent = colorName;
  });
});

// Qty of Product
let increaseBtns = document.querySelectorAll(".increase");
let decreaseBtns = document.querySelectorAll(".decrease");
let qtyValue = document.querySelectorAll(".qty-value");
if (increaseBtns) {
  increaseBtns.forEach((btn, index)=> {
    btn.addEventListener("click", () => {
      qtyValue[index].textContent++;
      if (qtyValue[index].textContent > 1) {
        decreaseBtns[index].classList.add("active");
      } else {
        decreaseBtns[index].classList.remove("active");
      }
    });
  })
  
}
if(decreaseBtns) {
  decreaseBtns.forEach((btn, index)=> {
    btn.addEventListener("click", () => {
      if (qtyValue[index].textContent > 1) {
        qtyValue[index].textContent--;
      }

      if (qtyValue[index].textContent > 1) {
        decreaseBtns[index].classList.add("active");
      } else {
        decreaseBtns[index].classList.remove("active");
      }
    });
  })
  
}
// ShoppingCart Page 
let itemsPrice = document.querySelectorAll(".cart-summary .price span");
let sumPrice = document.querySelector(".sum-value span");
let price = 0
if (itemsPrice) {
  itemsPrice.forEach((item) => {
    price = price + Number(item.textContent);
    sumPrice.textContent = price;
  });
}