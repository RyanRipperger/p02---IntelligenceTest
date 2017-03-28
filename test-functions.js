var answer1 = 41660;
var answer2 = 64;
var answer3 = 63;
function saveAnswer1()
{
  sessionStorage.test1User = document.getElementById("test1Answer").value;
  localStorage.answer1 = 41660;
  //var test1Entered = document.getElementById("test1Answer").value;
  alert("Answer Saved");
}

function saveAnswer2()
{
    sessionStorage.setItem("test2Entered") = document.getElementById("test2Answer").value;
    alert("Answer Saved");
}

function saveAnswer3()
{
    sessionStorage.setItem("test3Entered") = document.getElementById("test3Answer").value;
    alert("Answer Saved");
}

function validateAnswer()
{
  var test1Entered = document.getElementById("test1Answer").value;

  if (test1Entered.length < 1) {
    document.getElementById("answerError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else
  {
    //Remove error message
    document.getElementById("answerError").innerHTML="";
    //Turn the username items green
    document.getElementById("answerGroup").classList.add("has-success");
    //Toggle has-error to off
    document.getElementById("answerGroup").classList.remove("has-error");
    //Toggle off error message
  }
}

function showResults()
{
  alert("Answer 1: " + checkAnswer1());
}

function checkAnswer1()
{
  var test1Submit = sessionStorage.getItem("test1User");
  if (test1Submit == answer1)
  {
    alert("success");
  }

  else
  {
    alert("failed");
  }
}

/* function checkAnswer2()
{
  var q2 = new boolean(false);
  if (test2Entered == answer2)
  {
    q2 = "success";
  }

  else
  {
    q2 = "failed";
  }
}


function checkAnswer3()
{
  var q3 = "failed";
  if (test3Entered == answer3)
  {
    q3 = "success";
  }

  else
  {
    q3 = "failed";
  }
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
