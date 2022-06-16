let left = document.querySelector(".slider__arrow_prev");
let right = document.querySelector(".slider__arrow_next");
let image = document.querySelectorAll(".slider__item");

let i = 0;

left.onclick = function(){
    image[i].className = "slider__item";
    i--;

    if (i < 0){
        i = image.length - 1
    }

    image[i].className = "slider__item slider__item_active"
}

right.onclick = function () {
    image[i].className = 'slider__item';
    i++;
  
    if (i >= image.length) {
      i = 0;
    }
  
    image[i].className = 'slider__item slider__item_active';
  }
  