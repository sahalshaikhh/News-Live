// Initialization for ES Users
// import {
//     Input,
//     Ripple,
//     initTE,
// } from "tw-elements";

// initTE({ Input, Ripple });

var nn = document.querySelector(".myClass").innerHTML = " ©  " + new Date().getFullYear() + " Copyright";
console.log(nn);


const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
});
