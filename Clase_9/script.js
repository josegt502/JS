document.getElementById('unDiv').addEventListener('mouseover', function () {
    this.style.backgroundColor = 'red';
});

document.getElementById('boton').addEventListener('click', function () {
    alert('Boton con click');
});

document.getElementById('entradaTexto').addEventListener('keydown', function (event) {
    document.getElementById('unDiv').textContent = 'Teclada precionada: ' + event.key;
});

