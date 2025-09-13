document.addEventListener("DOMContentLoaded", function () {
  var current = location.pathname.split("/").pop();

  document.querySelectorAll("nav li a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (!href || href === "#") return;

    if (href === current) {
      link.classList.add("active");

      var parentLi = link.closest("ul.dropdown")?.closest("li");
      if (parentLi) {
        var parentLink = parentLi.querySelector("a");
        if (parentLink) parentLink.classList.add("active-parent");
      }
    }
  });
});