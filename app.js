let btn=document.querySelector('.nav-icon');
let nav=document.querySelector('.mobile-nav')

btn.addEventListener('click',function(){
    if(nav.classList.contains('invisible')){
        nav.classList.remove('invisible');
        nav.classList.add('visible');
    }
    else{
        nav.classList.remove('visible');
        nav.classList.add('invisible');
    }
});