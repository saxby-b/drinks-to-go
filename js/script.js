const input = document.querySelector("input");
const button = document.querySelector("button");
const question = document.querySelector(".question");
const message = document.querySelector(".message");
const div = document.querySelector(".content-wrapper-list");
const softDrinks = document.querySelector(".soft-drinks");
const alcoholicDrinks = document.querySelector(".alcoholic-drinks");
const lemonade = document.querySelector(".lemonade");
const juice = document.querySelector(".juice");
const soda = document.querySelector(".soda");
const hotChocolate = document.querySelector(".hot-chocolate");
const milk = document.querySelector(".milk");
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
    // button.classList.add("hide");
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
    `;

    const button = document.createElement("button");
    button.innerText = "Go Back";
    button.classList.add("go-back");
    div.append(button);
    button.addEventListener("click", goBack);

};

const sodaList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Lemon Soda </li>
    <li> Cherry Soda </li>
    <li> Orange Soda </li>
    <li> Grape Soda </li> `;
    /*const goBackButton = document.createElement("button");
    goBackButton.classList.add("go-back");
    goBackButton.innerText = "Go Back";
    goBackButton.addEventListener("click", goBack); */
};

const hotChocolateList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Regular Hot Chocolate </li>
    <li> Hot Chocolate with Whipped Cream </li>
    <li> Dark Hot Chocolate </li> 
    <li> Caramelized Hot Chocolate </li>`

};

const milkList = function (e) {
    e.preventDefault();
    softDrinks.innerHTML = `<li> Whole Milk </li>
    <li> Chocolate Milk </li>
    <li> Strawberry Milk </li>
    <li> 1% Milk </li>`;
};



button.addEventListener("click", checkAge);
lemonade.addEventListener("click", lemonadeList);
juice.addEventListener("click", juiceList);
soda.addEventListener("click", sodaList);
hotChocolate.addEventListener("click", hotChocolateList);
milk.addEventListener("click", milkList);
