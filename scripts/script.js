window.onscroll = function() {navStickyTop()};
let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;
function navStickyTop() {
    window.pageYOffset >= sticky ? 
    navbar.classList.add("nav-sticky-top") : 
    navbar.classList.remove("nav-sticky-top");
  }


function navCollapse() {
  let navbar = document.getElementById("navbar");
  navbar.className === "navbar" || navbar.className === "navbar nav-sticky-top" ? navbar.classList.add("responsive") : navbar.classList.remove("responsive");
}
