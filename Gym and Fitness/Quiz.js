const quizForm = document.getElementById("quiz-form");
quizForm.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData(quizForm);
    let score = 0;
    formData.forEach((value, key) => {
        if (key.startsWith("q")) {
            if (value === "b") {
                score++;
            }
        }
    });
    const result = document.createElement("div");
    result.innerHTML = `You scored ${score} out of ${formData.getAll("q1").length}`;
    quizForm.appendChild(result);
});
