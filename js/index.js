  $(document).ready(function(){
    
    $(".slider").bxSlider({
        mode: 'fade',
        captions: true,
        infiniteLoop: true, 
        auto: true,
    });
    
    //Post

    var arrPosteos =[
      {
        title: "Prueba de título 1",
        date: new Date(),
        content: "<p> Eulogia Tapia en la poma </p> \n <p> Al aire da su ternura <p> \n <p> Si pasa sobre la arena </p> \n <p> Y va pisando la luna </p> \n <p> Si pasa sobre la arena </p> \n <p> Y va pisando la luna</p>"
      },{
        title: "Prueba de título 2",
        date: new Date(),
        content: "<p>El trigo que va cortando</p>\n <p>Madura por su cintura</p>\n <p>Mirando flores de alfalfa</p>\n <p>Sus ojos negros se azulan</p>\n <p>Mirando flores de alfalfa</p>\n <p>Sus ojos negros se azulan</p>\n"
      },{
        title: "Prueba de título 3",
        date: new Date(),
        content: "<p>El sauce de tu casa</p>\n <p>Te está llorando</p>\n <p>Porque te roban Eulogia</p>\n <p>Carnavaleando</p>\n <p>Porque te roban Eulogia</p>\n <p>Carnavaleando</p>\n"
      },
      /*{
        title: "Prueba de título 4",
        date: new Date(),
        content: "<p>La cara se le enharina</p>\n <p>La sombra se le enarena</p>\n <p>Cantando y desencantando</p>\n <p>Se le entreveran las penas</p>\n <p>Cantando y desencantando</p>\n <p>Se le entreveran las penas</p>\n"
      },{
        title: "Prueba de título 5",
        date: new Date(),
        content: "<p>Viene en un caballo blanco</p>\n <p>La caja en sus manos tiembla</p>\n <p>Y cuando se hunde la noche</p>\n <p>Es una dalia morena</p>\n <p>Y cuando se hunde la noche</p>\n <p>Es una dalia morena</p>\n"
      },{
        title: "Prueba de título 6",
        date: new Date(),
        content: "<p>El sauce de tu casa</p>\n <p>Te está llorando</p>\n <p>Porque te roban Eulogia</p>\n <p>Carnavaleando</p>\n <p>Porque te roban Eulogia</p>\n <p>Carnavaleando</p>\n"
      },*/
    ];

    console.log(arrPosteos);

    arrPosteos.forEach((value, index) => {
      var publicacion = `<article class="post">
      <h2>${value.title}</h2>
      <span class="date">${value.date}</span>
      <p>
        ${value.content}
      </p>
      <a href="#" class="btn-more">leer más</a>
    </article>`;
    console.log(publicacion);
    $("#posteo").append(publicacion);
    });

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
