document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de servicios
    var servicioLinks = document.querySelectorAll('.servicio-link');
  
    // Iterar sobre cada enlace de servicio
    servicioLinks.forEach(function(link) {
      // Agregar evento clic a cada enlace
      link.addEventListener('click', function(event) {
        // Prevenir el comportamiento predeterminado del enlace
        event.preventDefault();
        
        // Obtener la URL de destino del enlace
        var destino = this.getAttribute('href');
        
        // Redireccionar a la página de detalles del servicio
        window.location.href = destino;
      });
    });
  });
  