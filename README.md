# # 🎉 New Year Countdown Website

A personalized New Year countdown website with a midnight glow aesthetic, sparkles, name-based messages, and custom photos for each friend. Instead of a normal wish, this project delivers an emotional, interactive experience.

---

## ✨ Features

* ⏳ Live countdown to New Year 2026
* 🌙 Midnight glow background with sparkles
* 💛 Name input popup with background blur
* 🎁 Personalized quotes for each friend
* 🖼️ Custom photo reveal per name
* 📱 Fully responsive (mobile & desktop)
* 🧼 Smooth transitions and clean UI

---

## 👥 Personalized Messages

Each friend gets a custom message and photo:

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling, animations, responsiveness
* **JavaScript (Vanilla)** – Countdown logic, personalization, effects

No frameworks used.

---

## 📂 Project Structure

```
newyear2026/
│
├── index.html
├── style.css
├── script.js
├── Chancy.jpeg
├── Abi.jpeg
├── Ajin.jpeg
├── Sharon.jpeg
├── ShivaSurya.jpeg
├── Sanjana.jpeg
├── default.jpg
└── README.md
```

---

## 🚀 How It Works

1. Countdown runs until the target time.
2. When time reaches zero:

   * Countdown disappears
   * Name input popup appears
   * Background blurs
3. User enters their name and submits.
4. A personalized New Year wish, quote, and image are revealed.

---

## 🧪 Testing Mode

For quick testing, the countdown is set to **10 seconds** in `script.js`:

```js
const newYear = Date.now() + 10000;
```

Change it to the real New Year time when deploying:

```js
const newYear = new Date('2026-01-01T00:00:00').getTime();
```

---

## 🌐 Deployment

You can deploy this site using:

* GitHub Pages
* Netlify
* Vercel

Just upload all files and keep image names exactly as referenced.

---

## 💛 Motivation

This project was built as a heartfelt alternative to a simple New Year wish — combining emotions, memories, and creativity into a single interactive experience.

---

## 📜 License

Free to use for personal projects and learning purposes.

---

✨ *Made with love, late nights, and a lot of care.*
