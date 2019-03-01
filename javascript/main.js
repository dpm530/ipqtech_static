// function submitToAPI(e){
//        e.preventDefault();
//        var URL = "";
//
//             var Namere = /[A-Za-z]{1}[A-Za-z]/;
//             if (!Namere.test($("#name-input").val())) {
//                          alert ("Name can not less than 2 char");
//                 return;
//             }
//             var mobilere = /[0-9]{10}/;
//             if (!mobilere.test($("#phone-input").val())) {
//                 alert ("Please enter valid mobile number");
//                 return;
//             }
//             if ($("#email-input").val()=="") {
//                 alert ("Please enter your email id");
//                 return;
//             }
//
//             var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
//             if (!reeamil.test($("#email-input").val())) {
//                 alert ("Please enter valid email address");
//                 return;
//             }
//
//        var name = $("#name-input").val();
//        var subject = $("#subject-input").val();
//        var phone = $("#phone-input").val();
//        var email = $("#email-input").val();
//        var desc = $("#description-input").val();
//        var need = $("#need-to-input").val();
//        var data = {
//           name : name,
//           phone : phone,
//           subject : subject,
//           email : email,
//           desc : desc,
//           need : need
//         };
//
//        $.ajax({
//          type: "POST",
//          url : "",
//          dataType: "json",
//          crossDomain: "true",
//          contentType: "application/json; charset=utf-8",
//          data: JSON.stringify(data),
//
//
//          success: function () {
//            // clear form and show a success message
//            alert("Successfull");
//            document.getElementById("contact-form").reset();
//        location.reload();
//          },
//          error: function () {
//            // show an error message
//            alert("UnSuccessfull");
//          }});
//      }

// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 1000; /* The speed/duration of the effect in milliseconds */
//
// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setInterval(typeWriter, speed);
//   }
// }

//////////TYPEWRITER EFFECT///////

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Custom Websites')
   .pauseFor(2500)
   .deleteAll()
   .typeString('E-commerce Websites')
   .pauseFor(2500)
   .deleteAll()
   .typeString('Cloud Solutions')
   .pauseFor(2500)
   .start();

    ////////SMOTH SCROLL EFFECT////////

    $(document).on('click', 'a[href^="#"]', function(e) {
      // target element id
      var id = $(this).attr('href');
      
      // target element
      var $id = $(id);
      if ($id.length === 0) {
          return;
      }
      
      // prevent standard hash navigation (avoid blinking in IE)
      e.preventDefault();
      
      // top position relative to the document
      var pos = $id.offset().top;
      
      // animated top scrolling
      $('body, html').animate({scrollTop: pos});
    });  