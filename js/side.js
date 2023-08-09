document.addEventListener("DOMContentLoaded", function () {
    const subSideContainer = document.querySelector(".sub-side-container");
    const listMenu = document.querySelector(".list");
  
  listMenu.addEventListener("click", function () {
      subSideContainer.classList.toggle("sub-menu-close");
  });
});