const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navclose = document.getElementById('nav-close')
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
navToggle.addEventListener('click', () =>{
navMenu.classList.add('show-menu')
})
}
/*===== MENU HIDDEN =====*/

/* Validate if constant exists */
if(navclose) {

navclose.addEventListener('click', () =>{ navMenu.classList.remove('show-menu')

})

}


function scrollHeader(){

const header = document.getElementById('header')

34

35



if(this.scrolly >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')

}


window.addEventListener('scroll', scrollHeader)
