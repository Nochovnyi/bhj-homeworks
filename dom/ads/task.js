const rotatorCase = document.querySelectorAll(".rotator__case");
let count = 0;

    for (let text of Array.from(rotatorCase)){
        function rotator(){
            if (count == rotatorCase.length - 1){
                rotatorCase.item(count).classList.toggle("rotator__case_active");
                count = 0;
                rotatorCase.item(count).classList.toggle("rotator__case_active");
            }else {
                rotatorCase.item(count).classList.toggle("rotator__case_active");
                count++;
                rotatorCase.item(count).classList.toggle("rotator__case_active");
            }
        }
    }

    setInterval(rotator, 1000);
