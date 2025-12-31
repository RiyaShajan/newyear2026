// Target: January 1, 2026
const newYear = new Date('2026-01-01T00:00:00').getTime();
// For quick testing, you can use: 
//const newYear = Date.now() + 10000;

const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const nameBox = document.getElementById('nameBox');
const celebration = document.getElementById('celebration');
const wish = document.getElementById('wish');
const quote = document.getElementById('quote');

const quotesByName = {
  "Chancy": "I love my bestieee 💛\nYou’re the best thing that has happened in my life.\nI love you so much.\nI missed you a lot in 2025.\nMiss you buddy…",
  "Abi": "I love you chetta 💛\nIt’s been 7 months — so many memories.\nI love you so so much…",
  "Ajin": "From real-life friends to game buddies for more than a year 🎮\nSo vibing with you guyzz…",
  "Sharon": "From real-life friends to game buddies for more than a year 🎮\nSo vibing with you guyzz…",
  "Shiva Surya": "From real-life friends to game buddies for more than a year 🎮\nSo vibing with you guyzz…",
  "Sanjana": "My college bestie 💛\nYou were with me in my ups and downs.\nYou saw me cry, held my head on your shoulder.\nWe laughed, fought, felt everything.\nThank you for being with me.\nI love you bestie…"
};

const photosByName = {
  "Chancy": "Chancy.jpeg",
  "Abi": "Abi.jpeg",
  "Ajin": "Ajin.jpeg",
  "Sharon": "Sharon.jpeg",
  "Shiva Surya": "ShivaSurya.jpeg",
  "Sanjana": "Sanjana.jpeg"
};

const timer = setInterval(() => {
  const now = Date.now();
  const diff = newYear - now;

  if (diff <= 0) {
    clearInterval(timer);
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("title").classList.add("hidden");
    nameBox.classList.remove("hidden");
    document.body.classList.add("blur");
    createSparkles();
    return;
  }

  days.innerText = Math.floor(diff / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  hours.innerText = Math.floor((diff / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
  minutes.innerText = Math.floor((diff / (1000 * 60)) % 60).toString().padStart(2, '0');
  seconds.innerText = Math.floor((diff / 1000) % 60).toString().padStart(2, '0');
}, 1000);

function showPersonalized() {
  const inputName = document.getElementById("nameInput").value.trim();
  if (!inputName) {
    alert("Please enter your name! 🌷");
    return;
  }

  // Case-insensitive search: Find the key even if they type 'sanjana' instead of 'Sanjana'
  const matchedKey = Object.keys(quotesByName).find(
    key => key.toLowerCase() === inputName.toLowerCase()
  );

  document.body.classList.remove("blur");
  nameBox.classList.add("hidden");
  celebration.classList.remove("hidden");

  // Display the name they typed, but use the special quote if found
  wish.innerText = `Happy New Year, ${inputName} ✨`;
  quote.innerText = matchedKey ? quotesByName[matchedKey] : "Wishing you a beautiful year ahead 💛";

  const img = document.querySelector("#celebration img");
  
  // Update image source based on match
  if (matchedKey && photosByName[matchedKey]) {
    img.src = photosByName[matchedKey];
  } else {
    img.src = "default.jpg"; // Make sure you have a default image!
  }
  
  img.alt = "Memory with " + inputName;

  // Error handling: if the .jpeg doesn't exist, show a placeholder
  img.onerror = () => {
    img.src = "https://images.unsplash.com/photo-1546761431-a57637489b9e?auto=format&fit=crop&w=800&q=80";
  };
}

function createSparkles() {
  const container = document.querySelector(".sparkles");
  setInterval(() => {
    const sparkle = document.createElement("span");
    sparkle.innerText = Math.random() > 0.5 ? "✨" : "💛";
    sparkle.className = "sparkle-item"; // Use a class for easier CSS styling
    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 20 + 80 + "vh";
    sparkle.style.animationDuration = (Math.random() * 4 + 6) + "s";
    sparkle.style.fontSize = (Math.random() * 10 + 18) + "px";
    container.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 10000);
  }, 400);
}