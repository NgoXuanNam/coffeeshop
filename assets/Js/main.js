let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);
// Xử lý Menu Icon
let getNavBar = $(".navbar");
let getMenuIcon = $("#menu-btn");
let getOverlay = $(".overlay");

getMenuIcon.onclick = () => {
  getNavBar.classList.add("active");
  getOverlay.classList.add("active");
  getCartItem.classList.remove("active");
  getSearch.classList.remove("active");
};
// Xử lý tắt menu
let getCloseMenu = $(".navbar_close span");
getCloseMenu.onclick = () => {
  getNavBar.classList.remove("active");
  getOverlay.classList.remove("active");
};

getOverlay.onclick = function () {
  getNavBar.classList.remove("active");
  getOverlay.classList.remove("active");
};

// Xử lý Cart Item
let getCartItem = $(".cart-items-container");
let getCartIcon = $("#cart-btn");

getCartIcon.onclick = () => {
  getCartItem.classList.toggle("active");
  getNavBar.classList.remove("active");
  getSearch.classList.remove("active");
};
// Xử lý Search Icon
let btnScrollTop = document.querySelector(".onScrollTop");
console.log(btnScrollTop);
let getSearch = $(".search-form");
let getSearchIcon = $("#search-btn");

getSearchIcon.onclick = () => {
  getSearch.classList.toggle("active");
  getNavBar.classList.remove("active");
  getCartItem.classList.remove("active");
};
window.onscroll = () => {
  let scrollTop = document.documentElement.scrollTop;
  getNavBar.classList.remove("active");
  getCartItem.classList.remove("active");
  getSearch.classList.remove("active");
  getOverlay.classList.remove("active");
  if (scrollTop > 200) {
    btnScrollTop.classList.add("active");
  } else {
    btnScrollTop.classList.remove("active");
  }
};
btnScrollTop.onclick = function () {
  document.documentElement.scrollTop = 0;
};
