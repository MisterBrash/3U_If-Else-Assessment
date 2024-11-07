/**
 * Unit 3 Mid-Assessment: Conditional Statements
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read the instructions carefully. Complete this task in the 70 minutes provided.
 * Submit your work by commiting and synchronizing to GitHub.
 **/ 

'use strict';

// Event listener(s)
document.getElementById("fact").addEventListener("click", fact);
document.getElementById("roll").addEventListener("click", roll);

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Output to the page instead of the console
function output(str) {
    document.getElementById("output").textContent = str;
}


/** You will code the two functions below **/

// Return whether a value is even or not
function is_even(value) {
    
}

// When the user clicks the "Random Fact" button
function fact() {
    // Get the age from the number box
    let age = +document.getElementById("age").value;

    
}

// When the user clicks the "Roll 2d10" button
function roll() {


}

