const abrir = document.querySelector("#abrir");
const nav = document.querySelector (".nav-bar")
const nav01 = document.querySelector(".nav-bar01");
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const titleQuienes = document.querySelector(".title-quienes")



abrir.addEventListener("mouseover", ()=>{
    nav01.classList.add("nav-bar01__visible")
    container.classList.add("container--margin")
    logo.classList.add("logo--arriba")
    logo.classList.add("logo--arriba.animar")
    titleQuienes.classList.add("title-quienes--1")
    titleQuienes.classList.add("title-quienes1.animar")
    
    
    
})

nav01.addEventListener("mouseleave", ()=>{
    nav01.classList.remove("nav-bar01__visible")
    container.classList.remove("container--margin")
    logo.classList.remove("logo--arriba")
    titleQuienes.classList.remove ("title-quienes--1")

    
})




