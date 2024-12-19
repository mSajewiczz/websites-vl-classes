const tab = ["Bramkarz", "Obronca", "Pomocnik", "Napastnik"];

const input = document.querySelector("input");
const button = document.querySelector("button");
const li = document.querySelector("li");

function Check() {
    if(input.value == 1) {
        li.textContent = tab[0];
        input.value = "";
    } else if (input.value == 2) {
        li.textContent = tab[1];
        input.value = "";
    } else if (input.value == 3) {
        li.textContent = tab[2];
        input.value = "";
    } else if (input.value == 4) {
        li.textContent = tab[2];
        input.value = "";
    }
 }

button.addEventListener("click", Check);
