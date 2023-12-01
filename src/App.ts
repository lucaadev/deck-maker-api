import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import CardController from './controllers/card';
import DeckController from './controllers/deck';
import { Request, Response } from 'express';

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(cors());
        this.config();
        this.app.get('/', (_request: Request, response: Response) => response.send({ ok: true }));

        //this.app.post('/login', DeckController.createDeck);
        this.app.get('/colection', CardController.getCards);
        this.app.get('/decks', DeckController.getDecks);
        this.app.post('/', DeckController.createDeck);
        this.app.post('/creation', CardController.createCard);
        this.app.delete('/colection/:id?', CardController.deleteCard);
        this.app.delete('/decks/:id?', DeckController.deleteDeck);
    }

    private config(): void {
        const accessControl: express.RequestHandler = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', 'https://deck-maker.vercel.app');
            res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            next();
        };
    
        this.app.use(accessControl);
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}

export { App };

export const { app } = new App();