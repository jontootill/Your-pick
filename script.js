// ========== STATE ==========
let player1Name = "Player 1";
let player2Name = "Player 2";
let currentHeat = "vanilla";
let currentQuestion = null;
let player1Choice = null;
let player2Choice = null;
let currentPlayer = null;
let roundCount = 0;
const MAX_ROUNDS = 4;
let usedQuestions = {
  vanilla: [],
  medium: [],
  spicy: []
};

// ========== START SCREEN ==========
document.querySelectorAll(".heat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".heat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentHeat = btn.dataset.heat;
  });
});

document.getElementById("start-btn").addEventListener("click", () => {
  player1Name = document.getElementById("player1-name").value.trim() || "Player 1";
  player2Name = document.getElementById("player2-name").value.trim() || "Player 2";

  document.getElementById("p1-turn-btn").textContent = player1Name;
  document.getElementById("p2-turn-btn").textContent = player2Name;

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  loadNewQuestion();
});

// ========== GAME LOGIC ==========
function loadNewQuestion() {
  const pool = questions[currentHeat];
  if (!pool || pool.length === 0) {
    alert("No questions yet for this heat level!");
    return;
  }

  // Pick a random question (avoid repeats where possible)
  const availableIndexes = pool
    .map((_, i) => i)
    .filter(i => !usedQuestions[currentHeat].includes(i));

  const list = availableIndexes.length > 0 ? availableIndexes : pool.map((_, i) => i);
  const chosenIndex = list[Math.floor(Math.random() * list.length)];
  currentQuestion = pool[chosenIndex];

  if (!usedQuestions[currentHeat].includes(chosenIndex)) {
    usedQuestions[currentHeat].push(chosenIndex);
  }

  // Reset choices
  player1Choice = null;
  player2Choice = null;
  currentPlayer = null;

  updateStatus();
  document.getElementById("reveal-btn").disabled = true;

  // Show question
  document.getElementById("question-text").textContent = currentQuestion.question;
  document.getElementById("current-heat").textContent =
    currentHeat.charAt(0).toUpperCase() + currentHeat.slice(1);

  // Show turn section, hide options
  document.getElementById("turn-section").classList.remove("hidden");
  document.getElementById("options-container").classList.add("hidden");
  document.getElementById("options-container").innerHTML = "";

  document.getElementById("p1-turn-btn").disabled = false;
  document.getElementById("p2-turn-btn").disabled = false;
}

// ========== TURN SELECTION ==========
document.getElementById("p1-turn-btn").addEventListener("click", () => {
  if (player1Choice) return;
  startPlayerTurn("p1");
});

document.getElementById("p2-turn-btn").addEventListener("click", () => {
  if (player2Choice) return;
  startPlayerTurn("p2");
});

function startPlayerTurn(playerKey) {
  currentPlayer = playerKey;

  document.getElementById("turn-section").classList.add("hidden");
  document.getElementById("options-container").classList.remove("hidden");

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  // Gather images from the correct heat level's pools
  let possibleImages = [];
  const heatPools = imagePools[currentHeat] || {};

  currentQuestion.pools.forEach(poolName => {
    if (heatPools[poolName]) {
      possibleImages = possibleImages.concat(heatPools[poolName]);
    }
  });

  // Shuffle and pick the required number
  const shuffled = [...possibleImages].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, currentQuestion.count || 3);

  // Render the cards
  selected.forEach(img => {
    const card = document.createElement("div");
    card.className = "option-card";
    card.innerHTML = `<img src="${img.src}" alt="Option">`;
    card.addEventListener("click", () => selectOption(img));
    container.appendChild(card);
  });
}

function selectOption(option) {
  if (currentPlayer === "p1") {
    player1Choice = option;
  } else {
    player2Choice = option;
  }

  updateStatus();

  if (player1Choice && player2Choice) {
    document.getElementById("options-container").classList.add("hidden");
    document.getElementById("reveal-btn").disabled = false;
    return;
  }

  // Back to turn selection
  document.getElementById("options-container").classList.add("hidden");
  document.getElementById("turn-section").classList.remove("hidden");

  document.getElementById("p1-turn-btn").disabled = !!player1Choice;
  document.getElementById("p2-turn-btn").disabled = !!player2Choice;
}

function updateStatus() {
  document.getElementById("p1-status").textContent =
    `${player1Name}: ${player1Choice ? "Chosen ✓" : "Waiting..."}`;
  document.getElementById("p2-status").textContent =
    `${player2Name}: ${player2Choice ? "Chosen ✓" : "Waiting..."}`;
}

// ========== REVEAL ==========
document.getElementById("reveal-btn").addEventListener("click", () => {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("reveal-screen").classList.remove("hidden");

  const content = document.getElementById("reveal-content");
  content.innerHTML = `
    <div class="reveal-block">
      <p><strong>${player1Name}</strong> ${currentQuestion.reveal} ${player1Choice.label}</p>
      <img src="${player1Choice.src}" alt="Choice">
    </div>
    <div class="reveal-block">
      <p><strong>${player2Name}</strong> ${currentQuestion.reveal} ${player2Choice.label}</p>
      <img src="${player2Choice.src}" alt="Choice">
    </div>
  `;
});

// ========== NEXT ROUND ==========
document.getElementById("next-btn").addEventListener("click", () => {
  roundCount++;

  if (roundCount >= MAX_ROUNDS) {
    // Return to home after 4 rounds
    roundCount = 0;
    usedQuestions = { vanilla: [], medium: [], spicy: [] }; // optional reset
    document.getElementById("reveal-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
    return;
  }

  document.getElementById("reveal-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  loadNewQuestion();
});

document.getElementById("home-link").addEventListener("click", () => {
  roundCount = 0;
  usedQuestions = { vanilla: [], medium: [], spicy: [] };
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("reveal-screen").classList.add("hidden");
  document.getElementById("start-screen").classList.remove("hidden");
});