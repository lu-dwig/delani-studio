$(document).ready(function(){
    $(".design").click(function(){
        $(".design-details").toggle();
        $(".design").hide();
    })
    $(".design-details").click(function(){
        $(".design").toggle();
        $(".design-details").hide();
    })
    $(".develop").click(function(){
        $(".develop-details").toggle();
        $(".develop").hide();
    })
    $(".develop-details").click(function(){
        $(".develop").toggle();
        $(".develop-details").hide();
    })
    $(".product").click(function(){
        $(".product-details").toggle();
        $(".product").hide();
    })
    $(".product-details").click(function(){
        $(".product").toggle();
        $(".product-details").hide();
    })
});

//  $(".Hover").hover(function(){
  //  $(this).animate({opacity:'1'});
//  },
//  function(){
  //  $(this).animate({opacity:'0'});
//  }) 

   
$(".Hover").mousemove(function (e) {
   var hovertext = $(this).attr("hovertext");
   $(this).css("border", "2px solid grey", "border", "11px solid white");
   $(".display").text(hovertext).show().offset($(this).offset());
   
   }).mouseout(function () {
   $(this).css("border", "none");
   $('.display').hide()
   });


$(".button").click(function () {
      alert()
  var Name = $("#me-name").val();
  var Email = $("#me-email").val();
  var Message = $("#the-comment");

    if (Name == '' || Email == '' || Message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
  }
});
