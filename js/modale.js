let modal = document.getElementById('modalContact');
let flex = document.getElementById('flex');
let abrir = document.getElementById('abrir');
let cerrar = document.getElementById('cerrar');

abrir.addEventListener('click', function(){
    modal.style.display = 'block';
 });

cerrar.addEventListener('click', function(){
    modal.style.display = 'none';
});

window.addEventListener('click', function(e){
    console.log(e.target);
    if(e.target == flex){
        modal.style.display = 'none';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de productos
    var productoLinks = document.querySelectorAll('.producto-link');
  
    // Iterar sobre cada enlace de producto
    productoLinks.forEach(function(link) {
      // Agregar evento clic a cada enlace
      link.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Obtener la URL de destino del enlace
        var destino = this.getAttribute('href');
        
        // Redireccionar a la página de detalles del producto
        window.location.href = destino;
      });
    });
  });

