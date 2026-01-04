import express from 'express';
import fs from 'fs';
import path from 'path';
import cors from 'cors';

// __dirname alternative in ES module
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public")); // Static files ke liye

// Function to read JSON file
const readJsonFile = (filePath, res) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    });
};

// 🟢 Endpoint: Get Categories
app.get('/categories', (req, res) => {
    const filePath = path.join(__dirname, 'data/category.json');
    readJsonFile(filePath, res);
});

// 🟢 Endpoint: Get Restaurant Chains
app.get('/top-restaurant-chains', (req, res) => {
    const filePath = path.join(__dirname, 'data/restaurantChains.json');
    readJsonFile(filePath, res);
});

// 🟢 Endpoint: Get Name and Image
app.get('/info', (req, res) => {
    const info = {
        name: "Your App Name",
        image: "http://localhost:5000/images/logo.png"
    };
    res.json(info);
});

// Start Server
app.listen(port, () => {
    console.log(`✅ Server running at http://localhost:${port}`);
});
