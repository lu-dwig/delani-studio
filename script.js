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
// 
// $(document).ready(function(){
    // $("#hover1").hover(function(){
        // $("#hover-it").show();
    // },function(){
        // $("hover-it").hide();
    // })
    // $("#hover2").hover(function(){
        // $("#hover-it").show();
    // },function(){
        // $("hover-it").hide();
    // })
    // $("#hover3").hover(function(){
        // $("#hover-it3").show();
    // },function(){
        // $("hover-it3").hide();
    // })
    // $("#hover4").hover(function(){
        // $("#hover-it4").show();
    // },function(){
        // $("hover-it4").hide();
    // })
    // $("#hover5").hover(function(){
        // $("#hover-it5").show();
    // },function(){
        // $("hover-it5").hide();
    // })
    // $("#hover6").hover(function(){
        // $("#hover-it6").show();
    // },function(){
        // $("hover-it6").hide();
    // })
    // $("#hover7").hover(function(){
        // $("#hover-it7").show();
    // },function(){
        // $("hover-it7").hide();
    // })
    // $("#hover8").hover(function(){
        // $("#hover-it8").show();
    // },function(){
        // $("hover-it8").hide();
    // })
// 

// });

// $(".hover").hover(function(){
//     $(this).animate({opacity:'1'});
//   },
//   function(){
//     $(this).animate({opacity:'0'});
//   })

$('#subscribe').click(function () {
      alert()
  var Name = $('#mce-NAME').val();
  var Email = $('#mce-EMAIL').val();
  var Message = $('#mce-MESSAGE');
    if (Name == '' || Email == '' || Message == '') {
      alert('Please make sure you have filled in the form correctly!');
  } else {
      alert(' Hi ' + Name + ' We have received your message. Thank you for reaching out to us.');
  }
});
// let button = document.getElementById("subscribe")
// button.addEventListener("click", (e)=>{
    // e.preventDefault();
    // alert("")
// })
