"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Charlie Brandenburg
      Date: 03/03/24

      Filename: project06-03.js
*/

// Declare useShip variable to reference the element with the id "useShip"
let useShip = document.getElementById("useShip");

// Event listener to run the
useShip.addEventListener("click", copyShippingToBilling);

// Create copyShippingToBilling() function
function copyShippingToBilling() {
  document.forms.useShip.elements.checked[0];
    if (firstnameBill.firstnameShip.value) {
      firstnameBill.firstnameShip();
    } else {
      lastnameBill.lastnameShip();
    } else if {
      address1Bill.address1Ship();
    } else {
      adress2Bill.address2Shop();
    } else if {
      cityBill.CityShip();
    } else {
      countryBill.countryShip();
    } else if {
      codeBill.codeShip();
    }
    selectedIndex.elements.stateBill.value = model.options[stateShip].text;
    }
  }

// Declare formElements variable
let formElements = document.querySelector('input[type="text"]:checked').value;

// Declare fieldCount variable
let fieldCount = formElements.length;

// Declare errorBox variable
let errorBox = document.getElementsById("errorBox");

// For Loop through each element in formElements
for (let i = 0; i < formElements.length; i++) {
  formElements.addEventListener("invalid", function(evt) {
    evt.preventDefault();
  });
}

// Create showValidationError(evt) function
function showValidationError() {
  textContext.getElementById("Complete all highlighted fields", errorbox() {
  }
}
