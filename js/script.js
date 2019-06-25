/* ==== Set Focus on the First Text Field ==== */
$("label[for='name']").focus();

/* ==== "Job Role" ==== */
// hide 'Other' input field if JS isn't enabled
$('#other-title').hide();
// "Your job role" text field appears when user selects "Other" from the Job Role menu.
$('#title').on('change', function () {
  if ($(this).val() === "other") {
    $('#other-title').show();
  } else {
    $('#other-title').hide();
  }
})

// ==== T-Shirt Info ====
// 1. “Color” drop down menu is hidden until a T-Shirt design is selected.
$("#color").hide();

// 2. Attach a 'change' event listener to the 'Design' menu
$('#design').change(function () {
  // if the value is js puns, run this code
  if ($("#design").val() === "js puns") {
    // show the color options
    $('#color').show();
    // show the three 'js puns' options
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
    // hide the three 'heart js' option elements in the 'Color' drop down menu
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
    // set back to the default colour
    $('#color').val('cornflowerblue');
  }
  // else if heart js is selected, run this
  else if ($("#design").val() === "heart js") {
    // show the color options
    $('#color').show();
    // show the three 'I heart' options
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
    // hide the three 'js puns' option elements in the 'Color' drop down menu
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    // set back to the default colour
    $('#color').val('tomato');
  }
});

// ==== Activity ====
// Save activities to a global variable as I need to access throughout
const activities = document.querySelector('.activities');
// Create new DOM element for activities
let activitySpan = document.createElement("span");
// Append it to the activities fieldset
activities.appendChild(activitySpan);
// Create global variable to store total activity cost, set to 0
let totalActivityCost = 0;
// Create a change event listener for the activity section
activities.addEventListener('change', (event) => {
  // save the input element that was just clicked to a variable
  const clickedActivity = event.target;
  // save the text content of the input element's parent label element to a variable
  const textOfClicked = clickedActivity.parentElement.textContent;
  // The index of the dollar sign ‘$’ in the label text from the variable (that you declared above).
  let dollarIndex = textOfClicked.indexOf('$');
  // The cost of the activity the was just clicked.
  // I need to find just the cost, which is at the end of the label string
  let costActivity = textOfClicked.slice(dollarIndex + 1);
  // Take the cost from the variable above, and convert it to a number, so I can use it later on in calculations
  let parsedCost = parseInt(costActivity);
  // Use typeof to check it's a string and also capturing what we want
  // console.log(typeof parsedCost);

  // if else statement that says, if the input element is checked, add its activity cost to the total cost
  // otherwise if it's unchecked, subtract its cost from the total
  if (clickedActivity.checked) {
    totalActivityCost += parsedCost;
  } else {
    totalActivityCost = totalActivityCost - parsedCost;
  }

  // Set the text of the total cost element equal to the string ‘Total: $’ concatenated with the current value of the total cost variable
  activitySpan.textContent = 'Total: $' + totalActivityCost;
  // The index of the em dash ‘—’ in the label text
  let startIndexTime = textOfClicked.indexOf('—');
  // The index of the comma ‘,’ in the label text
  let endIndexTime = textOfClicked.indexOf(',');
  // The day and time text of the activity the was just clicked
  let dayAndTime = textOfClicked.slice(startIndexTime, endIndexTime);
  // select the activities input
  const checkboxes = $('.activities input');

  // loop through the checkboxes
  for (let i = 0; i < checkboxes.length; i++) {
    // select the current activity checkbox
    const activity = checkboxes[i].parentElement.textContent;
    if (activity.includes(dayAndTime) && activity !== textOfClicked) {
      // If both conditions evaluate to "true", then this activity needs to be disabled or enabled, depending on whether the clicked activity was checked or unchecked.
      if (clickedActivity.checked === false) {
        // if the clicked activity was checked, then set the activity element's 'disabled' property to 'true' 
        checkboxes[i].removeAttribute('disabled');
      } else {
        // else set the activity element's 'disabled' property to false 
        checkboxes[i].setAttribute('disabled', false);
      }
    }
  }
  // close activites event listener
});

// ==== Payment ====
// select the credit card div
const credit = $('#credit-card');
// select the payPal div
const payPal = $(credit).next();
// select the Bitcoin div
const bitCoin = $(payPal).next();
// select the payment options
const paymentOptions = $('#payment');

// hide the select payment text
$('#payment options:eq(0)').attr('hidden', true);
// Hide the “Select Payment Method” `option` so it doesn’t show up in the drop down menu.
$("#payment").val($("#payment option:first").hide());
// listen for changes on the payment dropdown
$(paymentOptions).change(function (e) {
  // 'this' refers to the DOM element, it then sends the value result, which we use below (val)
  determinePaymentFunction($(this).val());
});

function determinePaymentFunction(val) {
  if (val === "credit card") {
    $('#payment option:eq(1)').prop('selected', true);
    $(credit).show();
    $(payPal).hide();
    $(bitCoin).hide();
  } else if (val === "paypal") {
    $('#payment option:eq(2)').prop('selected', true);
    $('#credit-card').attr('hidden', true);
    $(payPal).show();
    $(credit).hide();
    $(bitCoin).hide();
  } else if (val === "bitcoin") {
    $('#payment option:eq(3)').prop('selected', true);
    $('#credit-card').attr('hidden', true);
    $(bitCoin).show();
    $(payPal).hide();
    $(credit).hide();
  }
};
// call the function, pass the credit card parameter
determinePaymentFunction('credit card');

// ==== Form Validation and Validation Messages ====

// Name Test Function
const $nameField = $('#name');
$nameField.on('keyup keypress blur', function (event) {
  // only call the nameCheck function if something happens within the specified field
  nameCheck();
});

function nameCheck() {
  const $nameVal = $('#name').val();
  // console.log('name get value'); 
  if ($nameVal === '') {
    // add an error indicator
    $nameField.css({
      border: "2px solid red"
    });
    // add error message
    $('#name-error').html('<span>Please enter a valid name</span>');
    return false;
  } else {
    // criteria are met, set positive colour
    $nameField.css({
      border: "2px solid aquamarine"
    });
    $('#name-error').html('');
    return true;
  }
}

// Email Test Function
const $emailField = $('#mail');
$emailField.on('keyup keypress blur', function (event) {
  // only call the emailCheck function if something happens within the specified field
  emailCheck();
});

// The condition I'm testing:
// Email field must be a validly formatted e-mail address (you don't have to check that it's a real e-mail address, just that it's formatted like one: dave@teamtreehouse.com for example.
function emailCheck() {
  const $emailVal = $('#mail').val();

  // email regex
  const $emailRegex = /^[^@.]+@[^@.]+\.[^@.]+$/i;
  // if is correct, run this
  // the test() method tests for a match in a string

  // test for acceptable length
  if ($emailVal.length === 0) {
    // criteria are met, set error colour
    $emailField.css('border', '2px solid red');
    $('#email-error').html('<span>Please enter something in this field</span>');
    return false;
  } else if ($emailRegex.test($emailVal) === true) {
    // criteria are met, set error colour
    $emailField.css('border', '2px solid aquamarine');
    $('#email-error').html('');
    return true;
  } else {
    $emailField.css('border', '2px solid red');
    $('#email-error').html('<span>Please enter a valid email</span>');
    return false;
  }
}

// Activity test function
// The condition I'm testing: user has selected at least one activity
const $activitySec = $('.activities input');
$activitySec.on('change', function (event) {
  // only call the activityCheck function if something happens within the specified field
  activityCheck();
});

function activityCheck() {
  let $checkboxes = $('.activities input:checked');
  let $checkboxesFields = $('fieldset.activities label');
  if ($checkboxes.length > 0) {
    $checkboxesFields.css('border', '2px solid aquamarine');
    // append a positive message, saying you've completed successfully
    $('#activity-success').html("You've selected the activities correctly");
    $('#activity-error').html('');
    return true;
  } else {
    $checkboxesFields.css('border', '2px solid red');
    $('#activity-success').html('');
    $('#activity-error').html('<span>Please select at least one activity</span>');
    return false;
  }
}

// Credit Card Number (only validated if the payment method is “credit card”) 
// Card Length Function
const $cardField = $('#cc-num');
$cardField.on('keyup keypress blur', function (event) {
  // only call the function if something happens within the specified field
  cardLength();
});

// Test condition: Credit Card field requires number between 13 and 16 digits.
function cardLength() {
  // const that selects the cc-num field
  const $ccVal = $('#cc-num').val();
  // regex for 13 - 16 digits
  const $regex = /^[0-9]{13,16}$/;
  // test if the digits entered into the field match the regex
  // console.log($regex.test( $ccVal )); 
  if ($regex.test($ccVal) === true) {
    $cardField.css('border', '2px solid aquamarine');
    $('#number-error').html('');
    return true;
  } else {
    $cardField.css('border', '2px solid red');
    $('#number-error').html("Please enter a valid credit card number");
    return false;
  }
}

// Zip Code Function
const $zipField = $('#zip');
$zipField.on('keyup keypress blur', function (event) {
  // only call the function if something happens within the specified field
  cardZip();
});

function cardZip() {
  // select the zip code
  const $zipVal = $('#zip').val();
  // Test condition: Zip Code field requires 5-digit number
  const $regex = /^[0-9]{5}$/;
  // /\b\d{5}\b/; 

  if ($regex.test($zipVal) === true) {
    $zipField.css('border', '2px solid aquamarine');
    $('#zip-error').html('');
    return true;
  } else {
    $zipField.css('border', '2px solid red');
    $('#zip-error').html("Please enter a valid zip code");
    return false;
  }
}

// CVV number function
const $cvvField = $('#cvv');
$cvvField.on('keyup keypress blur', function (event) {
  // only call the function if something happens within the specified field
  cardCVV();
});

function cardCVV() {
  // select the value of the entered CVV
  const $cvvVal = $('#cvv').val();
  // Test condition: CVV field requires 3-digit number
  const $regex = /^[0-9]{3}$/;
  if ($regex.test($cvvVal) === true) {
    $cvvField.css('border', '2px solid aquamarine');
    $('#cvv-error').html('');
    return true;
  } else {
    $cvvField.css('border', '2px solid red');
    $('#cvv-error').html("Please enter a valid CVV number");
    return false;
  }
}


// ==== Form Submission ====
// With the individual validation functions complete, a single master validation function can now be created to test them all with a single function call. 
$('button').click(function (e) {
  // run all my validator functions
  nameCheck();
  emailCheck();
  activityCheck();
  cardLength();
  cardZip();
  cardCVV();

  // select the payment options
  const $paymentOptions = $('#payment option');
  // run if else for just the credit card option
  if ($paymentOptions.val() === 'credit card' || $paymentOptions.val() === 'select_method') {
    if (nameCheck() && emailCheck() && activityCheck() && cardLength() && cardZip() && cardCVV()) {
      $('form').submit();
      alert('Thanks for registering, see you there!');
    } else {
      e.preventDefault();
    }
  } else {
    if (nameCheck() && emailCheck() && activityCheck()) {
      $('form').submit();
      alert('Thanks for registering, see you there!');
    } else {
      e.preventDefault();
    }
  }
});