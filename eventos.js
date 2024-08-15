const miDiv= document.getElementById ('miDiv');
const Boton=document.getElementById('Boton');


miDiv.addEventListener ('click',function() { 
 alert ('Hola! Soy el div');
})


Boton.addEventListener('click', function(event) {
    event.stopPropagation();
});
