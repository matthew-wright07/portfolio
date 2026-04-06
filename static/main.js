const mobile_hamburger = document.querySelector(".mobile-hamburger")
const mobile_close = document.querySelector(".mobile-close")
const mobile_menu = document.querySelector(".mobile-menu")

mobile_hamburger.addEventListener("click", ()=>{
    mobile_menu.style.display = "flex"
})
mobile_close.addEventListener("click", ()=>{
    mobile_menu.style.display = "none"
})



console.log("Hi, I'm Matthew Wright 👋")