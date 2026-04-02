import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenerativeAI } from "@google/generative-ai";
import e from "express";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Chat endpoint
  app.post("/chat", async (req, res) => {
    try {
      const { message, language, age } = req.body;

      const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });

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

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Chat endpoint available at http://localhost:${PORT}/chat`);
  });
}

startServer();
