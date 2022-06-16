const tabs = Array.from(document.querySelectorAll(".tab"));
const tabsContent = Array.from(document.querySelectorAll(".tab__content"));


    for (let i = 0; i < tabs.length; i++){
        tabs[i].onclick = function(){
            document.querySelector('.tab_active').classList.remove('tab_active');
		    document.querySelector('.tab__content_active').classList.remove('tab__content_active');

            tabs[i].classList.add("tab_active");
            tabsContent[i].classList.add("tab__content_active");
            
            }
            
        }
    
