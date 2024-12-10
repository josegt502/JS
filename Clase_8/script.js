//TEXT CONTENT: atributo que nos sirve para agregar a nuevo texto
let boton = document.getElementById('boton');
boton.addEventListener('click', function () {
    let div = document.getElementById('miElemento');
    div.textContent = 'Contenido Nuevo!';
});
//crear un nuevo elemento y agregar el hijo al padre al dar click
let boton2 = document.getElementById('boton2');
boton2.addEventListener('click', function () {
    let lista = document.getElementById('lista');
    let newElement = document.createElement('li');//creando el elemento html
    newElement.textContent = 'Nuevo Elemento';//agregando el texto al elemento
    lista.appendChild(newElement);//agregando el elemento a la lista
    let div = document.getElementById('caja');
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.backgroundColor = 'red';
});
