const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

const dateInput = document.getElementById("date");
const today = new Date();
const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
  .toISOString()
  .split("T")[0];
dateInput.min = localToday;

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const note = document.getElementById("note").value.trim();

  if (!name || !phone || !service || !date || !time) {
    alert("Please complete all required booking fields.");
    return;
  }

  const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("en-NG", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  const message = [
    "Hello Yimasbeauty Empire, I would like to request an appointment.",
    "",
    `Name: ${name}`,
    `Phone/WhatsApp: ${phone}`,
    `Service: ${service}`,
    `Preferred date: ${formattedDate}`,
    `Preferred time: ${time}`,
    `Additional note: ${note || "None"}`,
    "",
    "I understand that the appointment is subject to confirmation and the required deposit."
  ].join("\n");

  const whatsappNumber = "2347038724293";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener");
});
