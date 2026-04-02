/*import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";
console.log(process.env.GEMINI_API_KEY);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message, language, age } = req.body;

    const systemPrompt = `
You are an assistant for Indian users who just turned 18.

- Answer in ${language}
- Be simple and helpful
- Guide what to do first based on age (${age})
- If asked in detail → give steps
`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    });

    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});*/