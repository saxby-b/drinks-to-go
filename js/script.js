const input = document.querySelector("input");
const button = document.querySelector("button");
const question = document.querySelector(".question");
const message = document.querySelector(".message");
const softDrinks = document.querySelector(".soft-drinks");
const alcoholicDrinks = document.querySelector(".alcoholic-drinks");
const lemonade = document.querySelector(".lemonade");
const juice = document.querySelector(".juice");
const soda = document.querySelector(".soda");
//const goBackButton = document.querySelector(".button .go-back");

const checkAge = function () {
    const age = input.value;
    const legalAge = 21;
    if (age < legalAge) {
        message.innerText = "Drinks To Go offers many soft drinks such as sodas.";
        softDrinks.classList.remove("hide");
        softDrinks.classList.add("width");
    } else {
        message.innerText = "Drinks To Go has a large selection of acholic and non-alcoholic beverages."
        softDrinks.classList.remove("hide");
        alcoholicDrinks.classList.remove("hide");
    }
    input.classList.add("hide");
    button.classList.add("hide");
    question.classList.add("hide");
};

const goBack = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `  <li class="lemonade">lemonade</li>
          <li class="juice">juice</li>
          <li class="soda">soda</li>
          <li>hot chocolate</li>
          <li>chocolate milk</li>`;
};

const lemonadeList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Pink Lemonade </li>
    <li> Raspberry Lemonade</li>
    <li> Homemade Lemonade</li>
    <button class="button go-back" type="button" name="button">Go Back</button>`;
};

const juiceList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Apple Juice </li>
    <li> Orange Juice </li>
    <li>Cranberry Juice </li>
    <li> Grape Juice </li>
    <button class="button go-back" type="button" name="button">Go Back</button>
    `;
};

const sodaList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Lemon Soda </li>
    <li> Cherry Soda </li>
    <li> Orange Soda </li>
    <li> Grape Soda </li> `;
    const goBackButton = document.createElement("button");
    goBackButton.classList.add("go-back");
    goBackButton.innerText = "Go Back";
    goBackButton.addEventListener("click", goBack);
};


button.addEventListener("click", checkAge);
lemonade.addEventListener("click", lemonadeList);
juice.addEventListener("click", juiceList);
soda.addEventListener("click", sodaList);
//goBackButton.addEventListener("click", goBack);
