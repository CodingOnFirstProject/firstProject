const btn = document.getElementById('btn');
const amountInput = document.getElementById('original-currency-amount');
const selectOne = document.getElementById('original-currency');
const selectTwo = document.getElementById('to');
let rate = document.getElementById('exchange-rate');
const outputText = document.getElementById('output-text');


const conversionRateURL =
  'https://fierce-meadow-73752.herokuapp.com/https://v6.exchangerate-api.com/v6/3a4f1e0d61d987770fa8814a/latest/USD';

const from_currency = async () => {
  const res = await fetch(conversionRateURL);
  const data = await res.json();
  const rateObjects = data.conversion_rates;
  const rateArray = Object.keys(rateObjects);
  for (let i = 0; i < rateArray.length; i++) {
    const option = document.createElement('option');
    option.value = rateArray[i];
    option.innerText = rateArray[i];
    selectOne.appendChild(option);
  }
};

const to_currency = async () => {
  const res = await fetch(conversionRateURL);
  const data = await res.json();
  const rateObjects = data.conversion_rates;
  const rateArray = Object.keys(rateObjects).sort(() => Math.random() - 0.5);
  for (let i = 0; i < rateArray.length; i++) {
    const option = document.createElement('option');
    option.value = rateArray[i];
    option.innerText = rateArray[i];
    selectTwo.appendChild(option);
  }
};

const convertCurrency = async () => {
  let amount = amountInput.value;
  let from = selectOne.value;
  let to = selectTwo.value;

  const res = await fetch(
    `https://fierce-meadow-73752.herokuapp.com/https://v6.exchangerate-api.com/v6/d53ace0f556c6cedfeaf1d7d/latest/${from}`
  );
  const data = await res.json();
  const rateFrom = await data.conversion_rates[to];

  outputText.textContent = `Your ${amount}${from} will currently buy you ${(
    rateFrom * amount
  ).toFixed(2)}${to}`;
  rate.innerText = `${rateFrom}${to}`;
};

from_currency();
to_currency();
btn.addEventListener('click', convertCurrency);
