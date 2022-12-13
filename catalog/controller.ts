// Axios permet de faire des requêtes vers une URL
import axios, {AxiosResponse} from 'axios'; 

// export == public
export class Controller {
    static callMovies(): Promise<AxiosResponse> {
        // Implique un traitement asynchrone - promise (JS natif)
        return axios.get(`${process.env.MOVIES_URL}/movies`)
    }

    static callMovie(id: string): Promise<AxiosResponse> {
        return axios.get(`${process.env.MOVIES_URL}/movies/${id}`)
    }
}