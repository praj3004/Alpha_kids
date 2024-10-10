let timer; // Variable to store the timer
let timeSpent = 0; // Variable to store the time spent
const displayElement = document.getElementById('timerDisplay'); // Make sure this ID exists in your HTML

// Start the timer
function startTimer(duration) {
    let timerDuration = duration;
    timer = setInterval(() => {
        if (timerDuration <= 0) {
            clearInterval(timer);
            // Send email when timer ends
            sendEmail();
        } else {
            timeSpent++; // Increment the time spent
            const minutes = Math.floor(timerDuration / 60);
            const seconds = timerDuration % 60;

            // Update the display element
            if (displayElement) { // Check if the element exists
                displayElement.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            }

            timerDuration--;
        }
    }, 1000);
}

// Function to send an email with time spent
function sendEmail() {
    const email = 'recipient-email@example.com'; // Replace with the user's email
    const data = { email, timeSpent };

    fetch('http://localhost:3000/send-email', { // Make sure this matches your server's endpoint
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => {
        if (response.ok) {
            console.log('Email sent successfully!');
        } else {
            console.error('Error sending email:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Function called upon login success
function onLoginSuccess(timerDuration) {
    startTimer(timerDuration); // Start the timer with the duration provided
}

// Event listener for the document ready state
document.addEventListener('DOMContentLoaded', () => {
    // Initialize or set up any other components if needed
});
