const Add = document.getElementsByClassName("Add")[0];
const Task = document.getElementsByClassName("Task")[0];
const Input = document.getElementsByClassName("Input")[0];
const List = document.getElementsByClassName("List")[0];
const Text = document.getElementsByClassName("text")[0];
const words = document.getElementsByClassName("text");
const task = document.getElementsByClassName("Task");
const CheckBox = document.getElementsByClassName("Check-Box");
const Delete = document.getElementsByClassName("Delete");

List.innerHTML = "";
let index = 0;

function create() {
    if (Input.value == "") {
        window.alert("Please enter a valid value");
    } else {
        Text.textContent = Input.value;
        List.innerHTML += `${Task.outerHTML}`;


        for (let i = 0; i < CheckBox.length; i++) {

            CheckBox[i].addEventListener('click', function () {
                const check = this;
                if (index == 0) {
                    check.style.background = "orange";
                    check.style.color = "white";
                    index++;
                }
                else if (index == 1) {
                    check.style.background = "none";
                    index--;
                }

            });
        }

        for (let i = 0; i < Delete.length; i++) {
            Delete[i].addEventListener('click', function () {
                const button = this;

                if (index == 1) {
                    words[i].style.textDecoration = "line-through";
                    words[i].style.color = "red";
                }
                else {
                    button.style.backgroundColor = "red";
                    setTimeout(() => {
                        const taskToRemove = button.parentElement;
                        taskToRemove.remove();
                    }, 200);
                }

            });
        }

    }
}


