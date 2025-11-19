console.log("Hey you found me, here's a cookie for you 😁🫴🍪")

const yay = document.querySelector("#yay");

function handleClick(event){
    for (let i=0;i<20;i++){
        const p_tag = document.createElement("p")
        p_tag.innerHTML="🎉";
        p_tag.style.position="absolute";
        p_tag.style.left = event.pageX + "px"
        p_tag.style.top = event.pageY + "px"
        document.body.appendChild(p_tag);
        let opacity = 1
        let y = Math.random()*100-100
        const random = Math.random()*200-100;
        const interval = setInterval(()=>{
            y+=1
            opacity-=0.01
            p_tag.style.transform = `translate(${random}px, ${y}px)`
            p_tag.style.opacity = opacity
            if (opacity<=0){
                clearInterval(interval)
                p_tag.remove()
            }
        },20)
    }
}

yay.addEventListener('click', handleClick);


const mouse = document.createElement("img")
mouse.src = "static/images/cursor.svg"
mouse.style.position="fixed"
mouse.style.scale=".1"
mouse.style.pointerEvents = "none";
document.body.appendChild(mouse);

function handleMove(event){
    mouse.style.left = (event.clientX-250) + "px"
    mouse.style.top = (event.clientY-250) + "px"
}

document.addEventListener("mousemove",handleMove)