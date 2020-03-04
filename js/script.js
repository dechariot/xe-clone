

let amountInput = document.getElementById('amount');
let convertButton = document.getElementById('convertButton');
let resultArea = document.getElementById('resultArea');
let from = document.getElementById('from');
let to = document.getElementById('to');
let reverseButton = document.getElementById('reverseButton');

convertButton.addEventListener("click", vndToUsd);
reverseButton.addEventListener("click", usaToVnd);
reverseButton.addEventListener("click", reverse);

function formatCurrency(type, value) {
   return new Intl.NumberFormat('en-US', { style: 'currency', currency: type }).format(value)
}

function getFromTo() {
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    return [from, to];
  }



const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
      usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
      krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    },
      eur: {
        usd: 1.11,
        krw: 1325.74,
        eur: 1,
        vnd: 25809.88
    },
    
}

function vndToUsd() {

    let fromCurrency = from.value;
    let toCurrency = to.value;
    amount = amountInput.value;
    let currency = currencyRatio[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
    const convertedAmount = (amount * currency).toFixed(2);
    resultArea.innerHTML = `This is the result ${formatCurrency(toCurrency,convertedAmount)}`;
}

function usaToVnd() {
    let fromCurrency = from.value;
    let toCurrency = to.value;
    amout = amountInput.value;
    let currency = currencyRatio[toCurrency.toLowerCase()][fromCurrency.toLowerCase()];
    const convertedAmount = (amount * currency).toFixed(2);
    resultArea.innerHTML = `This is the result ${formatCurrency(fromCurrency,convertedAmount)}`;
}

function reverse() {
    const [from, to] = getFromTo();
  
    document.getElementById("from").value = to;
    document.getElementById("to").value = from;
  }





