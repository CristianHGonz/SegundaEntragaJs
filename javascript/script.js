
const abrir = document.querySelector("#abrir")
const nav = document.querySelector(".nav-bar")
const nav01 = document.querySelector(".nav-bar01")
const container = document.querySelector(".container")
const logo = document.querySelector(".logo")
const resultados = document.querySelector(".tituloDatos1")

abrir.addEventListener("mouseover", () => {
    nav01.classList.add("nav-bar01__visible")
    container.classList.add("container--margin")
    logo.classList.add("logo--arriba")
    logo.classList.add("logo--arriba.animar")
    resultados.classList.add("tituloDatos1--1")
    resultados.classList.add("tituloDatos1.animar")

})

nav01.addEventListener("mouseleave", () => {
    nav01.classList.remove("nav-bar01__visible")
    container.classList.remove("container--margin")
    logo.classList.remove("logo--arriba")
    resultados.classList.remove("tituloDatos1--1")

})



let contrato = []

const planeador = async () => {
    const muestraPlanes = document.querySelector("#muestraPlanes")
    try {

        const res = await fetch("../json/planes.json")

        const planesDisponibles = await res.json()


        muestraPlanes.innerHTML = ""

        planesDisponibles.forEach((plan) => {
            let div = document.createElement("div")
            div.className = "divPrecios"
            div.innerHTML = ` <p class="errorPlanes"></p> 
        <p> Opción N° ${plan.id} Servicio:<strong>${plan.servicio}</strong>Plan: ${plan.plan}</p>
       <p><strong>Precio: $${plan.precio}</strong></p>
       <button data-id=${plan.id} class="si"> <img id="si" src="../asset/images/contratar/si1.png" alt="contratar">Contratar</button>
       <button class="no"><img id="no" src="../asset/images/contratar/no1.png" alt="eliminar">Cancelar</button>
        <p class="seleccion"></p>
        `
            muestraPlanes.appendChild(div)
        }
        )
        let si = document.querySelectorAll(".si")
        let no = document.querySelectorAll(".no")
        let seleccion = document.querySelectorAll(".seleccion")

        si.forEach((btn, index) => {
            btn.addEventListener("click", (e) => {

                let planComprado = planesDisponibles.find(
                    plan => plan.id == e.currentTarget.dataset.id
                )
                if (!planComprado) {
                    divModal.innerHTML = ""
                    divModal.style.display = "flex"
                    let divNew = document.createElement("div")
                    divNew.innerHTML = `
        <div class="contenidoModal">
          <div class="modalTop">
            <p class="cerrar">X</p>
          </div>
          <div class="modalInfo">
            <p class="blabla">
              <strong>Aviso IMPORTANTE:</strong> Debes seleccionar un plan antes de continuar.
            </p>
          </div>
        </div>`
                    divModal.appendChild(divNew)
                    divNew.addEventListener("click", () => {
                        divModal.style.display = "none"
                    })
                    return
                }


                seleccion.forEach(el => el.innerHTML = "")
                seleccion[index].innerHTML = `PLAN SELECCIONADO`


                if (contrato.length > 0) {

                    divModal.innerHTML = ""
                    divModal.style.display = "flex"
                    let divNew = document.createElement("div")
                    divNew.innerHTML = `
                <div class="contenidoModal">
                    <div class="modalTop">
                        <p class="cerrar">X</p>
                    </div>
                    <div class="modalInfo">
                        <p class="blabla">
                            <strong>CUIDADO:</strong> SOLO puede seleccionar un plan.<br>
                            Elimínalo antes de seleccionar otro.
                        </p>
                    </div>
                </div>`
                    divModal.appendChild(divNew)
                    divNew.addEventListener("click", () => {
                        divModal.style.display = "none"
                    })
                } else {

                    contrato.push(planComprado)
                    planConfirmado.innerHTML = planComprado.servicio
                    velocidadConfirmada.innerHTML = planComprado.plan
                    importeAbono.innerHTML = planComprado.precio
                }
            })
        })


        no.forEach((btn, index) => {
            btn.addEventListener("click", () => {
                if (contrato.length === 0) {
                    divModal.innerHTML = ""
                    divModal.style.display = "flex"
                    let divNew = document.createElement("div")
                    divNew.innerHTML = `
                <div class="contenidoModal">
                    <div class="modalTop">
                        <p class="cerrar">X</p>
                    </div>
                    <div class="modalInfo">
                        <p class="blabla">
                            <strong>Aviso IMPORTANTE:</strong> No tienes ningún servicio seleccionado, debes seleccionar al menos uno.
                        </p>
                    </div>
                </div>`

                    divModal.appendChild(divNew)
                    divNew.addEventListener("click", () => {
                        divModal.style.display = "none"
                    })
                    return
                }

                else {

                    contrato.pop()
                    planConfirmado.innerHTML = ""
                    velocidadConfirmada.innerHTML = ""
                    importeAbono.innerHTML = ""
                    seleccion[index].innerHTML = `<strong class="eliminado"> PLAN ELIMINADO </strong>`

                }
            })

        })
    } catch (err) {

        if (muestraPlanes) muestraPlanes.innerHTML = `<p class="error">Disculpe las molestias, no se pudieron cargar los planes. DA AVISO AL ADMINISTRADOR.</p>`
    }
}


planeador()

const nombreAlta = document.querySelector("#nombreAlta")
const muestraNombre = document.querySelector("#muestraNombre")
const btnConfirmar = document.querySelector("#btnConfirmar")
const direccion = document.querySelector("#direccion")
const muestraDomicilio = document.querySelector("#muestraDomicilio")
const planConfirmado = document.querySelector("#planConfirmado")
const velocidadConfirmada = document.querySelector("#velocidadConfirmada")
const importeAbono = document.querySelector("#importeAbono")
const errores = document.querySelectorAll(".error")
const monto = document.querySelector("#monto")
const instalacion = document.querySelector(".instalacion")
const containerPanelControl = document.getElementById("container-panel-control1")
const mostrarResultados = document.getElementById("mostrarResultados1")
const dni = document.querySelector("#dni")
const email = document.querySelector("#email")
const contacto = document.querySelector("#contacto")
const errorPlanes = document.querySelectorAll(".errorPlanes")

btnConfirmar.addEventListener("click", () => {

    errorPlanes.forEach((err) => (err.innerHTML = ""))
    let hayError = false

    if (contrato.length === 0) {

        if (errorPlanes && errorPlanes.length > 0) {

            errorPlanes.forEach(err => {
                err.innerHTML = "Debes seleccionar un plan"
            })
        } else {
            divModal.innerHTML = ""
            divModal.style.display = "flex"
            let divNew = document.createElement("div")
            divNew.innerHTML = `
        <div class="contenidoModal">
          <div class="modalTop">
            <p class="cerrar">X</p>
          </div>
          <div class="modalInfo">
            <p class="blabla">
              <strong>Aviso IMPORTANTE:</strong> Debes seleccionar un plan antes de continuar.
            </p>
          </div>
        </div>`
            divModal.appendChild(divNew)
            divNew.addEventListener("click", () => {
                divModal.style.display = "none"
            })
        }
        hayError = true
    }

    if (hayError) return

    if (!hayError) {
        muestraNombre.innerHTML = nombreAlta.value
        muestraDomicilio.innerHTML = direccion.value
        planesDisponibles.classList.remove("fade-in")
        planesDisponibles.classList.add("fade-out")

        setTimeout(() => {
            if (planesDisponibles) planesDisponibles.style.display = "none"
        }, 500)

        setTimeout(() => {
            if (mostrarResultados) mostrarResultados.style.display = "block"
            mostrarResultados.classList.add("fade-in")
        }, 500)
    }
}
)
const planesDisponibles = document.querySelector(".planesDisponibles")

const siguiente = document.querySelector("#siguiente").addEventListener("click", () => {
    errores.forEach((err) => (err.innerHTML = ""))
    let hayError = false

    if (nombreAlta.value.trim().length < 8 || !nombreAlta.value.includes(" ")) {
        errores[0].innerHTML = "Necesitamos tu nombre completo (nombre y apellido)."
        hayError = true
    }
    if (direccion.value.trim().length < 6) {
        errores[1].innerHTML = "Necesitamos una dirección válida."
        hayError = true
    }
    if (dni.value.trim() === "" || !/^\d{7,8}$/.test(dni.value.trim())) {
        errores[2].innerHTML = "Formato de DNI no valido."
        hayError = true
    }
    if (email.value.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        errores[3].innerHTML = "Necesitamos que ingreses un mail válido."
        hayError = true
    }
    if (contacto.value.trim().length < 8) {
        errores[4].innerHTML = "Necesitamos que ingreses un N° de celular."
        hayError = true
    }

    if (hayError) return
    instalacion.classList.remove("fade-in")
    instalacion.classList.add("fade-out")
    setTimeout(() => {
        if (instalacion) instalacion.style.display = "none"
    }, 500)
    setTimeout(() => {
        if (planesDisponibles) planesDisponibles.style.display = "block"
        planesDisponibles.classList.add("fade-in")
    }, 500)
})


const politicas = document.querySelector("#politicas")
const contratarServicio = document.querySelector("#contratarServicio")
const divModal = document.querySelector("#divModal")
const cerrarModal = document.querySelector("#cerrarModal")
const volver = document.querySelector("#volver")

contratarServicio.addEventListener("click", () => {
    divModal.innerHTML = ""
    if (contrato.length === 0) {
        divModal.style.display = "flex"
        let divNew = document.createElement("div")
        divNew.innerHTML = `
        <div class="contenidoModal">
        <div class="modalTop">
        <p class="cerrar">X</p>
        </div>
        <div class="modalInfo">
        <p class="blabla">
        <strong> Aviso IMPORTANTE: </strong>
        Debes al menos seleccionar un servicio
        </p>
        </div>`
        divModal.appendChild(divNew)
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
        return
    }
    if (monto.value === "") {
        divModal.innerHTML = ""
        divModal.style.display = "flex"
        let divNew = document.createElement("div")
        divNew.innerHTML = `
        <div class="contenidoModal">
        <div class="modalTop">
        <p class="cerrar">X</p>
        </div>
        <div class="modalInfo">
        <p class="blabla">
        <strong> Aviso IMPORTANTE: </strong>
        Debes ingresar un monto de instalación
        </p>
        </div>`
        divModal.appendChild(divNew)
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
        return
    }
    if (!politicas.checked) {

        divModal.style.display = "flex"
        let divNew = document.createElement("div")
        divNew.innerHTML = `
        <div class="contenidoModal">
        <div class="modalTop">
        <p class="cerrar">X</p>
        </div>
        <div class="modalInfo">
        <p class="blabla">
        <strong> Aviso IMPORTANTE: </strong>
        Debes aceptar las politicas de uso
        </p>
        </div>`
        divModal.appendChild(divNew)
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
        return
    }

    const nombreFinal = nombreAlta.value
    const direccionFinal = direccion.value
    const dniFinal = dni.value
    const emailFinal = email.value
    const contactoFinal = contacto.value




    class final {
        constructor(nombreFinal, direccionFinal, dniFinal, emailFinal, contactoFinal, contrato) {
            this.nombreFinal = nombreFinal;
            this.direccionFinal = direccionFinal;
            this.dniFinal = dniFinal;
            this.emailFinal = emailFinal;
            this.contactoFinal = contactoFinal;
            this.contrato = contrato;
        }
    }
    let datosContrato = new final(nombreFinal, direccionFinal, dniFinal, emailFinal, contactoFinal, contrato)
    localStorage.setItem("datosContrato", JSON.stringify(datosContrato))
    const datos = JSON.parse(localStorage.getItem("datosContrato"))
    const plan = datos.contrato[0]
    const SERVICE_ID = "service_1nlz5fr"
    const TEMPLATE_ID = "template_aj4n5tq"
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        nombre: datos.nombreFinal,
        direccion: datos.direccionFinal,
        dni: datos.dniFinal,
        email: datos.emailFinal,
        contacto: datos.contactoFinal,
        servicio: plan.servicio,
        plan: plan.plan,
        precio: plan.precio
    })
        .then(() => {
            setTimeout(() => {
                window.location.replace("../index.html")
            }, 5000);
            divModal.innerHTML = ""
            divModal.style.display = "flex"
            let divNew = document.createElement("div")
            divNew.innerHTML = `
     <div class="contenidoModal">
        <div class="modalTop">
        </div>
        <div class="modalInfo">
        <p class="blabla"><strong> ATENCION: </strong></p><p class="blabla">
        Estimado/a:  ${nombreAlta.value},

        Muchas gracias por contratar nuestro servicio. </br>

        Apreciamos tu confianza en nosotros y esperamos cumplir con todas tus expectativas.</br>
        
        En unos minutos recibirá un mail con los detalles de la contratación. </br>
        
        Ante cualquier consulta o necesidad, no dudes en comunicarte con nuestro equipo.</br>

        
        ¡Gracias por elegirnos!</p>
        </div>`
            divModal.innerHTML = ""
            divModal.appendChild(divNew)
            divNew.addEventListener("click", () => {
                divModal.style.display = "none"
            })
        })
        .catch((error) => {
            divModal.innerHTML = ""
            divModal.style.display = "flex"
            let divNew = document.createElement("div")
            divNew.innerHTML = `
     <div class="contenidoModal">
        <div class="modalTop">
          <p class="cerrar">X</p>
        </div>
        <div class="modalInfo">
        <p class="blabla"><strong> ATENCION: </strong></p><p class="blabla">
        SISTEMA CAIDO ${error}</br>
        Por favor intento nuevamente en unos minutos
        
        </div>`
            divModal.innerHTML = ""
            divModal.appendChild(divNew)
            divNew.addEventListener("click", () => {
                divModal.style.display = "none"
            })
        });

})

volver.addEventListener("click", () => {

    mostrarResultados.classList.remove("fade-in")
    mostrarResultados.classList.add("fade-out")
    setTimeout(() => {
        if (mostrarResultados) mostrarResultados.style.display = "none"
    }, 500)
    setTimeout(() => {
        if (containerPanelControl) instalacion.style.display = "block"
        instalacion.classList.add("fade-in")

    }, 500)

}
)

















