document.querySelector("button").addEventListener("click", function () {
  let name = document.querySelector('#fullname').value;
  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;
  
  let valid = true;

  document.querySelectorAll('input').forEach(input => {
    input.classList.remove('error');
  });

  if (!name) {
    document.querySelector('#fullname').classList.add('error');
    valid = false;
  }
  if (!email) {
    document.querySelector('#email').classList.add('error');
    valid = false;
  }
  if (!password) {
    document.querySelector('#password').classList.add('error');
    valid = false;
  }

  if (!valid) {
    alert("Please fill in all fields.");
    return;
  }

  let user = {
    name: name,
    email: email,
    password: password
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Registration successful!");

  window.location.href = "login.html";
});
