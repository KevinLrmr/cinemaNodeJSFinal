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
    static getCatalog() {
        // Implique un traitement asynchrone - promise (JS natif)
        return axios_1.default.get(`${process.env.CATALOG_URL}/`);
    }
    static getCatalogs(id) {
        return axios_1.default.get(`${process.env.CATALOG_URL}/${id}`);
    }
    static getMovie(id) {
        return axios_1.default.get(`${process.env.CATALOG_URL}/movies/${id}`);
    }
    static getMovies() {
        return axios_1.default.get(`${process.env.CATALOG_URL}/movies`);
    }
}
exports.Controller = Controller;
