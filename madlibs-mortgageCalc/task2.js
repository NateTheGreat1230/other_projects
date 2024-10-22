// Gets the HTML elements that I am dynamically changing
const amountInput = document.getElementById("amount");
const interestInput = document.getElementById("interest");
const yearsInput = document.getElementById("years");
const err1 = document.getElementById("err1");
const err2 = document.getElementById("err2");
const err3 = document.getElementById("err3");
const paymentOutput = document.getElementById("payment");
const addReport = document.getElementById("addReport");
const reportElement = document.getElementById("report");
const clearReport = document.getElementById("clearReport");

// Creates an instance of a Report to use throughout the aplication.
const report = new Report(reportElement);

// Variables to use to store temporary data for my event listeners
let amount = 100000;
let interest = 5.5;
let years = 30;
let payment = 0;

// Sets the fields and calculaton when the page is loaded.  
amountInput.value = amount;
interestInput.value = interest;
yearsInput.value = years;
paymentOutput.textContent = new Calculation(amount, interest, years).getPayment();

// Event listeners for the textboxes in my html. 
amountInput.addEventListener("blur", () => onBlur(amountInput, err1, val => amount = val));
interestInput.addEventListener("blur", () => onBlur(interestInput, err2, val => interest = val));
yearsInput.addEventListener("blur", () => onBlur(yearsInput, err3, val => years = val));

// This handles the add to report button. It adds the current calculation to the report and performs the one second timeout.
addReport.addEventListener("click", () => {
    const calculation = new Calculation(amount, interest, years);
    report.element.innerHTML = "<p>Thinking</p>";
    report.addCalculation(calculation);
    setTimeout(() => report.updateHTML(), 1000);
});

// This simply clears the report when the clear report button is pressed.
clearReport.addEventListener("click", () => {
    report.clear();
});

// This function handles all of the textbox change actions (blur). 
// This calls functions to update error messages and validate the user inputed data.
function onBlur(inp, err, setVar) {
    clearErrs();
    if (validateInput(inp.value)) {
        setVar(inp.value);
        paymentOutput.textContent = new Calculation(amount, interest, years).getPayment();
    } else {
        err.textContent = "Invalid Input";
        paymentOutput.textContent = "Error calculating payment."
    }
}

// This is my function to validate the users input. It checks if it is empty and also checks if it is not a number.
function validateInput(input) {
    let isValid = true;
    if (input === "" || isNaN(parseFloat(input))) {
        isValid = false;
    }
    return isValid;
}

// This resets the error messages so when the user fixes the input the error goes away.
function clearErrs() {
    err1.textContent = "";
    err2.textContent = "";
    err3.textContent = "";
}
