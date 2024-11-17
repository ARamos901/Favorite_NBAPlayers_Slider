document.addEventListener('DOMContentLoaded', ()=> {
    const rightButton=document.querySelector('#right');
    const leftButton=document.querySelector('#left');
    const carousel=document.querySelector('.carousel');

    if(rightButton && carousel){rightButton.addEventListener('click',()=>{
        carousel.scrollBy({
            left:250,
            behavior:'smooth'
            })
        });
    }

    if(rightButton && carousel){leftButton.addEventListener('click',()=>{
        carousel.scrollBy({
            right:250,
            behavior:'smooth'
            })
        });
    }
   

});