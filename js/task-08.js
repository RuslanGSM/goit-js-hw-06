const loginForm = document.querySelector('form.login-form');
loginForm.addEventListener('submit', function(event) {
event.preventDefault();

const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

if (!emailInput.value || !passwordInput.value) {
    alert('Будь ласка, заповніть всі поля форми')
} else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value
        };
        console.log(formData);
        loginForm.reset();
     }
})
