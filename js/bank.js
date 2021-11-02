// body backgroud color

// submit Button
document.getElementById('login-submit').addEventListener('click', function () {
//get user Email
    const emailField = document.getElementById('usuer-email');
    const userEmail = emailField.value; 
// get user password
const passwordField = document.getElementById('usuer-password');
const userPassword = passwordField.value;

if(userEmail == 'shaykot@gmail.com' && userPassword == 'selim'){
    window.location.href = 'banking.html';
}

})

