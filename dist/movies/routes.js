"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.send('Hello World !');
});
exports.router.get('/movies/:id', (req, res) => {
    res.send(controller_1.Controller.callMovie(req.params.id));
});
exports.router.get('/movies', (req, res) => {
    res.send(controller_1.Controller.callMovies());
});
