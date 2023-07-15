const questions = [
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 2x + 3<br>g(x) = x^2<br>Tentukan nilai dari (f o g)(2)",
        answer: "11",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = sin(x)<br>g(x) = 2x<br>Tentukan nilai dari (g o f)(Math.PI / 6)",
        answer: "1",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = x^3<br>g(x) = Math.sqrt(x)<br>Tentukan nilai dari (f o g)(4)",
        answer: "8",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3-4x<br>g(x) = x^2 + 4 - 1<br>Tentukan nilai dari (f o g)(x)",
        answer: "10",
    }
];

let playerName = "";
let playerClass = "";
let score = 0;
let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");
const checkBtn = document.getElementById("checkBtn");
const retryBtn = document.getElementById("retryBtn");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const gameContainer = document.querySelector(".gamepage");

function checkAnswer() {
    const userAnswer = answerElement.value.trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        resultElement.innerHTML = "Jawaban benar!";
        score += 10;
        nextBtn.style.display = "block";
    } else {
        resultElement.innerHTML = "Jawaban salah. Coba lagi.";
        currentQuestionIndex++;
        showQuestion();
    }

    scoreElement.innerHTML = "Skor Akhir: " + score;

    checkBtn.disabled = true;
    retryBtn.style.display = "block";
}

function goToNextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = "Permainan selesai!";
        answerElement.style.display = "none";
        checkBtn.style.display = "none";
        scoreElement.style.display = "block";
        scoreElement.innerHTML = "Skor Akhir: " + score;
        nextBtn.style.display = "none";
    }
}

function showQuestion() {
    retryBtn.style.display = "none";
    nextBtn.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        questionElement.innerHTML = "Nama: " + playerName + "<br>Kelas: " + playerClass + "<br><br>" + questions[currentQuestionIndex].question;
        answerElement.value = "";
        resultElement.innerHTML = "";
        checkBtn.disabled = false;
        scoreElement.style.display = "none";
    } else {
        questionElement.innerHTML = "Permainan selesai!";
        answerElement.style.display = "none";
        checkBtn.style.display = "none";
        scoreElement.style.display = "block";
        scoreElement.innerHTML = "Skor Akhir: " + score;
    }
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    gameContainer.style.display = "block";
    showQuestion();
}

checkBtn.addEventListener("click", checkAnswer);
retryBtn.addEventListener("click", showQuestion);
const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.style.display = "none";
nextBtn.addEventListener("click", goToNextQuestion);
document.getElementById("game-container").appendChild(nextBtn);

const homepage = document.querySelector(".homepage");
const gamepage = document.querySelector(".gamepage");
const mulaiBtn = document.getElementById("mulaiBtn");
const namaInput = document.getElementById("nama");
const kelasInput = document.getElementById("kelas");

function startGame() {
    const nama = namaInput.value.trim();
    const kelas = kelasInput.value.trim();

    if (nama === "" || kelas === "") {
        alert("Masukkan nama dan kelas terlebih dahulu!");
        return;
    }

    homepage.style.display = "none";
    gamepage.style.display = "block";

    playerName = nama;
    playerClass = kelas;

    restartGame();
}

mulaiBtn.addEventListener("click", startGame);
