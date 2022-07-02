const chatActive = document.querySelector(".chat-widget");
const input = document.getElementById("chat-widget__input")
const chatWidget = document.querySelector(".chat-widget__messages");
const randomChat = ["мы не будем вам ничего продавать",
"Где ваша совесть?",
"Кто тут?",
"К сожалению все операторы занятыб не пишите нам больше"];
let date = new Date();



chatActive.addEventListener("click", () => {
    chatActive.classList.add("chat-widget_active")
})

input.addEventListener("keydown", (event) => {
    const minute = date.getMinutes();
    const hours = date.getHours();
    if (hours < 10){
        hours = "0" + hours;
    }

    if (minute < 10){
        minute = "0" + hours;
    }
    if (event.code === "Enter" && input.value != '') {
		let idex = Math.floor(Math.random() * randomChat.length);
		chatWidget.innerHTML += `
			<div class="message message_client">
				<div class="message__time">${hours}:${minute}</div>
				<div class="message__text">${input.value}</div>
			</div>  
			<div class="message">
				<div class="message__time">${date.getHours()}:${date.getMinutes()}</div>
				<div class="message__text">${randomChat[idex]}</div>
			</div>`;
            input.value = "";
	}
})

