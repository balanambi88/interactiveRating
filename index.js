$(document).ready(function () {
  $("li button").on("click", function (event) {
    event.stopPropagation();
    var buttonClicked = this.innerHTML;
    $(this).addClass("clickedOne");
    document.getElementById("rating").textContent = buttonClicked;
  });

  $(".submit-btn").on("click", function () {
    $(".home").addClass("hide");
  });
});
