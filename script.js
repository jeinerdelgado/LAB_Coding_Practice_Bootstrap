const form = document.getElementById('formTarea');
const input = document.getElementById('inputTarea');
const lista = document.getElementById('listaTareas');
const alerta = document.getElementById('alerta');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto !== '') {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.innerHTML = `${texto} <button class="btn btn-danger btn-sm">Eliminar</button>`;

    lista.appendChild(li);
    input.value = '';
    mostrarAlerta();
  }
});

lista.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
  }
});

function mostrarAlerta() {
  alerta.classList.remove('d-none');
  setTimeout(() => {
    alerta.classList.add('d-none');
  }, 2000);
}
