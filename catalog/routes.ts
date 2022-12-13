import express, { Router, Request, Response } from 'express';
import { Controller } from './controller';

export const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World !');
})

router.get('/movies', (req: Request, res: Response) => {
    const httpRequest = Controller.callMovies();
    httpRequest
        .then(result => {
            res.send(result.data)
        })
        .catch(error => {
            res.send(error).status(500);
        });
})


router.get('/movies/:id', (req: Request, res: Response) => {
    const httpRequest = Controller.callMovie(req.params.id);
    httpRequest
        .then(result => {
            res.send(result.data)
        })
        .catch(error => {
            res.send(error).status(500);
        });
})
