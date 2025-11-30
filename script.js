// ========================================
// QUIZ APP – FULLY WORKING JAVASCRIPT CODE
// For files named: English_1_Questions.json, Math_3_Questions.json, etc.
// ========================================

let selectedQuestions = [];
let correctCount = 0;
let incorrectCount = 0;
let currentQuestionIndex = 0;

// Mapping: "Subject-Grade" → actual JSON filename
const questionFiles = {
    // English
    "English-1": "english_1_Questions.json",
    "English-2": "english_2_Questions.json",
    "English-3": "english_3_Questions.json",
    "English-4": "english_4_Questions.json",
    "English-5": "english_5_Questions.json",

    // Math
    "Math-1": "math_1_Questions.json",
    "Math-2": "math_2_Questions.json",
    "Math-3": "math_3_Questions.json",
    "Math-4": "math_4_Questions.json",
    "Math-5": "math_5_Questions.json",
    "Math-6": "math_6_Questions.json",
    "Math-7": "math_7_Questions.json",
    "Math-8": "math_8_Questions.json",


    // Science
    "Science-1": "science_1_Questions.json",
    "Science-2": "science_2_Questions.json",
    "Science-3": "science_3_Questions.json",
    "Science-4": "science_4_Questions.json",
    "Science-5": "science_5_Questions.json",

    // History
    "History-1": "history_1_Questions.json",
    "History-2": "history_2_Questions.json",
    "History-3": "history_3_Questions.json",
    "History-4": "history_4_Questions.json",
    "History-5": "history_5_Questions.json"
};

function generateQuestions() {
    const subject = document.getElementById("subject").value.trim();
    const grade = parseInt(document.getElementById("grade").value);

    if (!subject || isNaN(grade) || grade < 1 || grade > 8) {
        alert("Please select a valid subject and grade (1–8).");
        return;
    }

    // Reset quiz state
    selectedQuestions = [];
    correctCount = 0;
    incorrectCount = 0;
    currentQuestionIndex = 0;

    document.getElementById("correctAnswers").innerText = "0";
    document.getElementById("incorrectAnswers").innerText = "0";
    document.getElementById("result").innerHTML = "";
    document.getElementById("question").innerText = "Loading questions...";
    document.getElementById("Next").disabled = true;

    const key = `${subject}-${grade}`;
    const filename = questionFiles[key];

    if (!filename) {
        document.getElementById("question").innerText = "";
        alert(`No questions available for ${subject} Grade ${grade} yet.`);
        return;
    }

    // Load the JSON file
    fetch(filename)
        .then(response => {
            if (!response.ok) {
                throw new Error(`${filename} not found (404 or server error)`);
            }
            return response.json();
        })
        .then(data => {
            if (!Array.isArray(data) || data.length === 0) {
                throw new Error("Question file is empty or invalid.");
            }
            selectedQuestions = data;
            displayQuestion();
        })
        .catch(err => {
            console.error("Load error:", err);
            document.getElementById("question").innerText = "Failed to load questions";
            alert("Error: Could not load questions.\n\n" + err.message);
        });
}

function displayQuestion() {
    if (currentQuestionIndex >= selectedQuestions.length) {
        document.getElementById("question").innerHTML = `
            <strong>Quiz Complete!</strong><br>
            Final Score: <strong>${correctCount} / ${selectedQuestions.length}</strong>
        `;
        document.getElementById("Next").disabled = true;
        return;
    }

    const q = selectedQuestions[currentQuestionIndex];

    document.getElementById("question").innerText = q.question;
    document.getElementById("textA").innerText = q.answers[0];
    document.getElementById("textB").innerText = q.answers[1];
    document.getElementById("textC").innerText = q.answers[2];
    document.getElementById("textD").innerText = q.answers[3];

    // Reset UI
    document.getElementById("result").innerHTML = "";
    document.getElementById("Next").disabled = true;

    ["A", "B", "C", "D"].forEach(letter => {
        const btn = document.getElementById(`text${letter}`);
        btn.disabled = false;
        btn.style.backgroundColor = "";
        btn.style.color = ""; // reset text color if needed
    });
}

function handleClick(option) {
    const q = selectedQuestions[currentQuestionIndex];
    const selectedAnswer = q.answers[option.charCodeAt(0) - 65];
    const correctAnswer = q.correctAnswer;

    // Disable all options
    ["A", "B", "C", "D"].forEach(l => {
        document.getElementById(`text${l}`).disabled = true;
    });

    if (selectedAnswer === correctAnswer) {
        document.getElementById("result").innerHTML = '<span style="color:green;font-weight:bold">Correct!</span>';
        correctCount++;
        document.getElementById("correctAnswers").innerText = correctCount;
        document.getElementById(`text${option}`).style.backgroundColor = "lightgreen";
    } else {
        document.getElementById("result").innerHTML = '<span style="color:red;font-weight:bold">Incorrect!</span>';
        incorrectCount++;
        document.getElementById("incorrectAnswers").innerText = incorrectCount;
        document.getElementById(`text${option}`).style.backgroundColor = "lightcoral";

        // Highlight correct answer
        const correctIdx = q.answers.indexOf(correctAnswer);
        const correctLetter = String.fromCharCode(65 + correctIdx);
        document.getElementById(`text${correctLetter}`).style.backgroundColor = "lightgreen";
    }

    document.getElementById("Next").disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

// ========================================
// EVENT LISTENERS – Run when page loads
// ========================================
document.addEventListener("DOMContentLoaded", () => {
    // Answer buttons
    document.getElementById("textA").onclick = () => handleClick("A");
    document.getElementById("textB").onclick = () => handleClick("B");
    document.getElementById("textC").onclick = () => handleClick("C");
    document.getElementById("textD").onclick = () => handleClick("D");

    // Next button
    document.getElementById("Next").onclick = nextQuestion;

    // Bonus: Press Enter to go next
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !document.getElementById("Next").disabled) {
            nextQuestion();
        }
    });
});