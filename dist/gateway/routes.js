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
exports.router.get('/catalog', (req, res) => {
    const httpRequest = controller_1.Controller.getMovies();
    httpRequest
        .then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
exports.router.get('/catalog/:id', (req, res) => {
    const httpRequest = controller_1.Controller.getMovie(req.params.id);
    httpRequest
        .then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
exports.router.get('/movies', (req, res) => {
    const httpRequest = controller_1.Controller.getMovies();
    httpRequest
        .then(result => {
        res.send(result.data);
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
exports.router.get('/movies/:id', (req, res) => {
    const httpRequest = controller_1.Controller.getMovie(req.params.id);
    httpRequest
        .then(result => {
        if (result.data.length == 0) {
            res.status(404).send("Not found");
        }
        else {
            res.send(result.data);
        }
    })
        .catch(error => {
        res.send(error).status(500);
    });
});
