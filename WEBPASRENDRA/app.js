const searchicon1 = document.querySelector("#searchicon1");
const search1 = document.querySelector("#searchinput1");

searchicon1.addEventListener("click", function () {
  search1.style.display = "flex";
  searchicon1.style.display = "none";
  console.log("Search 1 terbuka");
});

const searchicon2 = document.querySelector("#searchicon2");
const search2 = document.querySelector("#searchinput2");

searchicon2.addEventListener("click", function () {
  search2.style.display = "flex";
  searchicon2.style.display = "none";
  console.log("Search 2 terbuka");
});

const bar = document.querySelector(".fa-bars");
const cross = document.querySelector("#hdcross");
const headerbar = document.querySelector(".headerbar");

bar.addEventListener("click", function () {
  setTimeout(() => {
    cross.style.display = "block";
  }, 200);
  headerbar.style.right = "0%";
  console.log("Membuka Menu");
});

cross.addEventListener("click", function () {
  cross.style.display = "none";
  headerbar.style.right = "-100%";
  console.log("menutup menu");
});

const paraphText = document.getElementById("paraph-text");
let languageIndex = 1;

function changeText() {
  let translation;

  if (languageIndex <= 0) {
    translation = "Edan "; 
  } else if (languageIndex === 1) {
    translation = "Crazy "; 
  } else if (languageIndex === 2) {
    translation = "Loco "; 
  } else if (languageIndex === 3) {
    translation = "Fou ";
  } else if (languageIndex === 4) {
    translation = "Verrückt ";
  } else if (languageIndex === 5) {
    translation = "Pazzo "; 
  } else if (languageIndex === 6) {
    translation = "狂った "; 
  }

  paraphText.style.opacity = 0;
  setTimeout(() => {
    paraphText.innerHTML = translation;
    paraphText.style.opacity = 1;
  }, 500); 
  languageIndex = (languageIndex + 1) % 6;
  console.log("Text edan di ubah");
}

setInterval(changeText, 3000);

function bookTable() {
  const numPeople = parseInt(document.getElementById("numPeople").value);
  const totalAmount = numPeople * 10000;

  document.getElementById("totalAmount").textContent = `Rp.${totalAmount}`;
  console.log(`Berhasil booking meja untuk ${numPeople} orang dengan harga Rp.${totalAmount}`);
}

function manut() {
  let nama = prompt("Masukan Nama Anda!");

  if (nama !== null && nama !== "") {
    setTimeout(function () {
      document.getElementById(
        "manut"
      ).innerHTML = `<p>Halo, ${nama}!</p>`;
      console.log(`Welcome ter display sebagai ${nama}`);
    }, 500);
  } else {
    document.getElementById("manut").innerHTML = "<p>Halo!</p>";
    console.log("Pesan Welcome di ter display");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log("Lompat ke atas");
}

document.addEventListener("DOMContentLoaded", function () {
  const smoothScrollLinks = document.querySelectorAll(".nav a");

  smoothScrollLinks.forEach((link) => {
    link.addEventListener("click", smoothScrollOnClick);
  });

  function smoothScrollOnClick(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    console.log(`Lompat ke ${targetId}`);
  }
});
