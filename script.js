// ========== STATE ==========
let player1 = { name: "Player 1", gender: "female" };
let player2 = { name: "Player 2", gender: "male" };
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

// ========== GENDER BUTTONS ==========
document.querySelectorAll(".gender-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const playerNum = btn.dataset.player;
    const gender = btn.dataset.gender;

    btn.parentElement.querySelectorAll(".gender-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    if (playerNum === "1") player1.gender = gender;
    else player2.gender = gender;
  });
});

// ========== HEAT BUTTONS ==========
document.querySelectorAll(".heat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".heat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentHeat = btn.dataset.heat;
  });
});

// ========== START GAME ==========
document.getElementById("start-btn").addEventListener("click", () => {
  player1.name = document.getElementById("player1-name").value.trim() || "Player 1";
  player2.name = document.getElementById("player2-name").value.trim() || "Player 2";

  document.getElementById("p1-turn-btn").textContent = player1.name;
  document.getElementById("p2-turn-btn").textContent = player2.name;

  roundCount = 0;

  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");

  loadNewQuestion();
});

// ========== HELPER: Get combined pools ==========
function getPoolsForHeat(heat) {
  const v = imagePools.vanilla || { people: [], objects: [], activities: [] };
  const m = imagePools.medium || { people: [], objects: [], activities: [] };
  const s = imagePools.spicy || { people: [], objects: [], activities: [] };

  if (heat === "vanilla") {
    return {
      people: v.people || [],
      objects: v.objects || [],
      activities: v.activities || []
    };
  }

  if (heat === "medium") {
    return {
      people: [...(v.people || []), ...(m.people || [])],
      objects: [...(v.objects || []), ...(m.objects || [])],
      activities: m.activities || []
    };
  }

  // spicy
  return {
    people: [...(v.people || []), ...(m.people || []), ...(s.people || [])],
    objects: [...(v.objects || []), ...(m.objects || []), ...(s.objects || [])],
    activities: s.activities || []
  };
}

// ========== LOAD QUESTION ==========
function loadNewQuestion() {
  const pool = questions[currentHeat];
  if (!pool || pool.length === 0) {
    alert("No questions yet for this heat level!");
    return;
  }

  const availableIndexes = pool
    .map((_, i) => i)
    .filter(i => !usedQuestions[currentHeat].includes(i));

  const list = availableIndexes.length > 0 ? availableIndexes : pool.map((_, i) => i);
  const chosenIndex = list[Math.floor(Math.random() * list.length)];
  currentQuestion = pool[chosenIndex];

  if (!usedQuestions[currentHeat].includes(chosenIndex)) {
    usedQuestions[currentHeat].push(chosenIndex);
  }

  player1Choice = null;
  player2Choice = null;
  currentPlayer = null;

  updateStatus();
  document.getElementById("reveal-btn").disabled = true;

  document.getElementById("question-text").textContent = currentQuestion.question;
  document.getElementById("current-heat").textContent =
    currentHeat.charAt(0).toUpperCase() + currentHeat.slice(1);

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
  const player = playerKey === "p1" ? player1 : player2;

  document.getElementById("turn-section").classList.add("hidden");
  document.getElementById("options-container").classList.remove("hidden");

  const container = document.getElementById("options-container");
  container.innerHTML = "";

  // Get the correct combined pools for this heat
  const heatPools = getPoolsForHeat(currentHeat);

  // Collect all possible images from the pools this question allows
  let possibleImages = [];
  currentQuestion.pools.forEach(poolName => {
    if (heatPools[poolName]) {
      possibleImages = possibleImages.concat(heatPools[poolName]);
    }
  });

  // Filter by gender: opposite + neutral
  const opposite = player.gender === "male" ? "female" : "male";
  possibleImages = possibleImages.filter(img =>
    img.gender === opposite || img.gender === "neutral"
  );

  // Shuffle and pick
  const shuffled = [...possibleImages].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, currentQuestion.count || 3);

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

  document.getElementById("options-container").classList.add("hidden");
  document.getElementById("turn-section").classList.remove("hidden");

  document.getElementById("p1-turn-btn").disabled = !!player1Choice;
  document.getElementById("p2-turn-btn").disabled = !!player2Choice;
}

function updateStatus() {
  document.getElementById("p1-status").textContent =
    `${player1.name}: ${player1Choice ? "Chosen ✓" : "Waiting..."}`;
  document.getElementById("p2-status").textContent =
    `${player2.name}: ${player2Choice ? "Chosen ✓" : "Waiting..."}`;
}

// ========== REVEAL ==========
document.getElementById("reveal-btn").addEventListener("click", () => {
  document.getElementById("game-screen").classList.add("hidden");
  document.getElementById("reveal-screen").classList.remove("hidden");

  const content = document.getElementById("reveal-content");
  content.innerHTML = `
    <div class="reveal-block">
      <p><strong>${player1.name}</strong> ${currentQuestion.reveal} ${player1Choice.label}</p>
      <img src="${player1Choice.src}" alt="Choice">
    </div>
    <div class="reveal-block">
      <p><strong>${player2.name}</strong> ${currentQuestion.reveal} ${player2Choice.label}</p>
      <img src="${player2Choice.src}" alt="Choice">
    </div>
  `;
});

// ========== NEXT ROUND ==========
document.getElementById("next-btn").addEventListener("click", () => {
  roundCount++;

  if (roundCount >= MAX_ROUNDS) {
    roundCount = 0;
    usedQuestions = { vanilla: [], medium: [], spicy: [] };
    document.getElementById("reveal-screen").classList.add("hidden");
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
    return;
  }

  document.getElementById("reveal-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
  loadNewQuestion();
});

// ========== CHANGE HEAT ==========
document.getElementById("change-heat-btn").addEventListener("click", () => {
  const levels = ["vanilla", "medium", "spicy"];
  currentHeat = levels[(levels.indexOf(currentHeat) + 1) % 3];
  loadNewQuestion();
});

// ========== HOME LINK (if you have it) ==========
const homeLink = document.getElementById("home-link");
if (homeLink) {
  homeLink.addEventListener("click", () => {
    roundCount = 0;
    usedQuestions = { vanilla: [], medium: [], spicy: [] };
    document.getElementById("game-screen").classList.add("hidden");
    document.getElementById("reveal-screen").classList.add("hidden");
    document.getElementById("start-screen").classList.remove("hidden");
  });
}