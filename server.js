/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🔥 THIS IS YOUR AI ROUTE
app.post("/chat", async (req, res) => {
  try {
    console.log("Incoming request:", req.body);

    const { message } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are Saathi." },
        { role: "user", content: message }
      ],
    });

    console.log("AI response received");

    res.json({
      reply: response.choices[0].message.content
    });

  } catch (error) {
    console.error("FULL ERROR:", error); // 👈 VERY IMPORTANT
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => {
  console.log("✅ Server running at http://localhost:5000");
});*/
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const PORT = process.env.PORT || 5000;

async function startServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());

  // Health route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Chat route
  app.post("/chat", async (req, res) => {
    try {
      const { message, language, age } = req.body;

      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-pro-latest",
      });

      const prompt = `
You are an assistant for Indian users who just turned 18.

- Answer in ${language}
- Be simple and helpful
- Only talk about PAN, Passport, Driving License, Bank Account, SIM, Voter ID
- Guide what to do first based on age (${age})
- If asked in detail → give steps

User question: ${message}
`;

      const result = await model.generateContent(prompt);
      const response = await result.response;

      res.json({
        reply: response.text(),
      });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: error.message });
    }
  });

  // 🔥 DEV MODE (Vite)
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });

    app.use(vite.middlewares);
  }

  // 🔥 PRODUCTION MODE
  else {
    const distPath = path.join(__dirname, "dist");

    app.use(express.static(distPath));

    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  // ✅ ONLY ONE LISTEN
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Chat endpoint: /chat`);
  });
}

startServer();