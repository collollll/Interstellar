$(function () {
  $(".main li").on("click", function () {
    // $(".main li .down").not(this).slideUp();
    $(".main li").not(this).removeClass("on");

    // $(this).find(".down").slideDown(500);
    // $(this).find(".down").css({ display: "flex", opacity: "1" });
    $(this)
      .find(".down")
      .slideToggle(400, function () {
        $(this).parent("li").toggleClass("on");
      });

    // $(".main .up").removeClass("move");
    $(".main li").not(this).find(".up").removeClass("move");
    $(this).find(".up").toggleClass("move");
  });
});

// 토글을 쓰고 싶음
// 근데 리무브때문에 토글 효과가 안들어감
// 지금 클릭한 녀석 빼고 다른 애들만 리무브 한다면 되지 않을까?
// -> not() 사용하면 not에 있는 애만 빼고 나머지를 찾아줌
