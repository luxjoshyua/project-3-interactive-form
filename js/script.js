/* ==== Set Focus on the First Text Field ==== */
$("label[for='name']").focus();

/* ==== "Job Role" Section ==== */
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

// ==== T-Shirt Info Section ====
// 1. “Color” drop down menu is hidden until a T-Shirt design is selected.
$("#color").hide();

// 2. Attach a 'change' event listener to the 'Design' menu
$('#design').change(function () {
  // if the value is js puns, run this code
  if ($("#design").val() === "js puns") {
    // show the color options
    $('#color').show();
    // hide the three 'heart js' option elements in the 'Color' drop down menu
    $('#color option[value="tomato"]').hide();
    $('#color option[value="steelblue"]').hide();
    $('#color option[value="dimgrey"]').hide();
    // update the 'Color' field to the first available color
    $('#color option[value="cornflowerblue"]').attr('selected', true);
    // show the three 'js puns' options
    $('#color option[value="cornflowerblue"]').show();
    $('#color option[value="darkslategrey"]').show();
    $('#color option[value="gold"]').show();
  }
  // else if heart js is selected, run this
  else if ($("#design").val() === "heart js") {
    // show the color options
    $('#color').show();
    // hide the three 'js puns' option elements in the 'Color' drop down menu
    $('#color option[value="cornflowerblue"]').hide();
    $('#color option[value="darkslategrey"]').hide();
    $('#color option[value="gold"]').hide();
    // Update to first available color
    $('#color option[value="tomato"]').attr('selected', true);
    // show the three 'I heart' options
    $('#color option[value="tomato"]').show();
    $('#color option[value="steelblue"]').show();
    $('#color option[value="dimgrey"]').show();
  }
  // end if / else statement
});

// ==== Activity Section ====

// .eq(1)
// .eq(2)

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
  const clickedText = event.target;
  // check the value is correct
  console.log(clickedText);

  // save the text content of the input element's parent label element to a variable
  const textOfClicked = clickedText.parentElement.textContent;
  // check the value is correct
  console.log(textOfClicked);

  // The index of the dollar sign ‘$’ in the label text from the variable (that you declared above).
  const dollarIndex = textOfClicked.indexOf('$');
  console.log(dollarIndex);

  // The cost of the activity the was just clicked.
  // I need to find just the cost, which is at the end of the label string
  const costActivity = textOfClicked.slice(dollarIndex + 1);
  console.log(costActivity);

  // Take the cost from the variable above, and convert it to a number, so I can use it later on in calculations
  let parsedCost = parseInt(costActivity);
  // Use typeof to check it's a string and also capturing what we want
  console.log(typeof parsedCost);

  // if else statement that says, if the input element is checked, add its activity cost to the total cost, 
  // otherwise if it's unchecked, subtract its cost from the total
  if (clickedText.checked) {
    totalActivityCost += parsedCost;
    console.log(totalActivityCost);
  } else {
    totalActivityCost = totalActivityCost - parsedCost;
    console.log(totalActivityCost);
  }

  // Finally, set the text of the total cost element (that you created above) equal to the string ‘Total: $’ concatenated with the current value of the total cost variable (that you declared above). 
  activitySpan.textContent = 'Total: $' + totalActivityCost; 
  console.log(activitySpan);

});











/* Miscellaneous junk code
// $( "option[value='other']" ).hide(); 

// $('#color option:first').before
// const $hideTColours = $('#color > option'); 
// $hideTColours.hide(); 

$('#design option:contains(Select Theme)').attr('hidden', true); // also works
$('#design option:contains(Select Theme)').hide(); 
$('#design option:first-of-type').attr('hidden', true);


jQuery way
$($activities).change((event) => {
  // save the input element that was just clicked to a variable
  const clickedText = event.target;
  // check the value is correct
  console.log(clickedText);

  // save the text content of the input element's parent label element to a variable
  const textOfClicked = clickedText.parentElement.textContent;
  // check the value is correct
  console.log(textOfClicked);

  // The index of the dollar sign ‘$’ in the label text from the variable (that you declared above).
  const dollarIndex = textOfClicked.indexOf('$');
  console.log(dollarIndex);

  // The cost of the activity the was just clicked.
  // I need to find just the cost, which is at the end of the label string
  const costActivity = textOfClicked.slice(dollarIndex + 1);
  console.log(costActivity);

  // Take the cost from the variable above, and convert it to a number, so I can use it later on in calculations
  let parsedCost = parseInt(costActivity);
  // Use typeof to check it's a string and also capturing what we want
  console.log(typeof parsedCost);

  // if else statement that says, if the input element is checked, add its activity cost to the total cost, 
  // otherwise if it's unchecked, subtract its cost from the total
  if (clickedText.checked) {
    totalActivityCost += parsedCost;
    console.log(totalActivityCost);
  } else {
    totalActivityCost = totalActivityCost - parsedCost;
    console.log(totalActivityCost);
  }

  // Finally, set the text of the total cost element (that you created above) equal to the string ‘Total: $’ concatenated with the current value of the total cost variable (that you declared above). 
  $activitySpan.textContent = 'Total: $'.concat(totalActivityCost);
  console.log($activitySpan);
});

*/ 