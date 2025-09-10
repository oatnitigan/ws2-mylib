import express from 'express';
import 'reflect-metadata';
import dotenv from 'dotenv';
import { AppDataSource } from './data-source';

// Load environment variables
dotenv.config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize TypeORM
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((error) => {
        console.error("Error during Data Source initialization:", error)
    });

// Basic route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Library Management System API' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
