let image = document.getElementById("cookie");
let clicker = document.getElementById("clicker__counter")
let count = 1;
function cheangePic(){
    if (image.width === 200){
        image.width = 250   
    } else {
        image.width = 200
    }
    
}

function clickerCount(){
 clicker.textContent = count;
 count++;
}

image.addEventListener("click", cheangePic);
image.addEventListener("click", clickerCount);