/* Created by CodingLab |www.youtube.com/c/CodingLabYT
https://www.youtube.com/watch?v=wEfaoAa99XY */

let sidebar = document.querySelector(".sidebar");
let closeBtn = document.getElementById("btn");
let searchBtn = document.querySelector(".icon-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")) {
   closeBtn.classList.replace("glyphicon-menu-hamburger", "glyphicon-option-vertical");//replacing the iocns class
 } else {
   closeBtn.classList.replace("glyphicon-option-vertical","glyphicon-menu-hamburger");//replacing the iocns class
 }
}
