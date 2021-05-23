console.log('Works!')
const inputNombre = document.querySelector('#InputNombre')
const inputNumero = document.querySelector('#InputNumero')
const inputDireccion = document.querySelector('#InputDireccion')
const buttonGuardar = document.querySelector('#ButtonGuardar')

const tbodyContactos = document.querySelector('#TbodyContactos')

const db = window.localStorage

buttonGuardar.onclick = () => {
    let contacto = {
        id: Math.random(1, 100),
        nombre: inputNombre.value,
        numero: inputNumero.value,
        direccion: inputDireccion.value
    }
    guardarContacto(db, contacto)
}

cargarContactos(db, tbodyContactos)
