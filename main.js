/**
 * Unit 3 Mid-Assessment: Conditional Statements
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read the instructions carefully. Complete this task in the 70 minutes provided.
 * Submit your work by commiting and synchronizing to GitHub.
 **/ 

'use strict';

document.getElementById("go").addEventListener("click", go);

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// This function runs when the user clicks the "GO!" button
function go() {
    
    
}