const tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

const hasTooltip = document.querySelectorAll(".has-tooltip");

for (let i in Array.from(hasTooltip)){
    hasTooltip[i].addEventListener("click", (event) => {
        event.preventDefault();
        hasTooltip[i].appendChild(tooltip)
        tooltip.classList.toggle("tooltip_active")
        tooltip.innerText = hasTooltip[i].getAttribute("title")
        const target = hasTooltip[i].getBoundingClientRect()
        tooltip.style.left = target.left + "px";
        tooltip.style.top = target.top + 20 + "px";
    })
}