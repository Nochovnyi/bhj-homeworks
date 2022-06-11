let dead = document.getElementById("dead").textContent;
let lost = document.getElementById("lost").textContent;

for (let i = 1; i < 10; i++) {
	let hole = document.getElementById("hole" + i);

	hole.onclick = function() {
        

		if (hole.classList.contains('hole_has-mole')) {
			dead++;
		} else {
			lost++;
		}

		if (dead === 10) {
            alert("Победа");
			dead = 0;
			lost = 0;
		}	
		else if (lost === 5) {
            alert("Вы проиграли!");			
			dead = 0;
			lost = 0;
		}

        document.getElementById("dead").textContent = dead;
		document.getElementById("lost").textContent = lost;
	}
}