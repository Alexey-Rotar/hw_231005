function greeting(name) {
    if (name.length == 0) {
        name = "Незнакомец";
    }
    alert("Привет, " + name + "!");
}

const name = prompt("Как тебя зовут?");
greeting(name);