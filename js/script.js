/* Step One 
  1. Target the name field and set its 'focus' attribute to true. The handy jQuery '.attr()' method will be helpful here
*/


/* Step Two - Add an 'Other' option to the 'Job Role' section

  This is the one and only section of the project where you will have to make changes directly in the index.html file

  1. In the index.html file, just below the 'Job Role' 'select' element, create an `input` element,
  set its `type` attribute to "text", set its `name` attribute to "job_role_other", set its 
  `placeholder` attribute to "Other", and give it an `id` attribute of your choosing so you can 
  easily target this element in your js file

  2. In your js file, target the 'Other' input field, and hide it initially, so that it will
  display if js is disabled, but be hidden initially with JS.

*/

  /* Step Three - TShirt Section
  1. Target the 'Select Theme' `option` tag from the 'Design' menu, and set its `hidden` attribute to true

  2. Attach a 'change' event listener to the 'Design' menu

  3. Inside the body of the event listener, add a conditional that checks the `value` of the 'design' element.

  4. If the 'Design' element's value === 'js puns'
    - Set the `selected` attribute of the 'tomato' option to false
    - Set the `selected` attribute of the 'cornflower blue' option to true
    - Set the three 'heart js' options to hide()
    - Set the three 'js puns' options to show()
  
  5. If the 'Design' element's value === 'heart js'
  - Set the `selected` attribute of the 'cornflower blue' option to false
  - Set the `selected` attribute of the 'tomato' option to true
  - Set the three 'js puns' options to hide()
  - Set the the three 'heart js' options to show()
*/


/* Step Four - Activity Section
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



