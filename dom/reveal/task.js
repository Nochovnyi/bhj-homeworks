const revel = Array.from(document.querySelectorAll(".reveal"));
let revelTop;
let revelBottom;

function Onscroll(){
    for (let i in revel ){
        revelTop = revel[i].getBoundingClientRect().top;
        revelBottom = revel[i].getBoundingClientRect().bottom;
        if (revelTop < window.innerHeight){
            revel[i].classList.add("reveal_active")
        }else {
            revel[i].classList.remove("reveal_active")
        }

        if (revelBottom < window.innerHeight){
            revel[i].classList.add("reveal_active")
        }else {
            revel[i].classList.remove("reveal_active")
        }

        }
}


window.addEventListener("scroll", Onscroll)

