function Producto(imagen, producto, seccion, precio) {
  this.imagen = imagen;
  this.producto = producto;
  this.seccion = seccion;
  this.precio = precio;
}

let productoActual = new Producto(
  "./laptop_1.jpg",
  "Huawei Matebook",
  "Laptops",
  "$799"
);

function generarTarjetaNueva() {
  let nuevoProducto = new Producto(
    "./laptop_2.jpg",
    "Samsung 9 pro",
    "Laptops",
    "$999"
  );

  let imagenElemento = document.getElementById("imagen");
  let productoElemento = document.getElementById("producto");
  let seccionElemento = document.getElementById("seccion");
  let precioElemento = document.getElementById("precio");

  imagenElemento.src = nuevoProducto.imagen;
  productoElemento.textContent = nuevoProducto.producto;
  seccionElemento.textContent = nuevoProducto.seccion;
  precioElemento.textContent = nuevoProducto.precio;
}

let = alternativaBtn = document.querySelector(".btn-secondary");
alternativaBtn.addEventListener("click", generarTarjetaNueva);
