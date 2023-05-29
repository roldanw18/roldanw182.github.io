var links = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();

    var destino = this.getAttribute('href'); 
    var destinoElemento = document.querySelector(destino); 

}}