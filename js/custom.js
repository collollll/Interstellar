$(function () {
  // $(".main li").on("click", function () {
  //   $(".main li").not(this).removeClass("on");
  //   $(this).toggleClass("on");
  //   // $(".main .up").removeClass("move");
  //   $(".main li").not(this).find(".up").removeClass("move");
  //   $(this).find(".up").toggleClass("move");
  // });

  $(".main li").on("click", function () {
    let isOn = $(this).hasClass("on");
    if (isOn) {
      $(this).removeClass("on");
      $(this).find(".down").slideUp(500);
      $(this).find(".up").removeClass("move");
    } else {
      $(".main li").removeClass("on");
      $(this)
        .find(".down")
        .slideDown(500, function () {
          $(this).parent("li").addClass("on");
        });
      // $(this).addClass("on");
      $(".main li").find(".up").removeClass("move");
      $(this).find(".up").addClass("move");
    }
  });
});
