const questions = [
    {
        question: "<br><br><br>PENTING!!<br><br>1. Untuk menjawab pertanyaan yang jawabannya berupa pertidaksamaan, jawablah seperti ini -3x^2-2x+8 bukan -3x^2 - 2x + 8 ( tidak dispasi setiap bilangan) agar dapat terdeteksi oleh sistem.<br><br>2. Tanda ^ artinya untuk melambangkan pangkat.<br><br>3. Ketika Mendengar suara koin 'ting' artinya jawaban Anda Benar.<br><br>4. Ketik 'Iya' jika sudah paham.",
        answer: "Iya",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3 - 4x<br>g(x) = x^2 + 4x - 1<br>Tentukan nilai dari (f o g)(x)",
        answer: "-4x^2-16x+7",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3 - 4x<br>g(x) = x^2 + 4x - 1<br>Tentukan nilai dari (f o g)(5)",
        answer: "-173",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = x^2 - 3x + 1<br>g(x) = 2x - 3<br>Tentukan nilai dari (g o f)(x)",
        answer: "2x^2-6x-1",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = x^2 - 3x + 1<br>g(x) = 2x - 3<br>Tentukan nilai dari (g o f)(-3)",
        answer: "35",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3x + 1<br>g(x) = -3x + 3<br>Tentukan nilai dari (f o g)(x)",
        answer: "-9x+10",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3x + 1<br>g(x) = -3x + 3<br>Tentukan nilai dari (f o g)(5)",
        answer: "-35",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3x - 4<br>g(x) = 2x^2 + 4x - 5<br>Tentukan nilai dari (f o g)(x)",
        answer: "6x^2+12x-19",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = 3x - 4<br>g(x) = 2x^2 + 4x - 5<br>Tentukan nilai dari (f o g)(-1)",
        answer: "-25",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = x^2<br>g(x) = x + 1<br>Tentukan nilai dari (g o f)(x)",
        answer: "x^2+1",
    },
    {
        question: "Diberikan fungsi-fungsi berikut:<br>f(x) = x^2<br>g(x) = x + 1<br>Tentukan nilai dari (g o f)(0)",
        answer: "1",
    },
];

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
        resultElement.innerHTML;
        score += 10;
        playCoinSound();
    } else {
        resultElement.innerHTML;
    }

    currentQuestionIndex++;
    showQuestion();
}

function showQuestion() {
    retryBtn.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        questionElement.innerHTML = questions[currentQuestionIndex].question;
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
nextBtn.textContent = "Next"
nextBtn.style.display = "none";
nextBtn.addEventListener("click", showQuestion);
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
    playBacksound();
}

mulaiBtn.addEventListener("click", startGame);

function playCoinSound() {
    const coinSound = new Audio('coin-sound.mp3');
    coinSound.play();
}

function playBacksound() {
    const backsound = document.getElementById("backsound");
    backsound.play();
}