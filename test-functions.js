function test1 ()
{
  var test1Entered = document.getElementById("test1Answer").value;
  var answer1 = 41660; 
}

/*function validateUsername()
{
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  var userSpace = userEntered.includes(" ");
  //Error when the entered Username is less than 6 characters
  if (userEntered.length < 6) {
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("usernameGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

  else if (userSpace == true) {
    //Searches the string to look for a space and returns an error if true
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
    //Toggle has-success to off
    document.getElementById("usernameGroup").classList.remove("has-success");
  }

  else {
    //Remove error message
    document.getElementById("usernameError").innerHTML="";
    //Turn the username items green
    document.getElementById("usernameGroup").classList.add("has-success");
    //Toggle has-error to off
    document.getElementById("usernameGroup").classList.remove("has-error");
    //Toggle off error message
  }
}
*/
