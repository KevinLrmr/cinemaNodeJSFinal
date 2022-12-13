import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { router } from './routes';

// Charge le fichier .env à la racine - Converti toutes les entrées en var d'environnement système
dotenv.config(); 

// Process correspond aux var d'environnement système
const CATALOG_PORT = process.env.CATALOG_PORT;

// Create an app (HTTP Server)
const app: Express = express();

// Load routes defined
app.use(router);

// Configure and launch app on port
app.listen(CATALOG_PORT, () => {
    console.log(`Server is running on http://localhost:${CATALOG_PORT}`);
});