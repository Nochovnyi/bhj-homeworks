const main = document.querySelector(".interests_main");

main.addEventListener("change", (event) => {
    const interest = event.target.closest(".interest");
    const interests = interest.querySelectorAll(".interests");
    const check = interest.querySelector(".interest__check");
    const chekAll = interest.querySelectorAll(".interest__check")

    interests.forEach(food => {
        chekAll.forEach(elem => {
            if (check.checked){
                elem.checked = true;
            }else {
                elem.checked = false;
            }
        });
    });
})
