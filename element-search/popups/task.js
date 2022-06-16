const modalMain = document.getElementById("modal_main");
const showSuccess = document.querySelector(".show-success");
const modalClose = document.getElementsByClassName("modal__close_times");
const modalSuccess = document.getElementById("modal_success")

modalMain.classList.add("modal_active");

for ( let i of modalClose){
    i.onclick = function (){
        i.className = "modal";
        modalMain.classList.remove("modal_active")
        modalSuccess.classList.remove("modal_active")
    }
}

showSuccess.onclick = function () {
    modalSuccess.classList.add("modal_active")
    modalMain.classList.remove("modal_active")
};
