// Add css with jquery
//$("h1").css("color", "red");

// Add css class with jQuery
//$("h1").addClass("big-title");

// Remove css class with jQuery
//$("h1").removeClass("big-title");

// Add multiple css classes with jQuery
//$("h1").addClass("big-title margin");

// Ask if has a class
//$("h1").hasClass("big-title");

// Change text
//$("h1").text("change text");

//Add event listeners
//Each time the button is click change color of h1
$("button").click(function () {
  $("h1").css("color", "purple");
});

//Change h1 is overwrite with the key is press
$(document).keydown(function () {
  $("h1").text(event.key);
});

