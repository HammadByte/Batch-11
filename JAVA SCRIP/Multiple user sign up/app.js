const signupForm = document.getElementById('signup-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const message = document.getElementById('message');

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (username.value && email.value && password.value) {
    // Here you can add your code to save the user data to your database
    // For example:
    const userData = {
      username: username.value,
      email: email.value,
      password: password.value
    };
    saveUser(userData);
    message.textContent = 'User signed up successfully!';
    message.style.color = 'green';
    signupForm.reset();
  } else {
    message.textContent = 'Please fill in all fields';
    message.style.color = 'red';
  }
});

function saveUser(userData) {
  // Here you can add your code to save the user data to your database
  // For example:
  fetch('https://your-api-url.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}