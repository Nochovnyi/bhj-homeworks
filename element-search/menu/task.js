let menu = document.querySelectorAll(".menu__link");

for (let i of Array.from(menu)){

    i.onclick = function(){

        let parent = i.parentElement;
        if (parent.querySelector(".menu_sub").className === "menu menu_sub"){
            parent.querySelector(".menu_sub").classList.add("menu_active")
        } else {
            parent.querySelector(".menu_sub").classList.remove("menu_active")
        }

        if (i.closest(".menu_main")) {
            return false;
        }
    }
}