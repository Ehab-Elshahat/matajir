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
let mobileMenu = document.querySelector(".mobile-menu");
let mobilTogglerMenu = document.querySelector(".custom-toggler");
let overLay = document.querySelector(".overlay");
mobilTogglerMenu.addEventListener("click", (e) => {
  e.target.classList.toggle("close");
  if (mobilTogglerMenu.classList.contains("close")) {
    overLay.classList.add("show");
    mobileMenu.classList.add("open");
  } else {
    overLay.classList.remove("show");
    mobileMenu.classList.remove("open");
  }
});

// Close Menu When Clicking Escape key
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      mobilTogglerMenu.classList.remove("close");
      overLay.classList.remove("show");
    }
  }
});

// Close Menu When Clicking Outside it
window.addEventListener("click", (e) => {
  // e.preventDefault()
  console.log(e.target.classList);
  if (
    !e.target.classList.contains("custom-toggler") &&
    !e.target.classList.contains("accordion-button") &&
    !e.target.classList.contains("mobile-menu") &&
    !e.target.classList.contains("link ")
  ) {
    mobileMenu.classList.remove("open");
    mobilTogglerMenu.classList.remove("close");
    overLay.classList.remove("show");
  }
});

// Handle Active Class On Category Links
let allCategoryLinks = document.querySelectorAll(
  ".category li .dropdown-toggle "
);
allCategoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    allCategoryLinks.forEach((el) => el.classList.remove("active"));
    link.classList.add("active");
  });
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
  increaseBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      qtyValue[index].textContent++;
      if (qtyValue[index].textContent > 1) {
        decreaseBtns[index].classList.add("active");
      } else {
        decreaseBtns[index].classList.remove("active");
      }
    });
  });
}
if (decreaseBtns) {
  decreaseBtns.forEach((btn, index) => {
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
  });
}
// ShoppingCart Page
let itemsPrice = document.querySelectorAll(".cart-summary .price span");
let sumPrice = document.querySelector(".sum-value span");
let price = 0;
if (itemsPrice) {
  itemsPrice.forEach((item) => {
    price = price + Number(item.textContent);
    sumPrice.textContent = price;
  });
}
// Checkout Page Address Model
let addNewAddressBtn = document.querySelectorAll(".add-new-address");
let addNewAddressModel = document.querySelectorAll(".add-address-model");
let closeModel = document.querySelectorAll(".add-address-model .close");
if (addNewAddressBtn) {
  addNewAddressBtn.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      addNewAddressModel[index].classList.add("show");
      overLay.classList.add("show");
    });
  });
}
if (closeModel) {
  closeModel.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      addNewAddressModel[index].classList.remove("show");
      overLay.classList.remove("show");
    });
  });
}
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    addNewAddressModel.forEach((model) => {
      model.classList.remove("show");
      overLay.classList.remove("show");
    });
  }
});

// Filter Page
let filterBtns = document.querySelectorAll(".btns .filter-btn");
if (filterBtns) {
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
    });
  });
}

const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
