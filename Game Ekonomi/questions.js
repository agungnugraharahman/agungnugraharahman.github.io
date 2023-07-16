// Daftar pertanyaan dan jawaban
const questions = [
    {
      question: "Dalam konteks laporan keuangan, apa istilah yang digunakan untuk menggambarkan akun-akun yang dilaporkan dalam neraca perusahaan?",
      options: ["A. Akun Pengeluaran", "B. Akun Riil", "C. Akun Pendapatan", "D. Akun Modal"],
      correctAnswer: "B"
    },
    {
      question: "Apa istilah yang digunakan untuk menggambarkan akun-akun yang muncul dalam laporan laba/rugi perusahaan?",
      options: ["A. Akun Riil", "B. Akun Modal Saham", "C. Akun Nominal", "D. Akun Utang Usaha"],
      correctAnswer: "C"
    },
    {
        question: "Aktiva (Harta), Utang, dan Modal. Termasuk dalam Akun?",
        options: ["A. Akun Nominal", "B. Akun Beban", "C. Akun Pendapatan", "D. Akun Riil"],
        correctAnswer: "D"
    },
    {
        question: "Pendapatan dan Biaya/Beban. Termasuk dalam Akun?",
        options: ["A. Akun Riil", "B. Akun Nominal  ", "C. Akun Pendapatan", "D. Akun Persediaan"],
        correctAnswer: "B"
    },
    {
        question: "Seluruh kekayaan yang dimiliki perusahaan untuk menjalankan usahanya disebut?",
        options: ["A. Harta/Assets", "B. Modal Saham/Equity  ", "C. Utang/Liabilities", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Aset perusahaan yang bisa dicairkan dalam bentuk uang tunai/habis dipakai kurang dari 1 tahun disebut?",
        options: ["A. Harta/Assets Tetap", "B. Harta/Assets Lancar  ", "C. Modal Saham/Equity", "D. Beban/Expenses"],
        correctAnswer: "B"
    },
    {
        question: "Harta lancar berupa surat berharga yang dimiliki perusahaan untuk diperjualbelikan yang berupa saham/obligasi jangka kurang dari setahun disebut?",
        options: ["A. Harta/Assets Tetap", "B. Surat-surat berharga (marketable securities)  ", "C. Modal Saham/Equity", "D. Utang/Liabilities"],
        correctAnswer: "B"
    },
    {
        question: "Harta lancar berupa piutang / tagihan yang diperkuat dengan promes (surat perjanjian utang piutang) disebut?",
        options: ["A. Wesel tagih (piutang wesel)", "B. Surat-surat berharga (marketable securities)  ", "C. Utang/Liabilities", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Harta lancar berupa piutang / tagihan yang diperkuat dengan promes (surat perjanjian utang piutang) disebut?",
        options: ["A. Wesel tagih (piutang wesel)", "B. Surat-surat berharga (marketable securities)  ", "C. Utang/Liabilities", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Harta lancar berupa tagihan pada pihak lain baik perorangan maupun badan usaha jangka setahun/kurang disebut?",
        options: ["A. Wesel tagih (piutang wesel)", "B. Modal Saham/Equity  ", "C. Piutang", "D. Utang/Liabilities"],
        correctAnswer: "C"
    },
    {
        question: "Harta lancar berupa barang dagangan yang dibeli akan dijual kembali tanpa merubah bentuknya disebut?",
        options: ["A. Persediaan barang dagang", "B. Piutang  ", "C. Modal Saham/Equity", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Harta lancar berupa barang yang dibeli akan dipakai sendiri oleh perusahaan diperkirakan habis dipakai dalam kurang atau setahun disebut?",
        options: ["A. Utang/Liabilities", "B. Modal Saham/Equity ", "C. Piutang", "D. Perlengkapan"],
        correctAnswer: "D"
    },
    {
        question: "Harta lancar berupa beban yang sudah dibayar tetapi belum dirasakan manfaatnya seperti sewa dibayar dimuka iklan DDM disebut?",
        options: ["A. Utang/Liabilities", "B. Piutang ", "C. Beban Dibayar Dimuka", "D. Perlengkapan"],
        correctAnswer: "C"
    },
    {
        question: "Investasi dalam bentuk saham/ obligasi, atau surat berharga lainnya yang masa pemilikannya jangka waktu lebih dari satu tahun disebut?",
        options: ["A. Investasi jangka panjang", "B. Modal Saham/Equity ", "C. Utang/Liabilities", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Harta berwujud yang digunakan untuk operasi perusahaan dan mempunyai masa  manfaat lebih dari satu tahun, seperti tanah, bangunan, mesin-mesin, dan peralatan disebut?",
        options: ["A. Investasi jangka panjang", "B. Beban/Expenses ", "C. Modal Saham/Equity", "D. Harta Tetap"],
        correctAnswer: "D"
    },
    {
        question: "Harta yang tidak mempunyai wujud fisik, tetapi merupakan hak-hak istimewa yang menguntungkan perusahaan dalam menghasilkan pendapatan disebut?",
        options: ["A. Modal Saham/Equity", "B. Harta tak berwujud ", "C. Beban/Expenses", "D. Harta Tetap"],
        correctAnswer: "B"
    }, 
    {
        question: "Harta tak berwujud berupa hak istimewa atas suatu barang yang diberikan oleh pemerintah kepada perusahaan disebut?",
        options: ["A. Hak Paten", "B. Hak Asuh ", "C. Hak Cipta", "D. Harta Tetap"],
        correctAnswer: "A"
    },
    {
        question: "Harta tak berwujud berupa hak istimewa karena menciptakan sesuatu yang diberikan oleh pemerintah kepada perusahaan, misalnya hak cipta lagu. Disebut?",
        options: ["A. Hak Paten", "B. Hak Asuh ", "C. Hak Cipta", "D. Harta Tetap"],
        correctAnswer: "C"
    },
    {
        question: "Kewajiban untuk membayar yang harus dilakukan oleh perusahaan pada masa yang akan datang sebagai akibat kegiatan usaha kepada pihak tertentu. Disebut?",
        options: ["A. Utang/Kewajiban (Liabilities)", "B. Modal Saham/Equity ", "C. Beban/Expenses", "D. Harta Tetap"],
        correctAnswer: "A"
    }, 
    {
        question: "Kewajiban yang harus dilunasi dalam jangka waktu kurang dari satu tahun. Disebut?",
        options: ["A. Utang lancar", "B. Utang jangka panjang ", "C. Modal Saham/Equity", "D. Beban/Expenses"],
        correctAnswer: "A"
    },
    {
        question: "Utang lancar (jangka pendek) yang disertai promes (surat perjanjian) disebut?",
        options: ["A. Piutang", "B. Wesel bayar ", "C. Utang lancar", "D. Beban/Expenses"],
        correctAnswer: "B"
    },
    {
        question: "Utang lancar yang kewajiban yang timbul karena pembelian jasa atau barang secara kredit disebut?",
        options: ["A. Beban/Expenses", "B. Modal Saham/Equity ", "C. Utang jangka panjang", "D. Utang usaha / Utang dagang"],
        correctAnswer: "D"
    },
    {
        question: "Pinjaman perusahaan kepada Bank yang masa pelunasannya lebih dari 1 tahun disebut?",
        options: ["A. Utang bank", "B. Utang usaha / Utang dagang ", "C. Modal Saham/Equity", "D. Beban/Expenses"],
        correctAnswer: "A"
    },         
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let playerName = "";
  let playerClass = "";
  
  function startGame() {
    const titlePage = document.getElementById("titlePage");
    const gamePage = document.getElementById("gamePage");
    const nameInput = document.getElementById("name");
    const classInput = document.getElementById("class");
  
    playerName = nameInput.value;
    playerClass = classInput.value;
  
    if (playerName.trim() === "" || playerClass.trim() === "") {
      alert("Harap masukkan Nama dan Kelas Anda sebelum memulai permainan!");
      return;
    }
  
    titlePage.style.display = "none";
    gamePage.style.display = "block";
    showQuestion();
  }
  
  function showQuestion() {
    const questionElem = document.getElementById("question");
    const optionsElem = document.getElementById("options");
  
    questionElem.textContent = questions[currentQuestion].question;
  
    // Menghapus opsi jawaban sebelumnya
    optionsElem.innerHTML = "";
  
    // Menambahkan opsi jawaban baru
    questions[currentQuestion].options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.className = "option";
      button.setAttribute("onclick", `checkAnswer('${option.charAt(0)}')`);
      optionsElem.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const resultElem = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
  
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      resultElem.textContent = "Jawaban benar!";
      score++;
    } else {
      resultElem.textContent = "Jawaban salah.";
    }
  
    // Menampilkan tombol 'Lanjut'
    nextBtn.style.display = "block";
  
    // Menyembunyikan opsi jawaban setelah pemain memilih
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = true;
    }
  }
  
  function nextQuestion() {
    const resultElem = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
  
    // Menyembunyikan tombol 'Lanjut' dan menghapus pesan hasil
    nextBtn.style.display = "none";
    resultElem.textContent = "";
  
    // Mengaktifkan kembali opsi jawaban
    const options = document.getElementsByClassName("option");
    for (let i = 0; i < options.length; i++) {
      options[i].disabled = false;
    }
  
    // Pindah ke pertanyaan berikutnya atau menampilkan skor jika sudah selesai
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    const questionElem = document.getElementById("question");
    const optionsElem = document.getElementById("options");
    const resultElem = document.getElementById("result");
    const nextBtn = document.getElementById("nextBtn");
  
    questionElem.textContent = `Permainan selesai! Skor Anda: ${score}/${questions.length}`;
    optionsElem.innerHTML = "";
    resultElem.textContent = "";
  
    // Menyembunyikan tombol 'Lanjut' saat permainan selesai
    nextBtn.style.display = "none";
  }
  
  // Memulai permainan dengan menampilkan halaman judul
  const titlePage = document.getElementById("titlePage");
  titlePage.style.display = "block";
  