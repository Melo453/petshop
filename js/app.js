addEventListener('DOMContentLoaded', ()=>{
    const btn__menu = document.querySelector('.btn__menu');
    if (btn__menu) {
        btn__menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu__items');
            menu_items.classList.toggle('show');
        });
    }
});

addEventListener('DOMContentLoaded', ()=>{
    const responsive = document.querySelectorAll('.responsive');
    console.log(responsive);
    if (responsive) {
        
        responsive.forEach((v,i) =>{
            console.log(responsive);
            responsive[i].addEventListener('click', () =>{
                const menu_items = document.querySelector('.menu__items');
                menu_items.classList.toggle('show');
            });
        })
    }
});

$(document).ready(function() {
    var ir_a = $(".desplazar");

    ir_a.click(function(event){ 
        event.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1500

        );
    })
})