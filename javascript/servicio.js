const abrir = document.querySelector("#abrir");
const nav = document.querySelector (".nav-bar")
const nav01 = document.querySelector(".nav-bar01");
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const serviciosTitle = document.querySelector(".servicios-titulo")


abrir.addEventListener("mouseover", ()=>{
    nav01.classList.add("nav-bar01__visible")
    container.classList.add("container--margin")
    logo.classList.add("logo--arriba")
    logo.classList.add("logo--arriba.animar")
       serviciosTitle.classList.add("servicios-titulo--1")
    serviciosTitle.classList.add("servicios-titulo1.animar")
    
    
})

nav01.addEventListener("mouseleave", ()=>{
    nav01.classList.remove("nav-bar01__visible")
    container.classList.remove("container--margin")
    logo.classList.remove("logo--arriba")
     serviciosTitle.classList.remove("servicios-titulo--1")
    serviciosTitle.classList.remove("servicios-titulo1.animar")
    
})

