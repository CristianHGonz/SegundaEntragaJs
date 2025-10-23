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
       <p> Opción N° ${plan.id} Servicio: ${plan.servicio}</p>  
       <p id="plan">Plan: ${plan.plan} <strong>Precio: $${plan.precio}</strong></p>
       <button data-id=${plan.id} class="si"> <img id="si" src="../asset/images/contratar/si1.png" alt="contratar">Contratar</button>
       <button class="no">Cancelar<img id="no" src="../asset/images/contratar/no1.png" alt="eliminar"></button>
       `;

        muestraPlanes.appendChild(div);
    });
    let si = document.querySelectorAll(".si");
    let no = document.querySelectorAll(".no");

    si.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            let planComprado = planesDisponibles.find(
                (plan) => plan.id == e.target.dataset.id
            );
            contrato.push(planComprado)
            planConfirmado.innerHTML = planComprado.servicio
            velocidadConfirmada.innerHTML = planComprado.plan
            importeAbono.innerHTML = planComprado.precio

        })
    })
    no.forEach((btn) => {
        btn.addEventListener("click", (e) => {

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
const verificacion = document.querySelector("#verificacion")
const muestraVerificación = document.querySelector("#muestraVerificación")
const planConfirmado = document.querySelector("#planConfirmado")
const velocidadConfirmada = document.querySelector("#velocidadConfirmada")
const importeAbono = document.querySelector("#importeAbono")
const errores = document.querySelectorAll(".error")

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
    if (verificacion.value.trim() === "") {
        errores[2].innerHTML = "Ingresá tu número de verificación."
        hayError = true
    }
    if (contrato.length === 0) {
        errores[3].innerHTML = ("Debes seleccionar un plan antes de confirmar.")
        hayError = true
    }
    if (hayError) return
    if (!hayError) {
        muestraNombre.innerHTML = nombreAlta.value
        muestraDomicilio.innerHTML = direccion.value
        muestraVerificación.innerHTML = verificacion.value
        const containerPanelControl = document.getElementById("container-panel-control1");
        const mostrarResultados = document.getElementById("mostrarResultados1");
        if (containerPanelControl) containerPanelControl.style.display = "none";
        if (mostrarResultados) mostrarResultados.style.display = "block";
    }

})


const politicas = document.querySelector("#politicas")
const contratarServicio = document.querySelector("#contratarServicio")
contratarServicio.addEventListener("click", () => {
    if (politicas.checked) {
        alert("Servicio contratado")
    } else {
        alert("Debes aceptar las politicas de uso")
    }
})























if (btnConfirmar) {
    btnConfirmar.addEventListener("click", () => {
        const containerPanelControl = document.getElementById("container-panel-control1");
        const mostrarResultados = document.getElementById("mostrarResultados1");

        if (containerPanelControl) containerPanelControl.style.display = "none";
        if (mostrarResultados) mostrarResultados.style.display = "block";
    })
} 