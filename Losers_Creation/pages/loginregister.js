function toggleForm() {
  var loginForm = document.getElementById("loginForm");
  var registerForm = document.getElementById("registerForm");
  var switchMessage = document.getElementById("switchMessage");

  if (loginForm.style.display === "none") {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    switchMessage.innerHTML =
      "Don't have an account? <a href='#' onclick='toggleForm()'>Register here</a>.";
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    switchMessage.innerHTML =
      "Already have an account? <a href='#' onclick='toggleForm()'>Login here</a>.";
  }
}

function login() {
  var username = document.getElementById("loginUsername").value;
  var password = document.getElementById("loginPassword").value;
  // Perform login logic here
  console.log("Login with username:", username, "and password:", password);
  // Redirect to dashboard or perform other actions
}

function register() {
  var username = document.getElementById("registerUsername").value;
  var password = document.getElementById("registerPassword").value;
  // Perform registration logic here
  console.log("Register with username:", username, "and password:", password);
  // Redirect to dashboard or perform other actions
}
