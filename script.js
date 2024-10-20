// Function to check answer for the simple equation x + 2 = 5
function checkSimple() {
    const answer = document.getElementById("simpleAnswer").value;
    const feedback = document.getElementById("simpleFeedback");

    if (answer == 3) {
        feedback.textContent = "Correct! You scored 3 goals for Croatia!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again! Remember, x + 2 = 5.";
        feedback.style.color = "red";
    }
}

// Function to check answer for the complex equation 2x + 4 = 12
function checkComplex() {
    const answer = document.getElementById("complexAnswer").value;
    const feedback = document.getElementById("complexFeedback");

    if (answer == 4) {
        feedback.textContent = "Correct! You made 4 assists for Real Madrid!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again! Remember, 2x + 4 = 12.";
        feedback.style.color = "red";
    }
}

