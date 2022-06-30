/* 
The number that the user inputs is an odd number that is 5 or higher. The bowtie that will be displayed has the same hight as the user's number. Half of the middle line (the longest line) will also be the same as the user's number. 
*/ 

// Activates Strict Mode
"use strict";

/*
Bowtide Example:
ex. 5

*        *
***    ***
**********
***    ***
*        *

*/

function bowtieMaker() {
  let userNumber = prompt("Enter a number equal to ")
  
  let bowtie = "*";

  for (let i = 0; i < userNum / 2; i++) {
    bowtie + "<br>**";
  }

  console.log(bowtie)
}