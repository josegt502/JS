document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    document.getElementById('resultado').textContent = 'Formulario enviado por: ' + nombre;
    alert('Formulario enviado');
})


document.getElementById('seleccionador').addEventListener('change', function (event) {
    let seleccion = document.getElementById('seleccionador').value;
    document.getElementById('resultado2').textContent = 'Seleccionado: ' + seleccion;
});

document.getElementById('seleccionador').addEventListener('change', function (event) {
    let seleccion = document.getElementById('seleccionador').value;
    document.getElementById('container').style.backgroundColor = seleccion;
});

function showWindowSize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    document.getElementById('resultado3').textContent = 'Ancho: ' + width + ' Alto: ' + height;
}

window.addEventListener('resize', showWindowSize);
showWindowSize();

let texto = document.getElementById('texto');
let resultado4 = document.getElementById('resultado4');

texto.addEventListener('focus', function () {
    resultado4.textContent = 'El Campo de texto esta enfocado';
});

texto.addEventListener('blur', function () {
    resultado4.textContent = 'El Campo de texto esta desenfocado';
});