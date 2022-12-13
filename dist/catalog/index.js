"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
// Charge le fichier .env à la racine - Converti toutes les entrées en var d'environnement système
dotenv_1.default.config();
// Process correspond aux var d'environnement système
const CATALOG_PORT = process.env.CATALOG_PORT;
// Create an app (HTTP Server)
const app = (0, express_1.default)();
// Load routes defined
app.use(routes_1.router);
// Configure and launch app on port
app.listen(CATALOG_PORT, () => {
    console.log(`Server is running on http://localhost:${CATALOG_PORT}`);
});
