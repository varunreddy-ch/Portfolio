import { createServer } from 'node:http';
import dotenv from 'dotenv';
import express from 'express';
import {GoogleGenerativeAI} from "@google/generative-ai";
import cors from "cors";




// Creating Express server
const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();
const hostname = '127.0.0.1';
const port = 3001;

const GEMINI_API = process.env.GEMINI_API;
const SYSTEM_INSTRUCTION = process.env.SYSTEM_INSTRUCTION;

const genAI = new GoogleGenerativeAI(GEMINI_API);

app.get('/chat', async(req, res) => {
    return res.send("Hi")
})

// console.log(SYSTEM_INSTRUCTION)

app.post('/chat', async (req, res) => {
    try {
        // return res.json({reply: "reply"})
        // console.log(req);
        const userMessage = req.body.query;
    
        if (!userMessage) {
          return res.status(400).json({ error: "Message is required" });
        }
        const model = genAI.getGenerativeModel({
          model: "gemini-1.5-flash",
          systemInstruction: SYSTEM_INSTRUCTION,
        });
    
        const chat = model.startChat({ history: req.body.history || [] });
    
        const response = await chat.sendMessage(userMessage);
        console.log("Full API Response:", JSON.stringify(response, null, 2));
        console.log(response.response.candidates[0].content.parts[0].text)
    
        return res.json({ reply: response.response.candidates[0].content.parts[0].text});
      } catch (error) {
        console.error("Error generating response:", error);
        res.status(500).json({ error: "Internal server error" });
      }
})

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
