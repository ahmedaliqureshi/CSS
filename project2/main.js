const menuBtn= document.getElementById("menu-btn"); 
const navlinks= document.getElementById("nav-links"); 
const menuBtnIcon= menuBtn.querySelector("i");

menuBtn.addEventListener("click",()=>{
    navlinks.classList.toggle("open"); 

    const isOpen= navlinks.classList.constains("open"); 
    menuBtnIcon.setAttribute(
        "class",
        isOpen?"ri-close-line":"ri-menu-3-line"
    );
});
navlinks.addEventListener("click",()=>{
    navlinks.classList.remove("open"); 
    menuBtnIcon.setAttribute("class","ri-menu-line");
})
const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:2000,
};
ScrollReveal().reveal(".header_container h1",{
...scrollRevealOption,
delay:1000,
});
ScrollReveal().reveal(".header_container p",{
    ...scrollRevealOption,
    delay:2000,

});
ScrollReveal().reveal(".header_container .header__btn",{
    ...scrollRevealOption,
    delay:3000,

});