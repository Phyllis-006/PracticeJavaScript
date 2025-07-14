function submitFeedback(){
    // Fetch the user information
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const experience = document.getElementById('userExperience').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    
    alert("Thank you for your valuable feedback");

    // displays the details on the webpage to inform the user about the information entered.
    document.getElementById('userName').innerHTML = name;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;    
    document.getElementById('userExperience').innerHTML = experience;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    // modifies the CSS style property 'display' of that element, setting it to 'block',....... 
    // which alters its visibility on the webpage to be displayed as a block-level element.
    document.getElementById('userInfor').style.display = 'block';
}
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
 // adds an event listener to the entire document, listening for any keydown event. When the event occurs,
 //  it checks if the pressed key is 'Enter'. If it is, it calls the function submitFeedback(), executing 
 // the feedback submission functionality.
document.addEventListener('keydown', function(event) {
   if (event.key === 'Enter') {
     submitFeedback();
   }
 });