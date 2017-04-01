// By: Ryan Ripperger
var answer1 = 41660;
var answer2 = 64;
var answer3 = 63;
var perc1 = 0;
var perc2 = 0;
var perc3 = 0;
var finalPercent = 0;

function saveAnswer1()
{
  sessionStorage.setItem("test1Entered", document.getElementById("test1Answer").value);
  alert("Answer Saved");
  window.location.href="test2.html";

}

function saveAnswer2()
{
  sessionStorage.setItem("test2Entered", document.getElementById("test2Answer").value);
    alert("Answer Saved");
    window.location.href="test3.html";

}

function saveAnswer3()
{
  sessionStorage.setItem("test3Entered", document.getElementById("test3Answer").value);
    alert("Answer Saved");
    window.location.href="results.html";
}

function validateAnswer1()
{
  var input1 = document.getElementById("test1Answer").value;
  var userSpace = input1.includes(" ");

  if (input1.length < 1) {
    document.getElementById("answerError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if(isNaN(input1))
  {
    document.getElementById("answerError").innerHTML="Answer must be a number.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if (userSpace == true) {
    //Searches the string to look for a space and returns an error if true
    document.getElementById("answerError").innerHTML="Answer cannot contain spaces";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
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

function validateAnswer2()
{
  var input2 = document.getElementById("test2Answer").value;
  var userSpace = input2.includes(" ");

  if (input2.length < 1) {
    document.getElementById("answerError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if(isNaN(input2)) {
    document.getElementById("answerError").innerHTML="Answer must be a number.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if (userSpace == true) {
    //Searches the string to look for a space and returns an error if true
    document.getElementById("answerError").innerHTML="Answer cannot contain spaces";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
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

function validateAnswer3()
{
  var input3 = document.getElementById("test3Answer").value;
  var userSpace = input3.includes(" ");

  if (input3.length < 1) {
    document.getElementById("answerError").innerHTML="Answer must be at least 1 character.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if(isNaN(input3)) {
    document.getElementById("answerError").innerHTML="Answer must be a number.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
  }

  else if (userSpace == true) {
    //Searches the string to look for a space and returns an error if true
    document.getElementById("answerError").innerHTML="Answer cannot contain spaces";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("answerGroup").classList.add("has-error");
    //Toggle has-success to off
    document.getElementById("answerGroup").classList.remove("has-success");
  }

  else {
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

  checkAnswer1();
  checkAnswer2();
  checkAnswer3();
  calcPercent();
  document.getElementById("percent").innerHTML = finalPercent + "%";
}

function checkAnswer1()
{
  if (sessionStorage.getItem("test1Entered") == answer1)
  {
    document.getElementById("ans1").innerHTML = '<span class="success"> Success! </span>';
    perc1 = 1;
  }

  else
  {
    document.getElementById("ans1").innerHTML = '<span class="failed"> Failed ): </span>';
  }
}

function checkAnswer2()
{
  if (sessionStorage.getItem("test2Entered") == answer2)
  {
    document.getElementById("ans2").innerHTML = '<span class="success"> Success! </span>';
    perc2 = 1;
  }

  else
  {
    document.getElementById("ans2").innerHTML = '<span class="failed"> Failed ): </span>';
  }
}

function checkAnswer3()
{
  if (sessionStorage.getItem("test3Entered") == answer3)
  {
    document.getElementById("ans3").innerHTML = '<span class="success"> Success! </span>';
    perc3 = 1;
  }

  else
  {
    document.getElementById("ans3").innerHTML = '<span class="failed"> Failed ): </span>';
  }
}

function calcPercent()
{
  finalPercent = (perc1 + perc2 + perc3)/3;
  finalPercent = finalPercent * 100;
  if (finalPercent == 100)
  {
    document.getElementById("successImage").innerHTML = '<img src="https://img.memesuper.com/97021af1fdaa01ac760c52b97013d40a_success-kid-meme-on-memegen-memes-on-success_512-512.jpeg" alt="Success meme" style="width: 250px; height: 250px">'
  }
}
