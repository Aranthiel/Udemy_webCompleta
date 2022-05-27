  $(document).ready(function(){
    //alert("se cargo correctamente el fichero JS");

    //selector de tema
  var theme= $("#theme");
  $("#toGreen").click(function(){
    theme.attr("href", "css/estiloGreen.css");
    var temaColor = theme.attr("href");
    console.log(temaColor);
    localStorage.setItem("theme",temaColor);
  });

  $("#toBlue").click(function(){
    theme.attr("href", "css/estiloBlue.css");
    var temaColor = theme.attr("href");
    console.log(temaColor);
    localStorage.setItem("theme",temaColor);
  });

  $("#toRed").click(function(){
    theme.attr("href", "css/estiloRed.css");
    var temaColor = theme.attr("href");
    console.log(temaColor);
    localStorage.setItem("theme",temaColor);
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

    // loguin falso
    $("#login form").submit(function(){
      //alert("Has tocado el boton ingresar");
      var fname = $("#name").val();
      localStorage.setItem("form_name",  fname);
      var fmail = $("#mail").val();
      localStorage.setItem("form_mail",  fmail);
      var fpassword = $("#password").val();
      localStorage.setItem("form_password",  fpassword);
      var temaColor = $("#theme").attr("href");
      console.log(temaColor);
      localStorage.setItem("theme",temaColor);
      
    });


  });
