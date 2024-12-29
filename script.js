// Array pesan cinta
const messages = [
  "Datang mka lagi kasikan Sahmaaa ucapan selamat paginya yang sudah berevolusimi hehehe.",
  "Semoga hari-harinya Sahmaaa berjalan lancar dan penuh bahagia dan dipermudah semua urusannya Sahmaa🤲🤲🤲",
  "Doaku hari ini semoga Sahmaaa tetap menjadi sosok yang luar biasa bagi maull, semoga senyumnya sahmaaa tetap terjaga cerahnya sampenya bisa nakalah cerah sinar matahri dan tetap membahagiakan kalau diliat i daripada dapat uang 10 milliar💞💞💞",
  "Dan semoga jadi doa dan dikabulkan i lagunya Perfect, Aamiin🤲🤲🤲🤲🤲🤲",
  "Nanti kalau memulai hari mk sahmaaa, coba k langsung senyum biar nanti semua hal hal baik ikut kepincut sama senyumnya sahmaaa baru berdatangan semuai dan kalau ada masalah mau datang, mikir 2 kali itu masalah untuk kasi pudar senyumnya sahmaaa✨✨✨",
  "Jangan k lupaaa banyak banyak minum air putih sahmaaa dan ndak terlambat makan biar full tenaga sahmaaa jalani harinya😇😇😇",
  "terakhir, semoga ndak nalupa sahmaaa kalau kusayang k👍👍👍",
];

let currentMessageIndex = 0;

function nextMessage() {
  const messageElement = document.getElementById("messageText");

  // Cek jika pesan masih tersedia
  if (currentMessageIndex < messages.length - 1) {
    currentMessageIndex++;
    messageElement.classList.remove("fade-in"); // Reset animasi
    setTimeout(() => {
      messageElement.textContent = messages[currentMessageIndex];
      messageElement.classList.add("fade-in"); // Tambahkan animasi
    }, 300);
  } else {
    alert("Habismi Pesannya Untuk Ini Hari🙏");
  }
}

// Slideshow Gambar
let currentSlideIndex = 0;

function showNextSlide() {
  const slides = document.querySelectorAll(".slideshow img");
  if (slides.length === 0) return; // Jika tidak ada gambar, keluar

  slides[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  slides[currentSlideIndex].classList.add("active");
}

function showPrevSlide() {
  const slides = document.querySelectorAll(".slideshow img");
  if (slides.length === 0) return; // Jika tidak ada gambar, keluar

  slides[currentSlideIndex].classList.remove("active");
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  slides[currentSlideIndex].classList.add("active");
}

// Otomatis ganti slide setiap 3 detik
let slideshowInterval = setInterval(showNextSlide, 3000);

// Membersihkan interval saat halaman dimuat ulang atau ditutup
window.addEventListener("beforeunload", () => clearInterval(slideshowInterval));

// Event Listener untuk tombol slideshow
const prevButton = document.querySelector(".slideshow-btn.prev");
const nextButton = document.querySelector(".slideshow-btn.next");
if (prevButton) prevButton.addEventListener("click", showPrevSlide);
if (nextButton) nextButton.addEventListener("click", showNextSlide);
