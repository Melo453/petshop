addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".btn__menu");e&&e.addEventListener("click",(()=>{document.querySelector(".menu__items").classList.toggle("show")}))})),addEventListener("DOMContentLoaded",(()=>{const e=document.querySelectorAll(".responsive");console.log(e),e&&e.forEach(((t,o)=>{console.log(e),e[o].addEventListener("click",(()=>{document.querySelector(".menu__items").classList.toggle("show")}))}))})),$(document).ready((function(){$(".desplazar").click((function(e){e.preventDefault(),$("body, html").animate({scrollTop:$(this.hash).offset().top},1500)}))}));