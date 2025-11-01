const abrir = document.querySelector("#abrir");
const nav = document.querySelector(".nav-bar")
const nav01 = document.querySelector(".nav-bar01");
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const contacto = document.querySelector(".contacto-siguenos")

abrir.addEventListener("mouseover", () => {
    nav01.classList.add("nav-bar01__visible")
    container.classList.add("container--margin")
    logo.classList.add("logo--arriba")
    logo.classList.add("logo--arriba.animar")
    contacto.classList.add("contacto--1")
    contacto.classList.add("contactos--1.animar")


})

nav01.addEventListener("mouseleave", () => {
    nav01.classList.remove("nav-bar01__visible")
    container.classList.remove("container--margin")
    logo.classList.remove("logo--arriba")
    contacto.classList.remove("contacto--1")
    contacto.classList.remove("contactos--1.animar")

})


const btn = document.querySelector("#button");
const form = document.querySelector("#form")

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando';

        const serviceID = 'default_service';
        const templateID = 'template_z99uzb9';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar Mensaje';
                alert('Sent!');
            }, (err) => {
                btn.value = 'Enviar Mensaje';
                alert(JSON.stringify(err));
            });
    });