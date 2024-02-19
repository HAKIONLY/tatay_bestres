const container = document.querySelector('.container1');
const emoji = document.querySelector('.emoji');
const textarea = document.querySelector('textarea');
const btns = document.querySelector('.btns');

emoji.addEventListener('click',(e) =>{

    if(e.target.className.includes('emoji')) return;

    textarea.classList.add('textarea--active');
    btns.classList.add('btns--active');
})

container.addEventListener('mouseleave',()=>{

    textarea.classList.remove('textarea--active');
})