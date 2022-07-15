let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let currencyElement = document.querySelector(".js-currency");
let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event)=> {
    event.preventDefault();
    let currency = currencyElement.value;
    let amount = amountElement.value;
    let result = amount/currency;
    resultElement.innerText = result.toFixed(2);
});