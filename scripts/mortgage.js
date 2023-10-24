"use strict";

window.onload = init;
function init() {
    const buttonCalculate = document.getElementById("calculateButton");
    buttonCalculate.onclick = buttonCalculateClick;
}

function buttonCalculateClick(){
    // Get the starting values. Remember create a variable name same as your id.
        //inputPrincipal
        //inputInterest
        //inputLoanLenght
        const inputPrincipal = document.getElementById("inputPrincipal");
        const inputInterest = document.getElementById("inputInterest");
        const inputLoanLenght = document.getElementById("inputLoanLenght");


        // call the function values using( number(id.value) ).
        let principal = parseFloat(inputPrincipal.value);
        let yearlyInterest = parseFloat(inputInterest.value);
        let loanLenghtInyears = parseFloat(inputLoanLenght.value);


    // Calculate the starting values.
    // Calculate the unknown values.

            //  monthlyinterest = interest rate per year divided by 100 divided by 12
        let monthlyInterestAsFraction = yearlyInterest / 100 / 12; 

        let loanLenghtInMonths = loanLenghtInyears * 12; 

        //The goal is to create a formula to get the montly payment and the total amount

        let monthlyPayment = principal * 
                (
                    (monthlyInterestAsFraction)
                    /
                    (1 -(1 + monthlyInterestAsFraction)** -loanLenghtInMonths)
                );

            monthlyPayment = monthlyPayment.toFixed(2);
        
        let totalAmount = (monthlyPayment * loanLenghtInMonths) - principal;


    // Display the unknow Values.

        //outputMonthlyPayment 
        //outputTotalAmount

        const outputMonthlyPayment = document.getElementById("outputMonthlyPayment");
        const outputTotalAmount = document.getElementById("outputTotalAmount");

        outputMonthlyPayment.value = monthlyPayment;
        outputTotalAmount.value = totalAmount;






}