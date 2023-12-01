import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import CardController from './controllers/card';
import DeckController from './controllers/deck';
import { Request, Response } from 'express';
import { get } from 'http';

class App {
    public app: express.Express;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.app.use(
            cors({
                methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
              origin: process.env.FRONTEND_URL
            })
          );
        this.app.get('/', (_request: Request, response: Response) => response.send({ ok: true }));

        //this.app.post('/login', DeckController.createDeck);
        this.app.get('/colection', CardController.getCards);
        this.app.get('/decks', DeckController.getDecks);
        this.app.post('/', DeckController.createDeck);
        this.app.post('/creation', CardController.createCard);
        this.app.delete('/colection/:id?', CardController.deleteCard);
        this.app.delete('/decks/:id?', DeckController.deleteDeck);
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}

export { App };

export const { app } = new App();