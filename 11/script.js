function handleEye(id1, id2) {
  var img1 = document.getElementById(id1);
  var img2 = document.getElementById(id2);

  img1.classList.add("d-none");
  img2.classList.remove("d-none");

  var input = document.getElementById('input-password');

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

function validate() {
  var email = document.getElementById("email");
  var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var error = document.getElementById('error-message');

  if (!regex.test(email.value)) {
    error.style.display = 'block';
    email.style.borderColor = '#ED3A5A';
  } else {
    error.style.display = 'none';
    email.style.borderColor = ' #E2E8F0';
  }
}