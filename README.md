# 🚀 Turned 18

A smart web app that helps Indian users who just turned 18 understand and apply for essential services like PAN Card, Driving License, Bank Account, and more — in simple language.

🌐 Live App: https://turned-18.onrender.com/

---

## 🧠 About the Project

Turning 18 in India comes with many responsibilities, but the process is often confusing.

**Turned 18** solves this by providing:

* Step-by-step guidance
* Simple explanations
* AI-powered assistance (Saathi chatbot)
* Support for multiple languages

---

## ✨ Features

* 💬 AI Chat Assistant (Saathi)
* 🪪 Guidance for:

  * PAN Card
  * Driving License
  * Passport
  * Bank Account
  * SIM Card
  * Voter ID
* 🌏 Multi-language support
* ⚡ Fast and responsive UI
* 🌐 Fully deployed online

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* HTML, CSS

### Backend

* Node.js
* Express.js

### AI Integration

* Google Generative AI (Gemini)

### Deployment

* Render

---

## 📁 Project Structure

```
turned-18/
├── src/              # Frontend source code
├── server.js         # Backend server
├── index.html        # Entry point
├── package.json
├── vite.config.ts
```

---

## ⚙️ How to Run Locally

### 1. Clone the repository

```
git clone https://github.com/krish2147/turned-18.git
cd turned-18
```

### 2. Install dependencies

```
npm install
```

### 3. Add environment variable

Create a `.env` file:

```
GEMINI_API_KEY=your_api_key_here
```

### 4. Run in development mode

```
npm run dev
```

### 5. Build and run production

```
npm run build
npm start
```

---

## 📌 API Endpoints

### Health Check

```
GET /api/health
```

### Chat Endpoint

```
POST /chat
```

Body:

```
{
  "message": "I want to apply for PAN card",
  "language": "English",
  "age": 18
}
```

---

## ⚠️ Note

* Information may change over time. Always verify details from official government websites.
* AI responses are for guidance purposes only.

---

## 🚀 Future Improvements

* User login system
* Save chat history
* More government services
* Better multilingual support
* Mobile app version

---

## 👨‍💻 Author

**Krish Prajapati**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

