var counterAnimated = false;
$(window).scroll(function () {
  var hT = $(".main_counter_content").offset().top,
    hH = $(".main_counter_content").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH && !counterAnimated) {
    $(".statistic-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
    counterAnimated = true;
  }
});
