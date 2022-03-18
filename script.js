let formulario = document.forms["create-input"];

formulario.addEventListener("submit", addItem);

let clearAll = document.querySelector(".clear-button");
clearAll.addEventListener("click", clearItemsDone);

let active = document.querySelector(".active");
active.addEventListener("click", showActive);

let completed = document.querySelector(".completed");
completed.addEventListener("click", showCompleted);

let all = document.querySelector(".all");
all.addEventListener("click", showAll);

function addItem (e) {
    e.preventDefault();
    let input = e.target["new-todo"];
    let inputValue = input.value.trim();

    if(inputValue == "") {
        return;
    }

    input.value = "";
    let item = document.createElement("div");
    item.classList.add("item");
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    let par = document.createElement("p");
    par.textContent = inputValue;
    let img = document.createElement("img");
    img.src = "images/icon-cross.svg";
    img.addEventListener("click", (e) => deleteItem(e.target.parentNode));
    item.append(check, par, img);

    document.querySelector(".list").appendChild(item);
    countItems()
}

function deleteItem (node) {
    node.remove();
    countItems()
}

function countItems() {
    let items = document.querySelectorAll(".item");
    
    let counter = 0;

    items.forEach(item => {

        if (getComputedStyle(item).display == "flex") {
            counter++;
        }

    });

    document.querySelector("#counter").textContent = counter;
}

function clearItemsDone() {
    let inputs = document.querySelectorAll(".item input");
    inputs.forEach(input => {
        if (input.checked == true) {
            deleteItem(input.parentNode);
        }
    
    })
    countItems();
}

function showActive() {
    showAll();
    let inputs = document.querySelectorAll(".item input");
    inputs.forEach(input => {
        if (input.checked == true) {
            input.parentNode.style.display = "none";
        }
    })
    countItems();
}

function showCompleted() {
    showAll();
    let inputs = document.querySelectorAll(".item input");
    inputs.forEach(input => {
        if (input.checked == false) {
            input.parentNode.style.display = "none";
        }
    })
    countItems();
}

function showAll() {
    let inputs = document.querySelectorAll(".item");
    inputs.forEach(input => {
        //console.log(input);
    input.style.display = "flex";
    })

}

