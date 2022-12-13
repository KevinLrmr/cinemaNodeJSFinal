import express, { Router, Request, Response } from 'express';
import { Controller } from './controller';

export const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World !');
})

router.get('/catalog', (req: Request, res: Response) => {
    const httpRequest = Controller.getMovies();
    httpRequest
        .then(result => {
            res.send(result.data)
        })
        .catch(error => {
            res.send(error).status(500);
        });
})

router.get('/catalog/:id', (req: Request, res: Response) => {
    const httpRequest = Controller.getMovie(req.params.id);
    httpRequest
        .then(result => {
            res.send(result.data)
        })
        .catch(error => {
            res.send(error).status(500);
        });
})

router.get('/movies', (req: Request, res: Response) => {
    const httpRequest = Controller.getMovies();
    httpRequest
        .then(result => {
            res.send(result.data)
        })
        .catch(error => {
            res.send(error).status(500);
        });
})

router.get('/movies/:id', (req: Request, res: Response) => {
    const httpRequest = Controller.getMovie(req.params.id);
    httpRequest
        .then(result => {
            if(result.data.length == 0) {
                res.status(404).send("Not found")
            } else {
                res.send(result.data)
            }
        })
        .catch(error => {
            res.send(error).status(500);
        });
})

