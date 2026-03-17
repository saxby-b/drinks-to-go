const input = document.querySelector("input");
const button =document.querySelector("button");
const question = document.querySelector(".question");
const message = document.querySelector(".message");
const softDrinks = document.querySelector(".soft-drinks");
const alcoholicDrinks = document.querySelector(".alcoholic-drinks");

const checkAge = function() {
    const age = input.value;
    const legalAge = 21;
    if(age < legalAge) {
        message.innerText = "Drinks To Go offers many soft drinks such as sodas.";
        softDrinks.classList.remove("hide");
    } else {
        message.innerText = "Drinks To Go has a large selection of acholic and non-alcoholic beverages."
        softDrinks.classList.remove("hide");
        alcoholicDrinks.classList.remove("hide");
    }
    input.classList.add("hide");
    button.classList.add("hide");
    question.classList.add("hide");
}

button.addEventListener("click", checkAge);