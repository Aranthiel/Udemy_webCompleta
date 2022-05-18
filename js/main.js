  $(document).ready(function(){
    //alert("se cargo correctamente el fichero JS");

    //selector de tema
    var theme= $("#theme")
    $("#toGreen").click(function(){
      theme.attr("href", "css/estiloGreen.css");
      console.log(theme.attr("href"));
    });

    $("#toBlue").click(function(){
      theme.attr("href", "css/estiloBlue.css");
      console.log(theme.attr("href"));
    });

    $("#toRed").click(function(){
      theme.attr("href", "css/estiloRed.css");
      console.log(theme.attr("href"));
    }); 

    //scrollUp
    $(".subir").click(function(e){
      e.preventDefault();
      $("html, body").animate({
        scrollTop: 0,
      }, 1500);

    });

    
    var usuario= localStorage.getItem("form_name");
    if(!usuario != null && usuario != undefined){
      console.log("usuario es: " + usuario);
      var pAbout = $("#about p");
      pAbout.html("Bienvenid@ "+ usuario);
      pAbout.append("<br> <a href='#' id='logout'> Cerrar Sesión </a>");
      pAbout.css("textAlign", "center");
      console.log("ahora deberia ocultarse el login");
      $("#login").hide();
      var temaC=localStorage.getItem("theme");
      theme.attr("href", temaC);
      $("#logout").click(function(){
        localStorage.clear();
        location.reload();
      });
    };


  });
