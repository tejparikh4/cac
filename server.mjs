import express from 'express';
import cors from 'cors';
import OpenAI from 'openai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const apiKey = process.env.API_KEY;


const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));


const openai = new OpenAI({ apiKey: apiKey }); // Replace with your actual OpenAI API key

// Route to handle ChatGPT API request
app.post('/api/chat', async (req, res) => {
    const { context, message } = req.body;

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",  // You can adjust the model to match your needs
            messages: [
                { role: "system", content: `You are an educational assistant. You will answer every question in a maximum of 2 brief, concise sentences. You will provide very specific details in your responses. You are to answer the following question in the context of the following question and its answer: ${context}` },
                { role: "user", content: message },  // Using the message sent from the user
            ],
        });

        res.json(completion.choices[0].message);  // Send the ChatGPT response back to the client
        console.log(completion.choices[0].message)
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error with ChatGPT API');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
