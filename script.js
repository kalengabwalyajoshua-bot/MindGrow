function startTest() {
    let subject = document.getElementById("subject").value;
    let box = document.getElementById("questionBox");

    if (subject === "") {
        box.innerHTML = "⚠️ Please select a subject.";
        return;
    }

    box.innerHTML = `
        <h3>${subject.toUpperCase()} Question</h3>
        <p>What is 2 + 2?</p>
        <button onclick="checkAnswer(4)">4</button>
        <button onclick="checkAnswer(5)">5</button>
    `;
}

function checkAnswer(answer) {
    let box = document.getElementById("questionBox");

    if (answer === 4) {
        box.innerHTML += "<p>✅ Correct! You're doing well.</p>";
    } else {
        box.innerHTML += "<p>❌ Wrong. You need more practice.</p>";
    }
}
