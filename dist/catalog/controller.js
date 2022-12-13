"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
// Axios permet de faire des requêtes vers une URL
const axios_1 = __importDefault(require("axios"));
// export == public
class Controller {
    static callMovies() {
        // Implique un traitement asynchrone - promise (JS natif)
        return axios_1.default.get(`${process.env.MOVIES_URL}/movies`);
    }
    static callMovie(id) {
        return axios_1.default.get(`${process.env.MOVIES_URL}/movies/${id}`);
    }
}
exports.Controller = Controller;
