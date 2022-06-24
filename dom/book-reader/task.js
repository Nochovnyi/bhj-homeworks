const fontSize = Array.from(document.querySelectorAll(".font-size"));
const bgColor = Array.from(document.querySelector(".book__control_background").querySelectorAll("a"))
const textColor = Array.from( document.querySelector(".book__control_color").querySelectorAll("a"))
const book = document.querySelector(".book");


    function fontSizeActive(event){
        event.preventDefault();
        const elemTarget = event.target;
        for (let i in fontSize){
            fontSize[i].classList.remove("font-size_active");
            book.classList.remove("book_fs-small");
            book.classList.remove("book_fs-big")
        }

        elemTarget.classList.add("font-size_active");

        if (elemTarget.classList.contains("font-size_big")){
            book.classList.add("book_fs-big")
        }

        if (elemTarget.classList.contains("font-size_small")){
            book.classList.add("book_fs-small")
        }
    }

    function textColorActive(event){
        event.preventDefault();
        const elemTarget = event.target;
        for (let i in textColor){
            textColor[i].classList.remove("color_active");
            book.classList.remove("book_color-gray");
            book.classList.remove("book_color-whitesmoke");
        }

        elemTarget.classList.add("color_active");

        if (elemTarget.classList.contains("text_color_gray")){
            book.classList.add("book_color-gray")
        }

        if (elemTarget.classList.contains("text_color_whitesmoke")){
            book.classList.add("book_color-whitesmoke")
        }
    }

    function bgColorAcrive(event){
        event.preventDefault();
        const elemTarget = event.target;
        for (let i in bgColor){
            bgColor[i].classList.remove("color_active");
            book.classList.remove("book_bg-gray");
            book.classList.remove("book_bg-black");
        }

        elemTarget.classList.add("color_active");

        if (elemTarget.classList.contains("bg_color_gray")){
            book.classList.add("book_bg-gray")
        }

        if (elemTarget.classList.contains("bg_color_black")){
            book.classList.add("book_bg-black")
        }
    }



    for (let i in fontSize){
        fontSize[i].addEventListener("click", fontSizeActive)
    }

    for (let i in textColor){
        textColor[i].addEventListener("click", textColorActive)
    }

    for (let i in bgColor){
        bgColor[i].addEventListener("click", bgColorAcrive)
    }

  
