const d=document;
const $circle=d.getElementById("circle"),
$boton=d.getElementById("boton"),
$botonpaused=d.getElementById("boton-paused"),
$pua=d.getElementById("pua-dibujo"),
$discoinclinado=d.getElementById("disco-inclinado");

$boton.onclick=function(){
    //para que luego de la salida del disco quede listo para activar la rotación
    $circle.classList.toggle("disc-rotation");
    $circle.classList.remove("disc-translate");
    
    //compensa la inclinación inicial y final del disco
    $discoinclinado.classList.add("disco-inclinado-final");
    
    //para que luego de hacer click en Escuchar, desaparezca visualmente dicho botón
    $boton.classList.remove("boton-visible");
    $boton.classList.add("no-visible");
    
    //para que al hacer click en Escuchar, se haga visible botón Detener
    $botonpaused.classList.remove("boton-paused");
    $botonpaused.classList.add("opacity-1");
    
    //se acerca la pua al disco

    $pua.classList.toggle("running");
}

$botonpaused.onclick=function(){
    $circle.classList.toggle("paused");
    
}


   //vinculando animation con audio

   function iniciar() { 
    //var boton=document.getElementById('boton'); 
    $boton.addEventListener('click', presionar, false); 
 } 



  function presionar() { 
      
        audio.play(); 
        reproducir.value="Reproducir"; 
     
     } 



  function detener(){
      $botonpaused.addEventListener('click', pausar, false);
  }

  function pausar() { 
    if(!audio.paused && !audio.ended)   { 
        audio.pause(); 
        reproducir.value="Reproducir"; 
     
     } 
     else 
     { 
        audio.play(); 
        reproducir.value="Pausar"; 
          
     } 
    
 } 



 window.addEventListener('load', iniciar, false); 
  
 window.addEventListener('load', detener, false); 