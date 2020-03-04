// const exchangeRatio = {
// vnd : {
//     usd: 0.0000430145,
//     krw: 0.0512948,
//     eur: 0.0000387078,
//     vnd: 1,
// },

// usd : {
//     vnd: 23262.83,
//     krw: 1192.44,
//     eur: 0.899890,
//     usd: 1,
// },

// krw : {
//     usd: 0.000838523,
//     krw: 1,
//     eur: 0.000754571,
//     vnd: 19.5084, 
// },
// }

// let inputAmount = document.getElementById("inputAmount");
// let from = document.getElementById("from");
// let to = document.getElementById("to");



 
// let amount = inputAmount.value;
// let fromCurrency = from.value;
// let toCurrency = to.value;
// let currency = exchangeRatio[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

// const result = amount * currency
// function convertCurrency (){
//     document.getElementById("result").innerHTML = `The value is ${result}`;
// }

// document.getElementById("buttonConvert").addEventListener("click",convertCurrency);
    

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
// function getFromto() {
//     form = form.value;
//     to = to.value;
//     let currency = currencyRatio[from.toLowerCase()][to.toLowerCase()];
//     return currency
// }

// function gettoFrom() {
//     form = form.value;
//     to = to.value;
//     let currency2 = currencyRatio[to.toLowerCase()][from.toLowerCase()];
//     return currency2;
// }



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
    // console.log ("This is input that user type ", currencyRatio[from.toLowerCase()][to.toLowerCase()]);
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

// function usdToVnd() {
//     from = from.value;
//     to = to.value;
//     amount = amountInput.value;
//     let currency2 = currencyRatio[to.toLowerCase()][from.toLowerCase()];
//     const convertedAmount = (amount / currency2).toFixed(2);
//     // console.log ("This is input that user type ", currencyRatio[from.toLowerCase()][to.toLowerCase()]);
//     resultArea.innerHTML = `This is the result ${convertedAmount}`;
// }

// convertButton.addEventListener ("click", UsdToVnd);

// convertButton.addEventListener ("mouseover", mouseoverFunction)

// convertButton.addEventListener ("mouseout", mouseoutFunction)




// const currency = prompt("What currency do you want to change?")

// if (currency === "VND" || currency === "vnd") {
//     amount = prompt("How much?");
//     if (isNaN(amount) === true) {
//         alert("You should type number, please");
//         amount = prompt("How much?");

//     } else if (amount < 0) {
//         alert("You should not allow negative number");
//         amount = prompt("How much?");

//     }

//     vndToUsd(amount);






// } else if (currency === "USD" || currency === "usd") {
//     amount = prompt("How much?");
//     if (isNaN(amount) === true) {
//         alert("You should type number, please");
//         amount = prompt("How much?");

//     } else if (amount < 0) {
//         alert("You should not allow negative number");
//         amount = prompt("How much?");

//     }

//     UsdToVnd(amount);


// }


// function vndToUsd(amount) {
//     const convertedAmount = (amount / exchangeRate).toFixed(2);
//     console.log ("The value for you to change VND to USD is ", convertedAmount)
// }

// function UsdToVnd(amount) {
//     const convertedAmount = (amount / exchangeRate).toFixed(2);
//     console.log ("The value for you to change USD To VND is ", convertedAmount)
// }







