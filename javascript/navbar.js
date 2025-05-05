document.addEventListener("DOMContentLoaded", () => {
  let path = window.location.pathname.includes('luzon') ||
             window.location.pathname.includes('visayas') ||
             window.location.pathname.includes('mindanao')
             ? '../partials/navbar.html'
             : 'partials/navbar.html';

  fetch(path)
      .then(res => res.text())
      .then(data => {
          document.getElementById("navbar").innerHTML = data;

          let loggedInName = getCookie('loggedInName');

          if (loggedInName) {
              const nav = document.querySelector(".nav-links");

              const logoutItem = document.createElement("li");
              const logoutLink = document.createElement("a");
              logoutLink.href = "#";
              logoutLink.textContent = "Logout";
              logoutLink.addEventListener("click", function (e) {
                  e.preventDefault();
                  if (confirm("Are you sure you want to log out?")) {
                      // Clear cookie
                      document.cookie = "loggedInName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                      alert("You have been logged out.");
                      window.location.href = "login.html";
                  }
              });

              logoutItem.appendChild(logoutLink);
              nav.appendChild(logoutItem);
          }
      })
      .catch(err => {
          console.error("Failed to load navbar:", err);
      });
});


function getCookie(name) {
  let match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
}

