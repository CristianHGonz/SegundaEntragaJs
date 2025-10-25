const planesDisponibles = [
    { id: 1, servicio: "Fibra Optica", plan: "50mb", precio: 15000 },
    { id: 2, servicio: "Fibra Optica", plan: "100mb", precio: 25000 },
    { id: 3, servicio: "Wireless", plan: "10mb", precio: 10000 },
    { id: 4, servicio: "Wireless", plan: "20mb", precio: 20000 },
]
let contrato = [];
const planeador = () => {

    const muestraPlanes = document.querySelector("#muestraPlanes");
    planesDisponibles.forEach((plan) => {
        let div = document.createElement("div")
        div.className = "divPrecios"
        div.innerHTML = ` <p class="error"></p>
        <p> Opción N° ${plan.id} Servicio:<strong>${plan.servicio}</strong>Plan: ${plan.plan}</p>
       <p><strong>Precio: $${plan.precio}</strong></p>
       <button data-id=${plan.id} class="si"> <img id="si" src="../asset/images/contratar/si1.png" alt="contratar">Contratar</button>
       <button class="no"><img id="no" src="../asset/images/contratar/no1.png" alt="eliminar">Cancelar</button>
      
        `;
        muestraPlanes.appendChild(div);
    }
    );
    let si = document.querySelectorAll(".si");
    let no = document.querySelectorAll(".no");


    si.forEach((btn) => {
        btn.addEventListener("click", (e) => {

            let planComprado = planesDisponibles.find(
                (plan) => plan.id == e.target.dataset.id
            );

            if (contrato.length >= 1) {
                divModal.innerHTML = ""
                divModal.style.display = "flex"
                let divNew = document.createElement("div")
                divNew.innerHTML = `  <div class="modalContenido">
                <strong id="cerrarModal" class="cerraX">X</strong>
                <h3 class="titleModal">ERROR!</h3>
                <p class="textModal">
                SOLO puede selecionar un plan, eliminalo antes de seleccionar otro
                </p>
                </div>`;
                divModal.appendChild(divNew);
                divNew.addEventListener("click", () => {
                    divModal.style.display = "none"
                })
            }
            else {
                contrato.push(planComprado)
                planConfirmado.innerHTML = planComprado.servicio
                velocidadConfirmada.innerHTML = planComprado.plan
                importeAbono.innerHTML = planComprado.precio


            }

        })
    })
    no.forEach((btn) => {
        btn.addEventListener("click", () => {

            let eliminarPlan = contrato.pop()
            planConfirmado.innerHTML = ""
            velocidadConfirmada.innerHTML = ""
            importeAbono.innerHTML = ""

        })
    })

}
planeador()

const nombreAlta = document.querySelector("#nombreAlta");
const muestraNombre = document.querySelector("#muestraNombre")
const btnConfirmar = document.querySelector("#btnConfirmar")
const direccion = document.querySelector("#direccion")
const muestraDomicilio = document.querySelector("#muestraDomicilio")
const planConfirmado = document.querySelector("#planConfirmado")
const velocidadConfirmada = document.querySelector("#velocidadConfirmada")
const importeAbono = document.querySelector("#importeAbono")
const errores = document.querySelectorAll(".error")
const monto = document.querySelector("#monto")

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
        errores[2].innerHTML = ("Debes seleccionar un plan antes de confirmar.")
        hayError = true
    }
    if (hayError) return
    if (!hayError) {
        muestraNombre.innerHTML = nombreAlta.value
        muestraDomicilio.innerHTML = direccion.value
        const containerPanelControl = document.getElementById("container-panel-control1");
        const mostrarResultados = document.getElementById("mostrarResultados1");
        if (containerPanelControl) containerPanelControl.style.display = "none";
        if (mostrarResultados) mostrarResultados.style.display = "block";
    }
}
)
const politicas = document.querySelector("#politicas")
const contratarServicio = document.querySelector("#contratarServicio")
const divModal = document.querySelector("#divModal")
const cerrarModal = document.querySelector("#cerrarModal")

contratarServicio.addEventListener("click", () => {
    divModal.innerHTML = "";
    if (contrato.length === 0) {
        divModal.style.display = "flex"
        let divNew = document.createElement("div")
        divNew.innerHTML = `  <div class="modalContenido">
          <strong id="cerrarModal" class="cerraX">X</strong>
          <h3 class="titleModal">ERROR!</h3>
          <p class="textModal">
            Debes al menos seleccionar un servicio
          </p>
        </div>`
        divModal.appendChild(divNew);
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
        return
    }
    if (politicas.checked)
        if (monto.value === "") {
            divModal.innerHTML = ""
            divModal.style.display = "flex"
            let divNew = document.createElement("div")
            divNew.innerHTML = `  <div class="modalContenido modalContenido--contratado">
        <strong id="cerrarModal" class="cerraX">X</strong>
        <h3 class="titleModal">ERROR!</h3>
        <p class="textModal">
        Debes ingresar un monto de instalación
        </p>
        </div>`;
            divModal.appendChild(divNew);
            divNew.addEventListener("click", () => {
                divModal.style.display = "none"
            })
            return
        } else {
            divModal.innerHTML = ""
            divModal.style.display = "flex"
            let divNew = document.createElement("div")
            divNew.innerHTML = `  <div class="modalContenido modalContenido--contratado">
        <strong id="cerrarModal" class="cerraX">X</strong>
        <h3 class="titleModal">Servicio contratado ¡FELICIDADES!</h3>
        <p>Debes abonar una instalación de $ <strong>${monto.value}</strong></p>
        <p class="textModal">
        Aqui próximamente se llamará a una API para que realice el pago
        </p>
        </div>`;
            divModal.innerHTML = ""
            divModal.appendChild(divNew);
            divNew.addEventListener("click", () => {
                divModal.style.display = "none"
            })
        } else {
        divModal.style.display = "flex"
        let divNew = document.createElement("div")
        divNew.innerHTML = `  <div class= "modalContenido modalContenido--politicas">
          <strong id="cerrarModal" class="cerraX">X</strong>
          <h3 class="titleModal">ERROR!</h3>
          <p class="textModal">
            Debes aceptar las politicas de uso
          </p>
        </div>`;
        divModal.appendChild(divNew);
        divNew.addEventListener("click", () => {
            divModal.style.display = "none"
        })
    }
})


















