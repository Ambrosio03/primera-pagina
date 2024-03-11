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

  function addCarrito() {
    var precioElement = document.querySelector('.precio');
    var precioTexto = precioElement.textContent;
    var precio = parseInt(precioTexto);
    if (!isNaN(precio)) {
        var carrito = localStorage.getItem('carrito');
        if (!carrito) {
            carrito = []; 
        } else {
            carrito = JSON.parse(carrito);
        }
        carrito.push(precio);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        alert('El artículo se ha añadido al carrito.');

        var total = carrito.reduce(function (acc, currentValue) {
          return acc + currentValue;
      }, 0);
      console.log("Total del carrito:", total);

        document.getElementById("total").textContent = "Total del carrito: " + total;
    } else {
        alert('No se pudo agregar el artículo al carrito. El precio no es válido.');
    }
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

  