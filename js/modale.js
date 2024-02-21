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
    
    var productoLinks = document.querySelectorAll('.producto-link');
  
    
    productoLinks.forEach(function(link) {
      
      link.addEventListener('click', function(event) {
        
        event.preventDefault();
        
        
        var destino = this.getAttribute('href');
        window.location.href = destino;
      });
    });
  });

