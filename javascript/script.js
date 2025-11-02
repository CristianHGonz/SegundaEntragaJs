
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
// ]
const planeador = async () => {
    const muestraPlanes = document.querySelector("#muestraPlanes")
    try {

        const res = await fetch("../json/planes.json")

        const planesDisponibles = await res.json()


        muestraPlanes.innerHTML = ""

        planesDisponibles.forEach((plan) => {
            let div = document.createElement("div")
            div.className = "divPrecios"
            div.innerHTML = ` <p class="error"></p> 
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
                    sessionStorage.setItem("plancontratado", JSON.stringify(planComprado))
                }
            })
        })


        no.forEach((btn) => {
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
                } else {

                    contrato.pop()
                    planConfirmado.innerHTML = ""
                    velocidadConfirmada.innerHTML = ""
                    importeAbono.innerHTML = ""
                    seleccion.forEach(el => el.innerHTML = "")
                    sessionStorage.removeItem("plancontratado")
                }
            })
        })
    } catch (err) {

        if (muestraPlanes) muestraPlanes.innerHTML = "<p class='error'>Disculpe las molestias, no se pudieron cargar los planes. DA AVISO AL ADMINISTRADOR.</p>"
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



btnConfirmar.addEventListener("click", () => {

    errores.forEach((err) => (err.innerHTML = ""))
    let hayError = false

    if (nombreAlta.value.trim() === "") {
        errores[0].innerHTML = "Ingresá tu nombre y apellido"
        hayError = true
    }
    if (direccion.value.trim() === "") {
        errores[1].innerHTML = "Ingresá tu dirección."
        hayError = true
    }

    if (contrato.length === 0) {
        if (errores[2]) {
            errores[2].innerHTML = "Debes seleccionar un plan antes de confirmar."
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
        instalacion.classList.add("fade-out")
        setTimeout(() => {
            if (containerPanelControl) instalacion.style.display = "none"
        }, 500)


        setTimeout(() => {
            if (mostrarResultados) mostrarResultados.style.display = "block"
            mostrarResultados.classList.add("fade-in")
        }, 500)


    }
}

)
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
    if (politicas.checked) {
        let guardado = JSON.parse(sessionStorage.getItem("plancontratado"))
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
            <strong> FELICITACIONES: </strong>
		Contrataste un servicio de 
      ${guardado.servicio} 
      ${guardado.plan} 
      </p>
        <p class="blabla">Debes abonar una instalación de $ ${monto.value}</p>
        <p class="blabla">
        Aqui próximamente se llamará a una API para que realice el pago
                    


          </p>
        </div>`
        divModal.innerHTML = ""
        divModal.appendChild(divNew)
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
    }

    else {
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
    }
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


















