const $burger =document.querySelector(".burger");
const $navLinkContainer =document.querySelector(".nav-link-container");
const $navLinks=document.querySelectorAll("navlink-container li")
$burger.onclick =() =>
{
    $navLinkContainer.classList.toogle("nav-clicked");
    $burger.classList.toggle("burger-clicked");

$navLinks.forEach((link,index) => {
    link.style.animation=`navlinkAnimation 0.5s ease forwards ${index/5}+'
});

};
