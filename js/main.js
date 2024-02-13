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
  