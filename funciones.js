//funciones
const guardarContacto = (db, contacto) => {
    db.setItem(contacto.id, JSON.stringify(contacto));
    console.log("contacto guardado")
    window.location.href = '/'
}

const cargarContactos = (db, tbodyContactos) => {
    claves = Object.keys(db)
    for (clave of claves) {
        pintarContacto(claves.indexOf(clave)+1, JSON.parse(db.getItem(clave)), tbodyContactos, db)
    }
}

const pintarContacto = (n, contacto, tbodyContactos, db) => {
    let newtr = document.createElement("tr");
    let tdBorrar = document.createElement("td");
    tdBorrar.classList.add('tdborrar')
    tdBorrar.innerHTML = `<span class="material-icons icono">
        delete_forever
        </span>`
    newtr.innerHTML = `<th scope="row">${n}</th>
    <td class="coustard">${contacto.nombre}</td>
    <td>${contacto.numero}</td>
    <td>${contacto.direccion}</td>`
    newtr.appendChild(tdBorrar)
    tbodyContactos.appendChild(newtr)
    tdBorrar.onclick = () => {
        db.removeItem(contacto.id)
        window.location.href = "/"
    }
}