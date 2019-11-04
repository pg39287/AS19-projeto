import express, { Request, Response } from 'express';
import { User } from '../models/user';
const router = express.Router();

router.get('/', (_, res: Response) => {
    res.render('index')
});

router.get('/register', (_, res: Response) => {
    res.render('register');
});

router.post('/user', (req: Request, res: Response) => {
    let body = req.body;
    res.redirect('/');
});

module.exports = router;

