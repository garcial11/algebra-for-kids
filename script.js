// Function to check if the answer is correct
function checkAnswer(correctAnswer, inputId, feedbackId) {
    const userAnswer = document.getElementById(inputId).value;
    const feedback = document.getElementById(feedbackId);

    if (parseInt(userAnswer) === correctAnswer) {
        feedback.textContent = "Correct! Great job!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Try again! Keep going!";
        feedback.style.color = "red";
    }
}

