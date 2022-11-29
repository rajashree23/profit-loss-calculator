const initialPrice = document.querySelector("#initial-price");
const stockQty = document.querySelector("#stock-qty");
const currPrice = document.querySelector("#curr-price");
const outputBox = document.querySelector("#output-box");
const submitBtn = document.querySelector("#submit-btn");

function calculateProfitAndLoss() {
  let initial = Number(initialPrice.value);
  let quantity = Number(stockQty.value);
  let current = Number(currPrice.value);
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / (initial * quantity)) * 100;
    outputBox.innerText = `The loss is ${loss} and the percent is ${lossPercentage}%`;
    outputBox.style.color="red"
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / (initial * quantity)) * 100;
    outputBox.innerText = `The profit is ${profit} and the percent is ${profitPercentage}%`;
    outputBox.style.color="green"
  } else {
    outputBox.innerText = `It's the same`;
  }
}

submitBtn.addEventListener("click", calculateProfitAndLoss);
