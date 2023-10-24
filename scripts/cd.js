"use strict";

window.onload = init;

function init(){
    const buttonCalculate = document.getElementById("calculateBtn");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick(){
    // The starting values.

    const inputDeposit = parseFloat(document.getElementById("inputDeposit").value);
    const inputYears = parseFloat(document.getElementById("inputYears").value);
    const inputInterest = parseFloat(document.getElementById("inputInterest").value);

    // let depositAmount = Number(inputDeposit.value); 
    // let numberOfYears = Number(inputYears.value); 
    // let annualInterestRate = Number(inputInterest.value); 

        // Calculate the unknown 
    
        let annualInterestRateDecimal = inputInterest / 100; // To get the rate from percentage to Decimal.

        const n = 1; //Compound is typically 1 per year so n = 1.

        const futureValue = inputDeposit * 
        (
            (1 + (annualInterestRateDecimal / n))** (n * inputYears)
        );

        const totalInterestEarned = futureValue - inputDeposit;

        // Display the output.

        const outputFutureValue = document.getElementById("outputFutureValue");
        const outputInterestEarned = document.getElementById("outputInterestEarned");

        outputFutureValue.value = futureValue.toFixed(2);
        outputInterestEarned.value = totalInterestEarned.toFixed(2);


}