// this is your custom Javascript file

function changetext() {
  $("#text_target").text("this is me skiing");
}

function swapimage() {
$("#swap_image").attr("src","snow.jpg");
}

function swapimageback () {
  $("#swap_image").attr("src","ski.jpg");
}
function movetext () {
  $("#move_target").animate(
    {
      left:"100px",top: "20px"
    },
    1000
  );
}



$(function () {
  // add any custom Javascript code below this line
  // add any custom Javascript code above this line.
  $("#text_button").click(changetext);
  $("#swap_image").mouseover(swapimage);
  $("#swap_image").mouseout(swapimageback);
  $("#move_button").click(movetext);
})

