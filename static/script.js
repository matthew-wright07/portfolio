const observer = new IntersectionObserver(items=>{
    items.forEach(item=>{
        if (item.isIntersecting){
            item.target.classList.add('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));

const headerObserver = new IntersectionObserver(items=>{
    items.forEach(item=>{
        if (item.isIntersecting){
            item.target.classList.add('header-show')
        }
    })
})
const header = document.querySelector(".header")
headerObserver.observe(header)


const menu = document.querySelector(".menu");
var open = false;
const menu_content = document.querySelector(".menu-content")

const openPath = `
<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
`;

const closedPath = `
<path fill-rule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
`;

menu.addEventListener("click", () => {
    open = !open;

    if (open) {
        menu.innerHTML = openPath;

        menu.setAttribute("viewBox", "0 0 24 24");
        menu.setAttribute("fill", "none");
        menu.setAttribute("stroke", "currentColor");
        menu.setAttribute("stroke-width", "1.5");

        menu_content.style.display = "flex";
    } else {
        menu.innerHTML = closedPath;

        menu.setAttribute("viewBox", "0 0 24 24");
        menu.setAttribute("fill", "currentColor");
        menu.removeAttribute("stroke");
        menu.removeAttribute("stroke-width");

        menu_content.style.display = "none";
    }
});