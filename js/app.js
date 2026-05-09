// let user = {
//   id: 1,
//   name: "Diyorbek",
//   email: "ddkldk",
// };

// let nums = [1, 2, 3, 4];

// localStorage.setItem("user", JSON.stringify(nums));

// let newUser = JSON.parse(localStorage.getItem("user"));
// console.log(newUser);

function updateCountdown() {
  const hozir = new Date();
  const yangiYil = new Date(hozir.getFullYear() + 1, 0, 1);
  const farq = yangiYil - hozir;

  // Vaqtlarni hisoblash
  const d = Math.floor(farq / (1000 * 60 * 60 * 24));
  const h = Math.floor((farq / (1000 * 60 * 60)) % 24);
  const m = Math.floor((farq / 1000 / 60) % 60);
  const s = Math.floor((farq / 1000) % 60);

  // Elementlarga qiymatlarni yozish
  document.getElementById("kun").textContent = d;
  document.getElementById("soat").textContent = h < 10 ? "0" + h : h;
  document.getElementById("minut").textContent = m < 10 ? "0" + m : m;
  document.getElementById("soniya").textContent = s < 10 ? "0" + s : s;
}

// Har soniyada ishga tushirish
setInterval(updateCountdown, 1000);

// Sahifa yuklanishi bilan ishga tushirish
updateCountdown();

const createSnow = () => {
  const snow = document.createElement("i");

  snow.classList.add("fas", "fa-snowflake");

  snow.style.left = Math.random() * window.innerWidth + "px";

  snow.style.fontSize = Math.random() * 10 + 10 + "px";

  snow.style.opacity = Math.random();

  snow.style.animationDuration = Math.random() * 3 + 2 + "s";

  document.body.appendChild(snow);

  setTimeout(() => {
    snow.remove();
  }, 5000);
};

setInterval(createSnow, 100);
