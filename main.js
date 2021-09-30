// Script to change the active class in li tag

$(".tabbar ul li a").click(function (e) {
  let link = $(this),
    li = link.parent();

  setActive(li.parent(), li);
  return false;
});

// Create setActive()
function setActive(nav, li) {
  nav.find("li").removeClass("active");
  //   lets add the active class
  li.addClass("active");

  //   lets bring up that drop effect
  nav.css("--x", li.position().left + li.outerWidth() / 2 + "px");
}
