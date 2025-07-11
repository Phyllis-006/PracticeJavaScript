let count = 0;
 // function that increment the count variable by 1
function increaseCount() {
    count++;
    // displays the count (called function)
    displayCount();
    // check out value and display messages.
    checkCountValue();
}

// function that checks the value of the followers and displays an alert message.

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

function displayCount(){
    document.getElementById('countDisplay').innerHTML = count; // display the count in HTML
}
 // function for reset COunt
 function resetCount(){
    alert("Followers Count Has Been Reset")
 }