const datos = [];

function recordNotes() {
  let name = document.getElementById("name").value;
  let asignatura = document.getElementById("asignatura").value;
  let nota1 = document.getElementById("nota1").value;
  let nota2 = document.getElementById("nota2").value;
  let nota3 = document.getElementById("nota3").value;

  if (name === "") {
    alert("Para continuar es necesario que ingrese el nombre del estudiante");
    return false;
  }
  if (
    nota1 < 0 ||
    nota2 < 0 ||
    nota3 < 0 ||
    nota1 > 5 ||
    nota2 > 5 ||
    nota3 > 5
  ) {
    alert("Unicamente puede ingresar valores entre 0 y 5");
    return false;
  } else {
    datos.push({
      name: name,
      asignatura: asignatura,
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      notaFinal:
        (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3,
    });
    document.getElementById("frmNotas").reset();

    alert("Información Guardada");

    createTable();
    closeModal();
  }
}
function createTable() {
  let row = "";
  datos.forEach((item, i) => {
    row += `<tr>
              <td>${item.name}</td>
              <td>${item.asignatura}</td>
              <td>${item.nota1}</td>
              <td>${item.nota2}</td>
              <td>${item.nota3}</td>
              <td>${item.notaFinal}</td>
            </tr>`;

    document.getElementById("row").innerHTML = row;
  });
}

function showModal() {
  document.getElementById("modal-id").classList.add("active");
}

function closeModal() {
  document.getElementById("modal-id").classList.remove("active");
}

function disconnect(){
  window.location = "Inicio.html";
}