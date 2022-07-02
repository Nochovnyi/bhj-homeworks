const loader = document.getElementById("loader");
const items = document.getElementById("items");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.addEventListener("readystatechange", () =>{
    if (xhr.readyState === xhr.DONE){
        loader.classList.remove("loader_active");
        const obj = JSON.parse(xhr.responseText).response.Valute;
    
        for (let key in obj){
            items.innerHTML += `
                <div class="item">
                    <div class="item__code">
                        ${obj[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${obj[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div>
                </div>  
            `;
        }
    }
})

