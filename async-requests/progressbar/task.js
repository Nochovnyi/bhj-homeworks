const progress = document.getElementById('progress');
const form = document.getElementById("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

   
    xhr.upload.addEventListener("progress", (event) => {
        progress.value = event.loaded/event.total;
    })

    xhr.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");

    xhr.send(data);
    
})