document.addEventListener('DOMContentLoaded', function() {
    
    var servicioLinks = document.querySelectorAll('.servicio-link');
    servicioLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        var destino = this.getAttribute('href');
        window.location.href = destino;
      });
    });
  });

  function addCarrito(nombreProducto, precioProducto) {
    var carrito = localStorage.getItem(nombreProducto);

    // Verificar si el producto ya existe en el carrito
    if (carrito) {
        // Si el producto ya existe, sumamos el precio al valor existente
        var precioActual = parseInt(carrito);
        if (!isNaN(precioActual)) {
            var nuevoPrecio = precioActual + precioProducto;
            localStorage.setItem(nombreProducto, nuevoPrecio.toString());
        } else {
            console.error('El precio almacenado no es un número válido.');
        }
    } else {
        // Si el producto no existe, lo añadimos con su precio
        localStorage.setItem(nombreProducto, precioProducto.toString());
    }

    alert('El artículo se ha añadido al carrito.');

    // Actualizar el total del carrito
    mostrarTotalCarrito();
}

function mostrarTotalCarrito() {
    var total = 0;
    // Recorrer todos los elementos del localStorage y sumar los precios
    for (var i = 0; i < localStorage.length; i++) {
        var clave = localStorage.key(i);
        var valor = parseInt(localStorage.getItem(clave));
        if (!isNaN(valor)) {
            total += valor;
        }
    }

    // Mostrar el total en el elemento con el id "total"
    document.getElementById("total").textContent = "Total del carrito: " + total;
}


function calcularTotal() {
  var carrito = localStorage.getItem('carrito');
  if (carrito) {
      carrito = JSON.parse(carrito);
      var total = carrito.reduce(function(acc, currentValue) {
          return acc + currentValue;
      }, 0);
      return total;
  } else {
      return 0;
  }
}
function mostrarTotal() {
  var total = calcularTotal();
  document.getElementById("total").textContent = "Total del carrito: " + total;
}




  