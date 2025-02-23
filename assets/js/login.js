async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
}

async function checkLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    const storedUsername = "ADminDL";
    const storedHashedPassword = "a66e55acb168b9730869fccf6f5ae86e16c3014e2ae789729f8af39ef8d9e1de"; 

    const enteredHashedPassword = await hashPassword(password);

    if (username === storedUsername && enteredHashedPassword === storedHashedPassword) {
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('wrapper').style.display = 'block';
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        errorMessage.textContent = "Invalid username or password!";
    }
}

if (localStorage.getItem('isLoggedIn') === 'true') {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('wrapper').style.display = 'block';
}