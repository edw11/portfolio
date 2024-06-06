/*======================================toggle icon nabvbar====================*/ 
let menuIcon=document.querySelector('#menu-icon')
let navbar =document.querySelector('.navbar')

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle('fa-x')
    navbar.classList.toggle('active')
}
/*======================================toggle icon nabvbar====================*/

let sections =document.querySelectorAll('section');
let navLinks =document.querySelectorAll('header nav a')

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY
        let offset = sec.offsetTop-150
        let height = sec.offsetHeight
        let id = sec.getAttribute('id')
        if(top>=offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                
            })
            document.querySelector('header nav a[href*=' + id +']').classList.add('active')
        }
    })
    /*======================================sticky navbar====================*/
    let header =document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)

    /*======================================remove toggle navbar====================*/
    menuIcon.classList.remove('fa-x')
    navbar.classList.remove('active')
}
/*======================================remove toggle navbar====================*/
ScrollReveal({
    distance: '10px',
    duration: 2000,
    delay: 0
})

ScrollReveal().reveal('.home-content , heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box', { origin:'button'});
ScrollReveal().reveal('.about-img', { origin:'left' });
ScrollReveal().reveal('.about-content', { origin:'right' });





/*======================================Type JS====================*/
const typed = new Typed('.multiple-text', {
    strings:['a Web Developer', ' an Ai Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop:true,
})