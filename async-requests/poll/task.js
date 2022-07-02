const poollTitle = document.getElementById("poll__title");
const answers = document.getElementById("poll__answers");

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();

xhr.addEventListener("readystatechange", () => {
    if (xhr.readyState === xhr.DONE){
        const obj = JSON.parse(xhr.responseText).data;
        poollTitle.innerHTML = obj.title;

        for (let i in obj.answers){
            answers.innerHTML += `
            <button class="poll__answer">
                ${obj.answers[i]}
            </button>
        `;
        }
    }
})

answers.addEventListener("click", (event) => {
    const btn = event.target.classList.contains("poll__answer");

    if (btn){
        alert("«Спасибо, ваш голос засчитан!»");
    }

    window.location.reload()
})