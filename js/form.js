const formLink = document.querySelector(".search-hotel-button");
const form = document.querySelector(".modal-search-hotel");
const startDate = form.querySelector("#search-start-date");
const adults = form.querySelector("#search-adults-count");
const kids = form.querySelector("#search-kids-count");

form.classList.add("visually-none");

let isStorageSupport = true;
let storageAdults = "";
let storageKids = "";

try {
  storageAdults = localStorage.getItem("adults");
  storageKids = localStorage.getItem("kids");
} catch (err) {
  isStorageSupport = false;
}

formLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  form.classList.toggle("visually-none");

  if (storageAdults) {
    adults.value = storageAdults;
  }

  if (storageAdults) {
    kids.value = storageKids;
  }

  startDate.focus();
});


form.addEventListener("submit", function (evt) {
  if (adults.value === "0") {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("kids", kids.value);
    }
  }
});
