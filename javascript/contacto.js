const abrir = document.querySelector("#abrir");
const nav = document.querySelector(".nav-bar");
const nav01 = document.querySelector(".nav-bar01");
const container = document.querySelector(".container");
const logo = document.querySelector(".logo");
const contacto = document.querySelector(".contacto-siguenos");
const name = document.querySelector("#name");
const adress = document.querySelector("#adress");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const errores = document.querySelectorAll(".error");

abrir.addEventListener("mouseover", () => {
  nav01.classList.add("nav-bar01__visible");
  container.classList.add("container--margin");
  logo.classList.add("logo--arriba");
  logo.classList.add("logo--arriba.animar");
  contacto.classList.add("contacto--1");
  contacto.classList.add("contactos--1.animar");
});

nav01.addEventListener("mouseleave", () => {
  nav01.classList.remove("nav-bar01__visible");
  container.classList.remove("container--margin");
  logo.classList.remove("logo--arriba");
  contacto.classList.remove("contacto--1");
  contacto.classList.remove("contactos--1.animar");
});

const btn = document.querySelector("#button");
const form = document.querySelector("#form");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  errores.forEach((err) => (err.innerHTML = ""));
  let hayError = false;

  if (name.value.trim().length < 8 || !name.value.includes(" ")) {
    errores[0].innerHTML =
      "Necesitamos tu nombre completo (nombre y apellido).";
    hayError = true;
  }

  if (adress.value.trim().length < 6) {
    errores[1].innerHTML = "Necesitamos una dirección válida.";
    hayError = true;
  }

  if (
    email.value.trim() === "" ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())
  ) {
    errores[2].innerHTML = "Necesitamos que ingreses un mail válido.";
    hayError = true;
  }

  if (phone.value.trim().length < 8) {
    errores[3].innerHTML = "Necesitamos que ingreses un N° de celular.";
    hayError = true;
  }

  if (hayError) return;

  btn.value = "Enviando...";

  const serviceID = "default_service";
  const templateID = "template_z99uzb9";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = "Enviar Mensaje";
      Swal.fire({
        title: "Mensaje Enviado",
        text: "Pronto recibirá una respuesta",
        icon: "success",
        draggable: true,
      });
    })
    .catch((err) => {
      btn.value = "Enviar Mensaje";
      alert("Error al enviar: " + JSON.stringify(err));
    });
});
