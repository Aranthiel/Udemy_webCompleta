$(document).ready(function(){
    
    alert("se cargó correctamente el fichero contacto.js"); 

    //plugin de calendario
    $("#fnac").datepicker({
      dateFormat:"dd-mm-yy"
    });

    // validación
    $.validate({
      lang: "es"
    });

    //
  });