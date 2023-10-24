"use strict";

window.onload = init;

function init(){
    const buttonCalculate = document.getElementById("buttonCalculate");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick(){
        // Get starting Values. 
        
    const inputPayment = parseFloat(document.getElementById("inputPayment").value); // PMT
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);
    const inputYears = parseFloat(document.getElementById("inputYears").value);

        //Calculations....

    // Convert the interest Rate from percentage to decimal.
    let annualInterestRateInDecimal = (inputInterest / 100);
    let monthlyInterestRate = (annualInterestRateInDecimal / 12); // r

    let numberOfMonth = inputYears * 12; // n

    let presentValue = inputPayment * 
        (
            (1-(1 + monthlyInterestRate)** (- numberOfMonth)) / monthlyInterestRate

        );

    let outputPresentValue = document.getElementById("outputPresentValue");

    outputPresentValue.value = presentValue.toFixed(2);
}

