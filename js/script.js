const input = document.querySelector("input");
const button =document.querySelector("button");
const question = document.querySelector(".question");
const message = document.querySelector(".message");

const checkAge = function() {
    const age = input.value;
    const legalAge = 21;
    if(age < legalAge) {
        message.innerText = "Drinks To Go offers many soft drinks such as sodas.";

    } else {
        message.innerText = "Drinks To Go has a large selection of acholic and non-alcoholic beverages."
    }
}

button.addEventListener("click", checkAge);