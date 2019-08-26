$(document).ready(function () {
  $(".design").click(function () {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });


  $(".development").click(function () {
    $(".development-showing").toggle();
    $(".development-hidden").toggle();
  })
  

  $(".product").click(function () {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
  
$("#sbmt").click(function(event)
  {
    event.preventDefault();

    var email=$("#contact-email").val();

    if($("#user-name").val()==""){
      alert("Please input name")
    }
    else if($("#contact-email").val()==""){
      alert("Please input email")
    }
    else if($("#message").val()==""){
      alert("Please input your message")
    }
  
    else{
    alert("Hello "+ email + "," + "your message has been received. Thank you for reaching out to us.");}
  });
  
});
