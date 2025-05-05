document.getElementById('loginBtn').addEventListener('click', login);

function login() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPass').value;
    let storedUser = JSON.parse(localStorage.getItem('user'));

    if (!storedUser) {
        alert("No account found. Please register first.");
        return;
    }

    if (email === storedUser.email && password === storedUser.password) {
        alert("Login successful!");
        
        document.cookie = `loggedInName=${storedUser.name}; path=/`;

        window.location.href = 'home.html';
    } else {
        alert("Incorrect email or password.");
    }
}
