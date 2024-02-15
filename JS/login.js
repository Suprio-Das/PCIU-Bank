document.getElementById('btn-submit').addEventListener('click', function(){
    
    // getting email from email field
    const emailField = document.getElementById('user-email');
    const emailFieldText = emailField.value;

    // getting password from password field
    const passwordField = document.getElementById('user-password');
    const passwordFieldText = passwordField.value;

    // validating user
    if(emailFieldText === 'goriberbank@pciu.com' && passwordFieldText === 'password'){
        // Redirect to "bank.html" when the credentials are correct
        document.location.href = 'bank.html',true;

    } else {
        // Display an alert or perform other actions for invalid credentials
        alert('Wrong input. Please try again.');
    }
})