const mobile =document.getElementById("mobile");
const navitems =document.querySelector(".nav-items");
const navlinks =document.querySelectorAll(".nav-link");

mobile.addEventListener('click',() => {
    navitems.classList.toggle('active')

});

navlinks.forEach((navlink)=>{
    navlink.addEventListener('click',() => {
        navitems.classList.toggle('active')
    
    });

});
