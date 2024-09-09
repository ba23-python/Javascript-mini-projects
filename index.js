const bodyEl = document.querySelector("body")

//method to track the mouse
bodyEl.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const sizeIcon = Math.random() * 100;
    spanEl.style.width = sizeIcon +"px";
    spanEl.style.height = sizeIcon +"px";

    bodyEl.appendChild(spanEl);
    setTimeout(() =>{
        spanEl.remove();
    }, 3000);
})