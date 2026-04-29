const observer = new IntersectionObserver(items=>{
    items.forEach(item=>{
        if (item.isIntersecting){
            item.target.classList.add('show');
        }else{
            item.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));


const menu = document.querySelector(".menu");
var open = false;
const menu_content = document.querySelector(".menu-content")

menu.addEventListener("click",()=>{
    open=!open;
    if (open===true){
        menu.src="/static/images/close.svg";
        menu_content.style.display = "flex"
    }else{
        menu.src="/static/images/menu.svg"
        menu_content.style.display = "none"
    }
})