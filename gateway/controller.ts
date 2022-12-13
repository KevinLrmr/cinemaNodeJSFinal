// Axios permet de faire des requêtes vers une URL
import axios, {AxiosResponse} from 'axios'; 

// export == public
export class Controller {
    static getCatalog(): Promise<AxiosResponse> {
        // Implique un traitement asynchrone - promise (JS natif)
        return axios.get(`${process.env.CATALOG_URL}/`)
    }

    static getCatalogs(id: string): Promise<AxiosResponse> {
        return axios.get(`${process.env.CATALOG_URL}/${id}`)
    }

    static getMovie(id: string): Promise<AxiosResponse> {
        return axios.get(`${process.env.CATALOG_URL}/movies/${id}`)
    }

    static getMovies(): Promise<AxiosResponse> {
        return axios.get(`${process.env.CATALOG_URL}/movies`)
    }
}
