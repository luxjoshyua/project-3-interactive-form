/* ==== Set Focus on the First Text Field ==== */
$("label[for='name']").focus();

/* ==== "Job Role" Section ==== */
// hide 'Other' input field if JS isn't enabled
$('#other-title').hide();

// ==== T-Shirt Info Section ====
// Hide the select theme option element in the design menu
$('#design>option:first').hide();

// initially when the page loads, I don't want the placeholder text 'Select theme' to show
// when I select it and set to hide, it still shows initially and then hides when user interacts with that select field




// Update the “Color” field to read “Please select a T-shirt theme”.
const $colorField = $('select#color'); 
const $updateColorFieldText = ('<option>Please select a T-Shirt theme</option>'); 
$colorField.prepend($updateColorFieldText); 
$('select#color>option:first').attr('selected', true);

// Hide the colors in the “Color” drop down menu.
// $('#color option').hide(); 


// 2. Attach a 'change' event listener to the 'Design' menu
$('#design').change(function () {
  // if the value is js puns, run this code
  if ($("#design").val() === "js puns") {
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
  else if ($("#design").val() === "heart js")  {
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




/* Step Four - Activity Section

- setup all your constants here that are going to be used for this section
    Step Four Part One: Creating an element to display the total activity cost
    - Create a DOM element like a <span></span> or <div></div> and store it in a global variable

    - Append the new element to the .activity section

    - You can check the elements tab in the Chrome DevTools to check that your <span></span>
    element is in the DOM

    - Create a global variable to store total activity cost - initially set to 0 - don't use 
    const since you want to update this as needed


    Step Four Part Two: Listening for changes in the activity section
    - Create a change event listener for the activity section
      - Inside the event listener:
        - Create a variable to store the input element that was just clicked - event.target is
        helpful here
        - Create a variable to store the text content of the parent elabel element of the input
        element that was just clicked - the above variable combined with the .parent() and
        .text() methods will be helpful here
        - Log out the variable storing the label's text content to ensure you're capturing the right info


        
*/





/* Miscellaneous junk code
// $( "option[value='other']" ).hide(); 

// $('#color option:first').before
// const $hideTColours = $('#color > option'); 
// $hideTColours.hide(); 

$('#design option:contains(Select Theme)').attr('hidden', true); // also works
$('#design option:contains(Select Theme)').hide(); 
$('#design option:first-of-type').attr('hidden', true);




 */