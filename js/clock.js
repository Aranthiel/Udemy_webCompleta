$(document).ready(function(){
    // acordeon
    alert("se cargó correctamente el fichero clock.js"); 
    setInterval(function(){
      var hora = moment().format("hh");
      var minutos= moment().format("mm");
      var segundos=moment().format("ss");
      $("#hs").html(hora);~
      $("#min").html(minutos);
      $("#sc").html(segundos);
    })


  });