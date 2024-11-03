import add from './StringCalculator.js';

export function calculate() {  // Export the function
    const input = document.getElementById("inputField").value;
    const resultDiv = document.getElementById("result");
    const errorDiv = document.getElementById("error");

    console.log("Input:", input); // Log the input value

    try {
        errorDiv.textContent = "";  // Clear previous errors
        const result = add(input);   // Using the add function
        console.log("Result:", result); // Log the result
        resultDiv.textContent = "Result: " + result;
    } catch (error) {
        resultDiv.textContent = "";
        errorDiv.textContent = error.message;
        console.error("Error:", error.message); // Log the error message
    }
}

// Add an event listener to the button to call the calculate function
document.getElementById("calculateButton").addEventListener("click", calculate);
