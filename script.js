// // Function to toggle between login and sign-up form
// function toggleForm() {
//     const loginForm = document.getElementById('login-form');
//     const signupForm = document.getElementById('signup-form');

//     // Toggle the hidden class to show/hide forms
//     loginForm.classList.toggle('hidden');
//     signupForm.classList.toggle('hidden');
// }

// // Function to handle login form submission
// function login(event) {
//     event.preventDefault(); // Prevent page reload
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     // Add authentication logic here (e.g., check credentials)
//     console.log('Logging in with:', { email, password });

//     // Simulate successful login (you can replace this with actual authentication logic)
//     if (email && password) { // Example condition for demonstration
//         alert("Login successful!"); // For demonstration purposes
//         // Redirect to welcome page
//         window.location.href = 'welcome.html';
//     } else {
//         alert("Login failed! Please check your credentials.");
//     }
// }

// // Function to handle sign-up form submission
// function signUp(event) {
//     event.preventDefault(); // Prevent page reload
//     const username = document.getElementById('signup-username').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     // Add registration logic here (e.g., save user info)
//     console.log('Signing up with:', { username, email, password });

//     // Simulate successful sign-up (you can replace this with actual registration logic)
//     if (username && email && password) { // Example condition for demonstration
//         alert("Sign-up successful!"); // For demonstration purposes
//         // Redirect to welcome page
//         window.location.href = 'welcome.html';
//     } else {
//         alert("Sign-up failed! Please fill in all fields.");
//     }
// }
// / // Function to toggle between login and sign-up form
// function toggleForm() {
//     const loginForm = document.getElementById('login-form');
//     const signupForm = document.getElementById('signup-form');

//     // Toggle the hidden class to show/hide forms
//     loginForm.classList.toggle('hidden');
//     signupForm.classList.toggle('hidden');
// }

// // Function to handle login form submission
// function login(event) {
//     event.preventDefault(); // Prevent page reload
//     const email = document.getElementById('login-email').value;
//     const password = document.getElementById('login-password').value;

//     // Add authentication logic here (e.g., check credentials)
//     console.log('Logging in with:', { email, password });

//     // Simulate successful login (you can replace this with actual authentication logic)
//     if (email && password) { // Example condition for demonstration
//         alert("Login successful!"); // For demonstration purposes
//         // Redirect to welcome page
//         window.location.href = 'welcome.html';
//     } else {
//         alert("Login failed! Please check your credentials.");
//     }
// }

// // Function to handle sign-up form submission
// function signUp(event) {
//     event.preventDefault(); // Prevent page reload
//     const username = document.getElementById('signup-username').value;
//     const email = document.getElementById('signup-email').value;
//     const password = document.getElementById('signup-password').value;

//     // Add registration logic here (e.g., save user info)
//     console.log('Signing up with:', { username, email, password });

//     // Simulate successful sign-up (you can replace this with actual registration logic)
//     if (username && email && password) { // Example condition for demonstration
//         alert("Sign-up successful!"); // For demonstration purposes
//         // Redirect to welcome page
//         window.location.href = 'welcome.html';
//     } else {
//         alert("Sign-up failed! Please fill in all fields.");
//     }
// }


// Function to handle login form submission
// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent page reload
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Simulate successful login for demonstration purposes
    if (email && password) {
        alert("Login successful!");
        window.location.href = 'welcome.html'; // Replace with your redirection logic
    } else {
        alert("Login failed! Please check your credentials.");
    }
}

// Function to set the parental control timer
function setParentalControl(event) {
    event.preventDefault(); // Prevent form reload

    const parentPassword = document.getElementById('parent-password').value;
    const timerDurationInput = document.getElementById('timer-duration').value;

    // Parse the duration in minutes
    const timerDuration = parseInt(timerDurationInput, 10) * 60; // Convert minutes to seconds

    // Validate inputs
    if (!parentPassword) {
        alert("Please enter a valid parent password.");
        return;
    }

    if (isNaN(timerDuration) || timerDuration <= 0) {
        alert("Please enter a valid timer duration in minutes.");
        return;
    }

    // Save parent's password (for simplicity, we use localStorage here, but in production, use secure storage)
    localStorage.setItem('parentPassword', parentPassword);

    // Start the timer
    alert(`Timer has been set for ${timerDurationInput} minutes.`);
    startTimer(timerDuration);
}

// Function to start the timer
function startTimer(duration) {
    let timer = duration, minutes, seconds;

    const interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        // Format minutes and seconds for display
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // Update page title to show the countdown
        document.title = "Time remaining: " + minutes + ":" + seconds;

        // Console log for debugging purposes
        console.log("Time remaining: " + minutes + ":" + seconds);

        // If timer reaches 0, stop the interval and lock the app
        if (--timer < 0) {
            clearInterval(interval); // Stop the timer
            alert("Time is up! The app will now be locked.");
            lockApp();
        }
    }, 1000);
}

// Function to lock the app when time is up
function lockApp() {
    document.body.innerHTML = '<h2>The app is locked due to time restrictions. Please contact your parent to unlock.</h2>';
}

// Function to toggle between login and signup forms (optional if you need to switch forms)
function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const parentalControlForm = document.getElementById('parental-control-form');

    // Simple toggle between login and parental control forms
    loginForm.classList.toggle('hidden');
    parentalControlForm.classList.toggle('hidden');
}

// Ensure the parental control timer function is bound to the correct form
document.getElementById('parental-control-form').addEventListener('submit', setParentalControl);

// If you have a button to trigger setting the timer, bind it here
const setTimerButton = document.getElementById('set-timer-button'); // Ensure this button exists in your HTML
if (setTimerButton) {
    setTimerButton.addEventListener('click', setParentalControl);
}
