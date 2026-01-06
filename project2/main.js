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
    navLinks.classList.remove("open"); 
    menuBtnIcon.setAttribute("class","ri-menu-line");
})