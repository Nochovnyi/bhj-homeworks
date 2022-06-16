const dropdown = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const dropItem = Array.from(document.querySelectorAll(".dropdown__item"));


dropdown.addEventListener("click", function(){
    dropList.classList.toggle("dropdown__list_active")
}, { "passive": true })


    for (let i = 0; i < dropItem.length; i++){
        dropItem[i].onclick = function(event) {
            dropdown.textContent = dropItem[i].querySelector(".dropdown__link").textContent;
            dropList.classList.remove("dropdown__list_active")

            event.preventDefault()
        }
    }
    
    
