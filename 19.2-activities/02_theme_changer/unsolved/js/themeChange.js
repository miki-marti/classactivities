$(".themeChange").on("click", function(){
    if ($(this).hasClass("regular")) {
      $("#theme").attr("href", "css/blank.css")
      //console.log{"it works!"};
    }
    else if ($(this).hasClass("blue")){
      $("#theme").attr("href", "css/blue.css")
      //console.log{"it is blue"};
    }
    else if ($(this).hasClass("dark")){
      $("#theme").attr("href", "css/dark.css")
       //console.log{"it is dark"};

    }
  });