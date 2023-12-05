import { Request, Response } from 'express';
import DeckService from '../services/deck';

class DeckController {
    static createDeck = async (request: Request, response: Response) => {
        try {
            const data = request.body;
            const created = await DeckService.createDeckS(data);
            console.log("Aqui");
            
            return response.status(201).json(created);
        } catch (error: any) {
            const { status, message } = error;
            console.log("Aqui", status, message);
            return response.status(status).json(message);
        }
    }

    static getDecks = async (_request: Request, response: Response) => {
        try {
            const decks = await DeckService.getDeckS();
            return response.status(200).json(decks);
        } catch (error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }

    static deleteDeck = async (request: Request, response: Response) => {
        const { id } = request.params;
        try {
            const deleted = await DeckService.deleteDeckS(id);
            return response.status(200).json(deleted);
        } catch (error: any) {
            const { status, message } = error;
            return response.status(status).json(message);
        }
    }
}

export default DeckController;