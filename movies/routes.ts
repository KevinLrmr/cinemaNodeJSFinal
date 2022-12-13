import express, { Router, Request, Response } from 'express';
import { Controller } from './controller';


export const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => {
    res.send('Hello World !');
})

router.get('/movies/:id', (req: Request, res: Response) => {
    res.send(Controller.callMovie(req.params.id));
})

router.get('/movies', (req: Request, res: Response) => {
    res.send(Controller.callMovies());
})
